import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type CardProps = {
  title: string;
  description?: string;
  icon?: ReactNode;
  className?: string;
  href: string;
};

export const Card = ({title, description, icon, href}: CardProps) => {
  return (
    <motion.div
      layout
      initial={{
          opacity: 0, y: -10,
          boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
      }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{
        scale: 1.05,
        y: -8,
        boxShadow: "0px 8px 12px rgba(0,0,0,0.15)",
      }}
      className={
        `bg-surface rounded-xl w-[22rem] h-[12rem] flex items-start justify-start transition-all duration-300  cursor-pointer ease-out`
      }
    >
      <Link to={href} className="p-6 flex flex-col space-y-4 w-full h-full">
        <div className="flex justify-between items-start w-full">
          <h2 className="text-xl font-bold text-primary">{title}</h2>
          {icon && <div className="h-12 w-12 text-primary">{icon}</div>}
        </div>
          <span className="text-text text-muted-foreground">{description}</span>
      </Link>
    </motion.div>
  );
};