import { Outlet } from "react-router-dom";
import { Content } from "./Content";
import { Header } from "./Header";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export type ScreenTitleProps = {
  onTitleChange: (title: string, subtitle?: string) => void;
};

type AppLayoutProps = {
  title: string;
  subtitle?: string;
};

export const AppLayout = ({title, subtitle}: AppLayoutProps) => {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-gradient-to-b from-primary from-25% to-background to-25% flex justify-center py-10 px-4">
      <div>
        <div className={'flex flex-row items-center space-x-2 mb-2 ml-4 justify-start'}>
          <h3
            className={`${subtitle ? " font-semibold text-darkText" : " font-bold text-surface" }`}
          >
            {title}
          </h3>
          {subtitle ? (
            <div className="flex flex-row items-center space-x-2 text-surface font-semibold">
              <ChevronRightIcon className="h-4 w-4 text-darkText"/>
              <h3>
                {subtitle}
              </h3>
            </div>):
          null}
        </div>
        <Content>
            <Outlet />
        </Content>
      </div>
    </div>
    </>
  );
};
