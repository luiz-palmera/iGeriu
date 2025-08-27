
import { motion } from "framer-motion";
import TransactionStatus from "./TransactionStatus";
import { Table } from "../ui/Table/Table";
import { TableHead } from "../ui/Table/TableHead";
import { TableCell } from "../ui/Table/TableCell";
import { TableRow } from "../ui/Table/TableRow";
import { Pagination } from "../ui/Table/Pagination";

export type Transaction = {
  id: string;
  date: string;
  description: string;
  amount: string;
  status: "Concluído" | "Pendente";
};

type TransactionTableProps = {
  transactions: Transaction[];
};
export const TransactionTable = ({transactions}:TransactionTableProps) => {
  return (
    <>
        <Table>
            <TableHead>
                <TableCell header className="w-18 text-xs">Data</TableCell>
                <TableCell header className="w-18 text-xs">Descrição</TableCell>
                <TableCell header className="w-18 text-xs">Valor</TableCell>
                <TableCell header className="w-18 text-xs">Status</TableCell>
            </TableHead>
            <motion.tbody
                initial="hidden"
                animate="visible"
                variants={{
                    visible: {
                        transition: { staggerChildren: 0.05 }
                    }
                }}
            >
                {transactions.map((t) => (
                    <TableRow key={t.id}>
                        <TableCell>{t.date}</TableCell>
                        <TableCell>{t.description}</TableCell>
                        <TableCell>{t.amount}</TableCell>
                        <TableCell>
                            <TransactionStatus status={t.status} />
                        </TableCell>
                    </TableRow>
                ))}
            </motion.tbody>
        </Table>
        <Pagination
            currentPage={1}
            totalPages={1}
            onPageChange={(page) => console.log("Mudar para página:", page)}
        />
    </>
  );
}
