import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

export type Actions = {
    label: string;
    onClick: () => void;
};

type ActionMenuProps = {
    actions: Actions[];
    icon?: boolean;
    children?: React.ReactNode;
}

export const ActionMenu = ({actions, icon = true, children}: ActionMenuProps) => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const cellVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);

  return (
    <>
      <motion.div variants={cellVariants} ref={menuRef} className="relative inline-block text-left">
        <button
            onClick={() => setOpen(!open)}
            className={`${icon ? "p-2 rounded-full hover:bg-gray-200 transition": ""}`}
        >
          {icon ? (<Cog6ToothIcon className="w-5 h-5" />) : children}
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-48 rounded-lg bg-white shadow-lg ring-1 ring-black/5 z-50"
            >
              <div className="py-1">
                {actions.map((action, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      action.onClick();
                      setOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};