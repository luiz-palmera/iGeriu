interface TransactionStatusProps {
  status: "Concluído" | "Pendente";
}

export default function TransactionStatus({ status }: TransactionStatusProps) {
  const color =
    status === "Concluído"
      ? "bg-success text-surface"
      : "bg-yellow-400 text-surface";

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${color}`}>
      {status}
    </span>
  );
}