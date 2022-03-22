import { AppProps } from "../../types/props.types";
import span from "react-perfect-scrollbar";
import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../Sidenav/sideNav.component";

const Layout: React.FunctionComponent<AppProps> = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  return (
    <section
      className={`app-container h-screen grid grid-rows-48 
        ${isNavOpen && "overflow-hidden sm:overflow-auto"}
      `}
    >
      <header className="app-header row-span-5 sm:row-span-4 grid grid-cols-48">
        <div className="h-full flex items-center justify-between col-span-48 md:col-span-7 lg:col-span-7">
          <img
            src="/kune_landscape_logo.svg"
            className="hidden sm:block sm:h-3/5 sm:w-3/5"
            alt=""
          />
          <img
            src="/menu.svg"
            alt=""
            className="h-1/5 w-1/5 cursor-pointer"
            onClick={() => setIsNavOpen(!isNavOpen)}
          />
        </div>
      </header>
      <section className="app-main row-span-43 sm:row-span-44 grid grid-cols-48 ">
        <SideNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <main
          className={`inner-app-container bg-blue-100 rounded-tl-lg p-3 sm:pt-6 sm:px-6 transition-all ease-in-out duration-75 min-w-fit sm:row-span-48  grid grid-rows-48 overfow-scroll ${
            isNavOpen
              ? "col-span-48 sm:col-span-41"
              : "col-span-48 sm:col-span-48 ml-2 sm:ml-5"
          }`}
        >
          <span className={`scrollbar row-span-47 min-h-screen`}>
            <Outlet />
          </span>
          <div className="hidden sm:block sm:row-span-1  "></div>
        </main>
      </section>
    </section>
  );
};

export default Layout;
