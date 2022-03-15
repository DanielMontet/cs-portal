import { AppProps } from "../../types/props.types";
import PerfectScrollbar from "react-perfect-scrollbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "../Dashboard/dashboard.component";
import Login from "../Login/login.component";
import ResetPassword from "../ResetPassword/reset-password.component";
import CustomerList from "../customers/customer-list.component";
import OrderList from "../Oders/order-list.component";
import { useState } from "react";

const Layout: React.FunctionComponent<AppProps> = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  console.log("nav ", isNavOpen);

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
        <Router>
          <nav
            className={`transition-all ease-in-out duration-75 ${
              isNavOpen ? "col-span-7" : "hidden"
            }`}
          >
            <div className="flex flex-col ml-6 mr-4">
              <label className="my-2 text-current font-medium">Dashboard</label>
              <Link
                to="/dashboard"
                className="bg-blue-100 text-slate-600 my-1 rounded-md px-5 py-2"
              >
                Dashboard
              </Link>
              <Link
                to="/todays-orders"
                className="bg-blue-100 text-slate-600 my-1 rounded-md px-5 py-2"
              >
                Today's Orders
              </Link>
              <Link
                to="/customer-list"
                className="bg-blue-100 text-slate-600 my-1 rounded-md px-5 py-2"
              >
                Customer List
              </Link>
              <Link
                to="/customer-detail"
                className="bg-blue-100 text-slate-600 my-1 rounded-md px-5 py-2"
              >
                Customer Detail
              </Link>
              <Link
                to="/users"
                className="bg-blue-100 text-slate-600 my-1 rounded-md px-5 py-2"
              >
                Users
              </Link>
              <Link
                to="/users-detail"
                className="bg-blue-100 text-slate-600 my-1 rounded-md px-5 py-2"
              >
                User Detail
              </Link>
            </div>
            <div className="flex flex-col ml-6 mr-4">
              <label className="my-2 text-current font-medium">
                Authentication
              </label>
              <Link
                to="/login"
                className="bg-blue-100 text-slate-600 my-1 rounded-md px-5 py-2"
              >
                Login
              </Link>
              <Link
                to="/reset-password"
                className="bg-blue-100 text-slate-600 my-1 rounded-md px-5 py-2"
              >
                Reset Password
              </Link>
            </div>
          </nav>
          <main
            className={`${
              isNavOpen ? "col-span-41" : "col-span-48 ml-5"
            }  bg-blue-100 rounded-tl-lg pt-6 px-6 grid grid-rows-48 transition-all ease-in-out duration-75`}
          >
            <PerfectScrollbar className="row-span-42">
              <Switch>
                <Route path="/dashboard">
                  <Dashboard />
                </Route>
                <Route path="/customer-list">
                  <CustomerList />
                </Route>
                <Route path="/todays-orders">
                  <OrderList />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/reset-password">
                  <ResetPassword />
                </Route>
              </Switch>
            </PerfectScrollbar>
            <div className="row-span-5"></div>
          </main>
        </Router>
      </section>
    </section>
  );
};

export default Layout;
