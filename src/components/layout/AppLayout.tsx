import { Outlet } from "react-router-dom";
import { Content } from "./Content";
import { Header } from "./Header";

export const AppLayout = () => {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-gradient-to-b from-primary from-25% to-background to-25% flex justify-center py-10">
        <Content>
            <Outlet />
        </Content>
    </div>
    </>
  );
};
