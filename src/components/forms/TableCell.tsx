import type { ReactNode } from "react";


type TableCellProps = {
    children: ReactNode;
    header?: boolean;
    className?: string;
};

export const TableCell = ({ children, header = false, className = "" }: TableCellProps) => {
  const Tag = header ? "th" : "td";
  return (
    <Tag
      className={`text-center px-4 py-2 text-xs ${header ? "" : "font-sm text-text"} ${className}`}
    >
      {children}
    </Tag>
  )
}
