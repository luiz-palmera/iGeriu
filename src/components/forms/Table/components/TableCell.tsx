import type { ReactNode } from "react";
import { motion } from "framer-motion";

type TableCellProps = {
  children: ReactNode;
  header?: boolean;
  className?: string;
};

const cellVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export const TableCell = ({ children, header = false, className = "" }: TableCellProps) => {
  if (header) {
    return (
      <th
        className={`text-center px-4 py-2 text-xs ${className}`}
      >
        {children}
      </th>
    );
  }

  return (
    <motion.td
      variants={cellVariants}
      className={`text-center px-4 py-2 text-xs font-sm text-text ${className}`}
    >
      {children}
    </motion.td>
  );
};