import { Link, NavLink, Outlet } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { useState } from "react";

const UserManagementLayout: React.FunctionComponent = () => {
  const activeLinkProps = "text-secondary font-medium hover:text-blue-700";
  const defaultLinkProps = "text-slate-400 font-medium hover:text-secondary";

  return (
    <section className="h-full flex flex-col gap-8">
      <nav className="bg-white w-full flex rounded-lg shadow items-center justify-between p-5">
        <label className="text-current text-1xl font-medium" htmlFor="UserList">
          User Management
        </label>
        <section className="flex items-center gap-2 text-sm mr-20">
          <Link to={"/"}>
            <HomeIcon fontSize="small" color="action" />
          </Link>
          <span className="text-slate-500 text-sm">/</span>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeLinkProps : defaultLinkProps
            }
            to={`/users`}
          >
            Users
          </NavLink>
        </section>
      </nav>
      <section className="w-full">
        <Outlet />
      </section>
    </section>
  );
};

export default UserManagementLayout;
//  user list
// user detail
