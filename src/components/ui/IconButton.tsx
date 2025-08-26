import type { ReactNode } from "react";

type IconButtonProps = {
    onClick: () => void;
    icon: ReactNode;
    text: string;
}


export const IconButton =  ({onClick, icon, text}: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex space-x-2 text-buttonText items-center p-2 bg-button rounded-md hover:bg-buttonText hover:text-button transition-colors text-sm"
    >
      <span>{icon}</span>
      <span>{text}</span>
    </button>
  );
}