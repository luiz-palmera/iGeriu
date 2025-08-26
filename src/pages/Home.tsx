import { FaceSmileIcon } from "@heroicons/react/24/outline";


export const Home = () => {
  return (
    <>
        <div className="flex flex-col items-center justify-center h-full">
            <span>Seja bem vindo ao iGeriu</span>
            <FaceSmileIcon className="animate-pulse h-10 w-10"/>
            <span>Acesse suas faturas e gerencie sua conta</span>
        </div>
    </>
  );
};
