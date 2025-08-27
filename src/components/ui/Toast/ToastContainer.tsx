import { useState, useCallback } from "react";
import { Toast } from "./Toast";

let toastId = 0;

export const useToast = () => {
  const [toasts, setToasts] = useState<{ id: number; message: string }[]>([]);

  const addToast = useCallback((message: string) => {
    const id = toastId++;
    setToasts((prev) => [...prev, { id, message }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const ToastContainer = () => (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} onClose={removeToast} />
      ))}
    </div>
  );

  return { addToast, ToastContainer };
};