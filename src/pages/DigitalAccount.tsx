import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TransactionTable, { type Transaction } from "../components/DigitalAccount/TransactionTable";
import { CardBalance} from "../components/DigitalAccount/CardBalance";
import { CardAutoWithdraw } from "../components/DigitalAccount/CardAutoWithdraw";

export default function DigitalAccount() {
  const [saldo, setSaldo] = useState(1520.75);
  const [autoWithdrawEnabled, setAutoWithdrawEnabled] = useState(false);

  

  const transactionsMock: Transaction[] = [
    { id: "#T001", date: "18/08/2025", description: "Depósito via PIX", amount: "R$ 500,00", status: "Concluído" },
    { id: "#T002", date: "19/08/2025", description: "Pagamento Fatura", amount: "R$ -200,00", status: "Concluído" },
    { id: "#T003", date: "20/08/2025", description: "Saque solicitado", amount: "R$ -300,00", status: "Pendente" },
  ];

  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  const paginatedTransactions = transactionsMock.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex h-full w-full space-x-8 p-8"
    >
        <div className="flex flex-col space-y-4 items-start">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CardBalance
              saldo={saldo}
              onSolicitarSaque={() => alert("Solicitar saque")}
            />
          </motion.div>
          <AnimatePresence>
            <motion.div
              key="auto-withdraw"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: 0.2 }} // delay opcional
            >
              <CardAutoWithdraw />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex flex-col w-full h-full p-8">
          <h3 className="text-md font-semibold text-gray-800">Extrato</h3>
          <TransactionTable transactions={paginatedTransactions} />
        </div>
    </motion.div>
  );
}
