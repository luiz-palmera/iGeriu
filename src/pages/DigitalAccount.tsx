import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CardBalance } from "../components/DigitalAccount/CardBalance";
import { CardAutoWithdraw } from "../components/DigitalAccount/CardAutoWithdraw";
import { TransactionTable, type Transaction } from "../components/DigitalAccount/TransactionTable";
import { useToast } from "../components/ui/Toast/ToastContainer";
import { IconButton } from "../components/ui/IconButton";
import { FunnelIcon } from "@heroicons/react/24/outline";
import { ActionMenu, type Actions } from "../components/ui/ActionMenu";

const transactionsMock: Transaction[] = [
  { id: "#T001", date: "18/08/2025", description: "Depósito via PIX", amount: "R$ 500,00", status: "Concluído" },
  { id: "#T002", date: "19/08/2025", description: "Pagamento Fatura", amount: "R$ -200,00", status: "Pendente" },
  { id: "#T003", date: "20/08/2025", description: "Saque solicitado", amount: "R$ -300,00", status: "Pendente" },
];

export default function DigitalAccount({ transactions = transactionsMock }: { transactions?: Transaction[] }) {
  const [saldo, setSaldo] = useState(1283.75);
  const [transactionsState, setTransactionsState] = useState<Transaction[]>(transactions);
  const { addToast, ToastContainer } = useToast();

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"deposit" | "withdraw">("deposit");
  const [inputValue, setInputValue] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [filter, setFilter] = useState<"all" | "pending" | "completed">("all");

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const [autoWithdrawEnabled, setAutoWithdrawEnabled] = useState(false);
  const [withdrawTarget, setWithdrawTarget] = useState<number | null>(null);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  useEffect(() => {
    if (!autoWithdrawEnabled) return;
    if (withdrawTarget === null || withdrawTarget <= 0) return;
    if (saldo <= withdrawTarget) return;

    const excedente = +(saldo - withdrawTarget).toFixed(2);
    if (excedente <= 0) return;

    setSaldo(prev => Math.max(withdrawTarget, prev - excedente));

    const newTransaction: Transaction = {
      id: `#T${(transactionsState.length + 1).toString().padStart(3, "0")}`,
      date: new Date().toLocaleDateString("pt-BR"),
      description: "Saque automático",
      amount: (-excedente).toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
      status: "Concluído",
    };
    setTransactionsState(prev => [newTransaction, ...prev]);

    addToast(`Saque automático de ${excedente.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} realizado!`);
  }, [saldo, autoWithdrawEnabled, withdrawTarget, transactionsState.length, addToast]);

  const getFilteredTransactions = () => {
    if (filter === "pending") return transactionsState.filter((t) => t.status === "Pendente");
    if (filter === "completed") return transactionsState.filter((t) => t.status === "Concluído");
    return transactionsState;
  };

  const actions: Actions[] = [
    { label: "Todas", onClick: () => setFilter("all") },
    { label: "Pendentes", onClick: () => setFilter("pending") },
    { label: "Concluídas", onClick: () => setFilter("completed") },
  ];

  const handleTransaction = (amount: number, description: string, status: "Concluído" | "Pendente") => {
    if (status === "Concluído") setSaldo((prev) => prev + amount);

    const newTransaction: Transaction = {
      id: `#T${(transactionsState.length + 1).toString().padStart(3, "0")}`,
      date: new Date().toLocaleDateString("pt-BR"),
      description,
      amount: amount.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
      status,
    };
    setTransactionsState((prev) => [newTransaction, ...prev]);
    addToast(`Transação registrada!`);
  };

  const handleSubmit = () => {
    const raw = parseFloat(inputValue.replace(",", "."));
    if (isNaN(raw)) return addToast("Digite um valor válido!");

    const amount = modalType === "withdraw" ? -Math.abs(raw) : Math.abs(raw);
    if (modalType === "deposit") handleTransaction(amount, inputDescription || "Depósito manual", "Concluído");
    else handleTransaction(amount, inputDescription || "Saque manual", "Pendente");

    setInputValue("");
    setInputDescription("");
    setShowModal(false);
  };

  const handleAutoWithdrawConfig = (enabled: boolean, target: number | null) => {
    if (enabled && (!target || target <= 0)) {
      addToast("Defina um valor-alvo válido antes de ativar.");
      return;
    }
    setAutoWithdrawEnabled(enabled);
    setWithdrawTarget(target);
    addToast(enabled ? `Saque automático ativado em R$ ${target}` : "Saque automático desativado");
  };

  const filterLabel = filter === "all" ? "Todas" : filter === "pending" ? "Pendentes" : "Concluídas";

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="flex h-full w-full p-8 items-start">
        <div className="flex flex-col space-y-4 items-end justify-start">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <CardBalance
              saldo={saldo}
              onSolicitarSaque={() => { setModalType("withdraw"); setShowModal(true); }}
              onDepositar={() => { setModalType("deposit"); setShowModal(true); }}
            />
          </motion.div>
          <AnimatePresence>
            <motion.div
              key="auto-withdraw"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <CardAutoWithdraw onConfigChange={handleAutoWithdrawConfig} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex flex-col w-full h-full px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Histórico de transações</h2>
            <div className="px-4 py-2 relative">
              <ActionMenu icon={false} actions={actions}>
                <IconButton onClick={() => {}} icon={<FunnelIcon className="h-4 w-4" />} text={`Filtrar: ${filterLabel}`} />
              </ActionMenu>
            </div>
          </div>
          <TransactionTable
            onPageChange={setCurrentPage}
            currentPage={currentPage}
            pageSize={pageSize}
            transactions={getFilteredTransactions()}
          />
        </div>

        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center w-full justify-center bg-black/40"
              onClick={() => setShowModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-white rounded-2xl shadow-xl p-6 w-96 space-y-4"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-lg font-semibold text-gray-800">
                  {modalType === "deposit" ? "Novo Depósito" : "Novo Saque"}
                </h2>

                <input type="number" placeholder="Valor" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="w-full border rounded-lg p-2 text-gray-700" />

                <input type="text" placeholder="Descrição" value={inputDescription} onChange={(e) => setInputDescription(e.target.value)} className="w-full border rounded-lg p-2 text-gray-700" />

                <div className="flex justify-end space-x-2">
                  <button onClick={() => setShowModal(false)} className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300">Cancelar</button>
                  <button onClick={handleSubmit} className={`px-4 py-2 rounded-lg text-white ${modalType === "deposit" ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"}`}>Confirmar</button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <ToastContainer />
    </>
  );
}
