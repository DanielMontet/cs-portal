import { NavLink, Outlet } from "react-router-dom";
import { getInvoices } from "../lib/data";

export default function Invoices() {
  let invoices = getInvoices();

  return (
    <div className="flex">
      <nav className="border-r-1 border-gray-200">
        {invoices.map((invoice) => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            className="m-5 block"
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
