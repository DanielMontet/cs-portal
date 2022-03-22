import { Link, NavLink, Outlet } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const UserManagementLayout: React.FunctionComponent = () => {
  const activeLinkProps = "text-secondary font-medium";
  const defaultLinkProps = "text-slate-600 font-medium";
  return (
    <section className="h-full flex flex-col gap-8">
      <nav className="bg-white w-full flex rounded-lg shadow items-center justify-between p-5">
        <label className="text-current text-1xl font-medium" htmlFor="UserList">
          User Management
        </label>
        <section className="flex items-center gap-2 text-sm mr-20">
          <Link to={"/"}>
            <HomeIcon />
          </Link>
          <span className="text-slate-500">/</span>
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
