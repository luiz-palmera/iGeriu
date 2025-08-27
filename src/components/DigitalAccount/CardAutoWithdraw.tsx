import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

type CardAutoWithdrawProps = {
  onConfigChange: (enabled: boolean, target: number) => void;
};

export const CardAutoWithdraw = ({ onConfigChange }: CardAutoWithdrawProps) => {
  const [enabled, setEnabled] = useState(false);
  const [target, setTarget] = useState(0);

  const toggleEnabled = () => {
    setEnabled((prev) => {
      if (prev) {
        setTarget(0);
        onConfigChange(false, 0);
      }
      return !prev;
    });
  };

  const handleSave = () => {
    onConfigChange(enabled, target);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        opacity: { duration: 0.4, ease: "easeInOut" },
        y: { type: "spring", stiffness: 100, damping: 20 }
      }}
      className={`p-6 bg-primary shadow-md rounded-lg flex flex-col items-center justify-center ${
        enabled ? "space-y-4" : ""
      } w-[22rem]`}
    >
      <div className="flex items-center w-full">
        <h2 className="text-md font-bold text-surface flex-1">
          Saques Automáticos
        </h2>
        <button
          onClick={toggleEnabled}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
            enabled ? "bg-success" : "bg-gray-400"
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
              enabled ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
      </div>

      {enabled && (
        <motion.div
          layout
          initial={{ opacity: 0, maxHeight: 0 }}
          animate={{ opacity: 1, maxHeight: 500 }}
          exit={{ opacity: 0, maxHeight: 0 }}
          transition={{
            opacity: { duration: 0.3, ease: "easeInOut" },
            maxHeight: { duration: 0.5, ease: "easeInOut" }
          }}
          className="flex flex-col space-y-2 w-full overflow-hidden"
        >
          <div>
            <label className="block text-surface mb-1 text-sm font-medium">
              Valor-alvo para saque (R$)
            </label>
            <input
              type="number"
              value={target}
              onChange={(e) => setTarget(Number(e.target.value))}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-success"
              min={0}
            />
            <p className="text-xs text-gray-300 mt-1">
              Quando o saldo atingir este valor, o saque do valor excedente será
              feito automaticamente.
            </p>
          </div>

          <Button
            onClick={handleSave}
            text="Salvar Valor-alvo"
            variant="secondary"
          />
        </motion.div>
      )}
    </motion.div>
  );
};
