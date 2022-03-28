import { NavLink } from "react-router-dom";
import { AppProps } from "../../types/props.types";

const SideNav: React.FunctionComponent<AppProps> = ({
  isNavOpen,
  setIsNavOpen,
}) => {
  const activeLinkProps = "bg-secondary text-white my-1 rounded-md px-5 py-2";
  const defaultLinkProps =
    "bg-blue-100 text-slate-600 my-1 rounded-md px-5 py-2";

  return (
    <>
      <nav
        className={`sidenav transition-all ease-in-out duration-75 bg-white h-full ${
          isNavOpen
            ? "absolute w-3/4 z-50 top-0 sm:w-auto sm:relative sm:col-span-7"
            : "hidden"
        }`}
      >
        {isNavOpen && (
          <span className="relative ">
            <img
              src="/kune_landscape_logo.svg"
              className="w-3/5 p-3  sm:hidden"
              alt=""
            />
          </span>
        )}
        <div className="flex flex-col ml-6 mr-4">
          <label className="my-2 text-current font-medium">Dashboard</label>
          <NavLink
            to="/"
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
            Order Management
          </NavLink>
          <NavLink
            to="/customers"
            className={({ isActive }) =>
              isActive ? activeLinkProps : defaultLinkProps
            }
          >
            Customer Management
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              isActive ? activeLinkProps : defaultLinkProps
            }
          >
            User Management
          </NavLink>
        </div>
      </nav>
      <div
        className={`mask ${
          isNavOpen
            ? "absolute z-40 opacity-50 w-screen h-screen bg-current top-0 sm:block sm:w-0 sm:h-0"
            : "hidden"
        }`}
        onClick={(e) => setIsNavOpen!(false)}
      ></div>
    </>
  );
};

export default SideNav;
