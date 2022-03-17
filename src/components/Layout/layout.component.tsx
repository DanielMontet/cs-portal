import { AppProps } from "../../types/props.types";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useContext, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { GlobalAppContext } from "../../App";

const Layout: React.FunctionComponent<AppProps> = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const { isLoggedIn } = useContext(GlobalAppContext);
  const activeLinkProps = "bg-secondary text-white my-1 rounded-md px-5 py-2";
  const defaultLinkProps =
    "bg-blue-100 text-slate-600 my-1 rounded-md px-5 py-2";

  useEffect(() => {
    console.log(isLoggedIn);
  }, []);

  return (
    <section className="h-screen grid grid-rows-48">
      <header className="row-span-4 grid grid-cols-48">
        <div className="h-full flex items-center justify-between col-span-7">
          <img src="/kune_landscape_logo.svg" className="h-3/5 w-3/5 " alt="" />
          <img
            src="/menu.svg"
            alt=""
            className="h-1/5 w-1/5 cursor-pointer"
            onClick={() => setIsNavOpen(!isNavOpen)}
          />
        </div>
      </header>
      <section className="row-span-44 grid grid-cols-48">
        <nav
          className={`transition-all ease-in-out duration-75 ${
            isNavOpen ? "col-span-7" : "hidden"
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
              to="/orders"
              className={({ isActive }) =>
                isActive ? activeLinkProps : defaultLinkProps
              }
            >
              Today's Orders
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
        <main
          className={`${
            isNavOpen ? "col-span-41" : "col-span-48 ml-5"
          }  bg-blue-100 rounded-tl-lg pt-6 px-6 grid grid-rows-48 transition-all ease-in-out duration-75`}
        >
          <PerfectScrollbar className="row-span-42">
            <Outlet />
          </PerfectScrollbar>
          <div className="row-span-5"></div>
        </main>
      </section>
    </section>
  );
};

export default Layout;
