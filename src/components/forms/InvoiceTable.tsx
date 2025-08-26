import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { Table } from "./Table";
import { TableHead } from "./TableHead";
import { TableCell } from "./TableCell";
import { TableRow } from "./TableRow";
import { InvoiceStatus } from "./InvoiceStatus";


type Invoice = {
  id: string;
  client: string;
  issueDate: string;
  dueDate: string;
  paymentDate?: string;
  total: string;
  method: string;
  status: "Pago" | "Não pago" | "Cancelada";
};

const invoices: Invoice[] = [
  { id: "#5000", client: "SIERTI LTDA", issueDate: "18/07/2025", dueDate: "18/07/2025", total: "R$ 100,00", method: "Boleto", status: "Não pago" },
  { id: "#5001", client: "SIERTI LTDA", issueDate: "18/07/2025", dueDate: "18/07/2025", total: "R$ 100,00", method: "Boleto", status: "Não pago" },
  { id: "#5002", client: "SIERTI LTDA", issueDate: "18/07/2025", dueDate: "18/07/2025", total: "R$ 1.200,00", method: "Pix", status: "Não pago" },
  { id: "#5003", client: "Agencia Pen LTDA", issueDate: "22/07/2025", dueDate: "22/07/2025", total: "R$ 1.490,00", method: "Boleto", status: "Não pago" },
  { id: "#5004", client: "CAP", issueDate: "22/07/2025", dueDate: "22/07/2025", total: "R$ 50,00", method: "Boleto", status: "Cancelada" },
  { id: "#5005", client: "Cliente X Teste", issueDate: "23/07/2025", dueDate: "23/07/2025", paymentDate: "30/07/2025", total: "R$ 110,00", method: "Pix", status: "Pago" },
  { id: "#5006", client: "CAP", issueDate: "23/07/2025", dueDate: "23/07/2025", total: "R$ 5,00", method: "Pix", status: "Não pago" },
  { id: "#5007", client: "Cliente X Teste", issueDate: "30/07/2025", dueDate: "30/07/2025", total: "R$ 110,00", method: "Boleto", status: "Não pago" },
  { id: "#5008", client: "SIERTI LTDA", issueDate: "30/07/2025", dueDate: "30/07/2025", total: "R$ 100,00", method: "Boleto", status: "Não pago" },
];

export const InvoicesTable = () => {
  return (
        <Table>
          <TableHead>
            <TableCell header className="w-18 text-xs">ID</TableCell>
            <TableCell header className="w-44 text-xs">Cliente</TableCell>
            <TableCell header className="w-48 text-xs">Data de geração</TableCell>
            <TableCell header className="w-52 text-xs">Vencimento da fatura</TableCell>
            <TableCell header className="w-52 text-xs">Data de Pagamento</TableCell>
            <TableCell header className="w-32 text-xs">Total</TableCell>
            <TableCell header className="w-72 text-xs">Método de pagamento</TableCell>
            <TableCell header className="w-36 text-xs">Status da Fatura</TableCell>
            <TableCell header className="w-20 text-xs ">Ações</TableCell>
          </TableHead>
          <tbody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell>{invoice.id}</TableCell>
                <TableCell>{invoice.client}</TableCell>
                <TableCell>{invoice.issueDate}</TableCell>
                <TableCell>{invoice.dueDate}</TableCell>
                <TableCell>{invoice.paymentDate ?? "-"}</TableCell>
                <TableCell>{invoice.total}</TableCell>
                <TableCell>{invoice.method}</TableCell>
                <TableCell>
                    <InvoiceStatus status={invoice.status}/>
                </TableCell>
                <td className="px-4 py-2">
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Cog6ToothIcon className="h-6 w-6" />
                  </button>
                </td>
              </TableRow>
            ))}
          </tbody>
        </Table>
  );
}