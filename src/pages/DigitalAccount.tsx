import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CardBalance } from "../components/DigitalAccount/CardBalance";
import { CardAutoWithdraw } from "../components/DigitalAccount/CardAutoWithdraw";
import { TransactionTable, type Transaction } from "../components/DigitalAccount/TransactionTable";
import { useToast } from "../components/ui/Toast/ToastContainer";
import { IconButton } from "../components/ui/IconButton";
import { ArrowUpOnSquareIcon, FunnelIcon } from "@heroicons/react/24/outline";

const transactionsMock: Transaction[] = [
  { id: "#T001", date: "18/08/2025", description: "Depósito via PIX", amount: "R$ 500,00", status: "Concluído" },
  { id: "#T002", date: "19/08/2025", description: "Pagamento Fatura", amount: "R$ -200,00", status: "Concluído" },
  { id: "#T003", date: "20/08/2025", description: "Saque solicitado", amount: "R$ -300,00", status: "Pendente" },
];

export default function DigitalAccount({ transactions = transactionsMock }: { transactions?: Transaction[] }) {
  const [saldo, setSaldo] = useState(1520.75);
  const [autoWithdrawEnabled, setAutoWithdrawEnabled] = useState(false);
  const [transactionsState, setTransactionsState] = useState<Transaction[]>(transactions);
  const { addToast, ToastContainer} = useToast();

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"deposit" | "withdraw">("deposit");
  const [inputValue, setInputValue] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  const handleBalanceUpdate = (amount: number, description: string) => {
    setSaldo((prev) => prev + amount);

    const newTransaction: Transaction = {
      id: `#T${(transactionsState.length + 1).toString().padStart(3, "0")}`,
      date: new Date().toLocaleDateString("pt-BR"),
      description,
      amount: amount.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      }),
      status: "Concluído",
    };

    setTransactionsState((prev) => [newTransaction, ...prev]);
  };

  const handleSubmit = () => {
    const raw = parseFloat(inputValue.replace(",", "."));
    if (isNaN(raw)) return addToast("Digite um valor válido!");
    
    const amount = modalType === "withdraw" ? -Math.abs(raw) : Math.abs(raw);

    handleBalanceUpdate(amount, inputDescription || (modalType === "withdraw" ? "Saque manual" : "Depósito manual"));
    setInputValue("");
    setInputDescription("");
    setShowModal(false);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex h-full w-full p-8"
      >
        <div className="flex flex-col space-y-4 items-start">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CardBalance
              saldo={saldo}
              onSolicitarSaque={() => {
                setModalType("withdraw");
                setShowModal(true);
              }}
              onDepositar={() => {
                setModalType("deposit");
                setShowModal(true);
              }}
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
              <CardAutoWithdraw />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex flex-col w-full h-full p-8">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-xl font-semibold">Extrato</h2>
                <IconButton onClick={() => {}} icon={<FunnelIcon className="h-4 w-4"/>} text="Filtrar"/>            
            </div>
          <TransactionTable transactions={transactionsState} />
        </div>

        {/* Modal */}
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

                <input
                  type="number"
                  placeholder="Valor"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full border rounded-lg p-2 text-gray-700"
                />

                <input
                  type="text"
                  placeholder="Descrição"
                  value={inputDescription}
                  onChange={(e) => setInputDescription(e.target.value)}
                  className="w-full border rounded-lg p-2 text-gray-700"
                />

                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSubmit}
                    className={`px-4 py-2 rounded-lg text-white ${
                      modalType === "deposit"
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-red-600 hover:bg-red-700"
                    }`}
                  >
                    Confirmar
                  </button>
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