type InvoiceStatusProps = {
  status: "Pago" | "Não pago" | "Cancelada";
};

export const InvoiceStatus = ({ status }: InvoiceStatusProps) => {
  const color =
    status === "Pago"
      ? "bg-success text-surface"
      : status === "Cancelada"
      ? "bg-gray-400 text-surface"
      : "bg-error text-surface";

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${color}`}>
      {status}
    </span>
  );
}