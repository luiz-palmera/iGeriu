import type { ReactNode } from "react";

export const TableRow = ({children}: {children: ReactNode}) => {
    return <tr className="hover:bg-gray-50">{children}</tr>;
}