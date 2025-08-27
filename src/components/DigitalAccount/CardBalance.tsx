import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";


type CardSaldoProps = {
  saldo: number;
  onSolicitarSaque: () => void;
  onDepositar: () => void;
}

export const CardBalance =({saldo, onSolicitarSaque, onDepositar}: CardSaldoProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`p-6 bg-surface shadow-xl rounded-xl w-[22rem] h-[14rem] flex items-center justify-start`}
    >
        <div className="flex items-start justify-between flex-col w-full">
            <div className="flex flex-col space-y-6 w-full">
                <div className="flex justify-between items-center w-full">
                  <h2 className="text-xl font-bold text-primary">Saldo disponível </h2>
                  <CurrencyDollarIcon className="h-12 w-12 text-primary inline-block"/>
                </div>
                <span className="text-4xl font-semibold text-success">
                    R$ {saldo.toFixed(2)}
                </span>
                <div className="flex space-x-4">
                  <Button onClick={onSolicitarSaque} text="Solicitar Saque"/>
                  <Button onClick={onDepositar} text="Depositar"/>
                </div>
            </div>
        </div>
    </motion.div>
  );
}