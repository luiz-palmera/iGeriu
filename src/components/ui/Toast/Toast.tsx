import { motion, AnimatePresence } from "framer-motion";

type ToastProps = {
  id: number;
  message: string;
  onClose: (id: number) => void;
};

export const Toast = ({ id, message, onClose }: ToastProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg mb-2 w-full max-w-xs"
      >
        <div className="flex justify-between items-center">
          <span>{message}</span>
          <button
            onClick={() => onClose(id)}
            className="ml-2 text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};