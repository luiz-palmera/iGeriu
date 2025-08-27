import { motion } from "framer-motion";
import { Card } from "../components/ui/Card";
import { BanknotesIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // 👈 intervalo entre cada card
    },
  },
};

const item = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0 },
};

export const Home = () => {
  return (
    <div className="flex flex-col items-start justify-start h-full p-8 space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-primary">Olá, Usuário!</h2>
        <p className="text-md text-text">
          Bem-vindo de volta ao seu painel de controle
        </p>
      </div>

      {/* container animado */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <motion.div variants={item}>
          <Card
            title="Consultar Faturas"
            description="Confira as últimas dicas para aproveitar ao máximo sua conta digital."
            icon={<BanknotesIcon className="h-12 w-12 text-primary inline-block" />}
            href="/faturas"
          />
        </motion.div>

        <motion.div variants={item}>
          <Card
            title="Conta Digital"
            description="Confira as últimas dicas para aproveitar ao máximo sua conta digital."
            icon={<CurrencyDollarIcon className="h-12 w-12 text-primary inline-block" />}
            href="/account"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};