import type { ReactNode } from "react";


export const TableHead = ({ children }: { children: ReactNode }) => {
  return (
    <thead>
      <tr className="text-left text-black-600 border-b bg-tableHeader">{children}</tr>
    </thead>
  );
}