import { AppProps, GlobalAppContext } from "../../types/props.types";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useContext, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout: React.FunctionComponent<AppProps> = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const { isLoggedIn } = useContext(GlobalAppContext);
  const activeLinkProps = "bg-secondary text-white my-1 rounded-md px-5 py-2";
  const defaultLinkProps =
    "bg-blue-100 text-slate-600 my-1 rounded-md px-5 py-2";

  return (
    <section className="h-screen grid grid-rows-48">
      <header className="row-span-5 sm:row-span-4 md:row-span-4 lg:row-span-4 grid grid-cols-48">
        <div className="h-full flex items-center justify-between col-span-48 md:col-span-7 lg:col-span-7">
          <img
            src="/kune_landscape_logo.svg"
            className="hidden sm:block"
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
      <section className="row-span-47 sm:row-span-47 grid grid-cols-48">
        <nav
          className={`transition-all ease-in-out duration-75 bg-white h-full ${
            isNavOpen
              ? "absolute w-3/4 z-50 top-0 sm:w-auto sm:relative sm:col-span-7"
              : "hidden"
          }`}
        >
          <div className="flex flex-col ml-6 mr-4">
            <label className="my-2 text-current font-medium">Dashboard</label>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? activeLinkProps : defaultLinkProps
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/orders2"
              className={({ isActive }) =>
                isActive ? activeLinkProps : defaultLinkProps
              }
            >
              Orders V2
            </NavLink>
            <NavLink
              to="/customers"
              className={({ isActive }) =>
                isActive ? activeLinkProps : defaultLinkProps
              }
            >
              Customer List
            </NavLink>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                isActive ? activeLinkProps : defaultLinkProps
              }
            >
              Users List
            </NavLink>
          </div>
        </nav>
        <div
          className={`mask ${
            isNavOpen
              ? "absolute z-40 opacity-50 w-screen h-screen bg-current top-0 sm:block sm:w-0 sm:h-0"
              : ""
          }`}
          onClick={(e) => setIsNavOpen(false)}
        ></div>
        <main
          className={`${
            isNavOpen
              ? "col-span-48 sm:col-span-41"
              : "col-span-48 sm:col-span-48 ml-2 sm:ml-5"
          }  bg-blue-100 rounded-tl-lg p-3 sm:pt-6 sm:px-6 grid 
          grid-rows-48 transition-all ease-in-out duration-75 min-w-fit`}
        >
          <PerfectScrollbar className="row-span-48 sm:row-span-42">
            <Outlet />
          </PerfectScrollbar>
          <div className="hidden sm:block sm:row-span-5"></div>
        </main>
      </section>
    </section>
  );
};

export default Layout;
