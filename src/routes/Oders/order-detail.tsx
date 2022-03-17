import { Link } from "react-router-dom";
import OrderItemsTable from "../../components/Table/order-items-table.component";
import { AppProps } from "../../types/props.types";

const OrderDetail: React.FunctionComponent<AppProps> = (props) => {
  return (
    <section className="h-full grid grid-cols-6 gap-5">
      <section className="shadow rounded-lg col-span-4 bg-white">
        <header className="border-b border-gray-200 p-5 flex justify-between">
          <label className="text-current font-medium text-1xl " htmlFor="">
            Order Details
          </label>
          <div className="flex gap-24 items-center">
            <div className="flex gap-2">
              <label
                className="text-slate-700 text-1xl font-medium"
                htmlFor="customerList"
              >
                Order ID:
              </label>
              <p className="text-slate-500 font-medium text-1xl">jnkjbsdb</p>
            </div>
            <label
              className="rounded-lg px-3 py-1 bg-green-600 text-white animate-pulse text-sm font-medium"
              htmlFor="customerList"
            >
              Order received
            </label>
          </div>
        </header>
        <main>
          <div className="p-5">
            <OrderItemsTable />
          </div>
          <div className="p-5 flex flex-col items-end">
            <span className="grid grid-cols-6 items-center py-2 border-b border-b-slate-200 w-2/5">
              <label className="text-slate-700 text-sm col-span-3" htmlFor="">
                Delivery cost:
              </label>
              <p className="col-span-3 text-slate-600 text-sm text-right">
                300
              </p>
            </span>
            <span className="grid grid-cols-6 items-center py-2 border-b border-b-slate-200 w-2/5">
              <label className="text-slate-700 text-sm col-span-3" htmlFor="">
                Cutlery cost:
              </label>
              <p className="col-span-3 text-slate-600 text-sm text-right">20</p>
            </span>
            <span className="grid grid-cols-6 items-center py-2 border-b border-b-slate-200 w-2/5">
              <label className="text-slate-700 text-sm col-span-3" htmlFor="">
                Total:
              </label>
              <p className="col-span-3 text-slate-600 text-sm text-right">
                500
              </p>
            </span>
            <span className="grid grid-cols-6 items-center py-2 border-b border-b-slate-200 w-2/5">
              <label className="text-slate-700 text-sm col-span-3" htmlFor="">
                Overall Cost(KES):
              </label>
              <p className="col-span-3 text-slate-600 text-sm text-right">
                8000
              </p>
            </span>
          </div>
        </main>
      </section>
      <section className="shadow rounded-lg col-span-2 bg-white">
        <section>
          <header className="border-b border-gray-200 p-5">
            <label
              className="text-current text-1xl font-medium"
              htmlFor="customerList"
            >
              Customer Details
            </label>
          </header>
          <main className="p-5 flex flex-col gap-2">
            <span className="flex gap-4">
              <label className="  text-sm font-medium" htmlFor="">
                Name:
              </label>
              <p className="text-secondary hover:text-blue-600 text-sm">
                <Link to="/customers/1">Daniel Montet</Link>
              </p>
            </span>
            <span className="flex gap-4">
              <label className="text-slate-700 text-sm font-medium" htmlFor="">
                Email:
              </label>
              <p className="text-slate-600 text-sm">dmontetproff@gmail.com</p>
            </span>
            <span className="flex gap-4">
              <label className="text-slate-700 text-sm font-medium" htmlFor="">
                Phone:
              </label>
              <p className="text-slate-600 text-sm">+254 702 644 342</p>
            </span>
          </main>
        </section>
        <section>
          <header className="border-y border-gray-200 p-5">
            <label
              className="text-current text-1xl font-medium"
              htmlFor="customerList"
            >
              Delivery Information
            </label>
          </header>
          <main className="p-5 flex flex-col gap-2">
            <span className="flex gap-4">
              <label className="text-slate-700 text-sm font-medium" htmlFor="">
                Delivery Address:
              </label>
              <p className="text-slate-600 text-sm">River Road</p>
            </span>
            <span className="flex gap-4">
              <label className="text-slate-700 text-sm font-medium" htmlFor="">
                Company/Apartment No:
              </label>
              <p className="text-slate-600 text-sm">+254 702 644 342</p>
            </span>
            <span className="flex flex-col gap-1">
              <label className="text-slate-700 text-sm font-medium" htmlFor="">
                Delivery Note:
              </label>
              <p className="text-slate-600 text-sm">
                Kindly warm the food since. once the rider arrives at the gate i
                neeed him to hand the dishes to the gatekeeper. Ill take it from
                there. thanks.
              </p>
            </span>
          </main>
        </section>
      </section>
      <section className="shadow col-span-6 rounded-lg h-full bg-white">
        <header className="border-b border-gray-200 p-5 flex justify-between">
          <label className="text-current font-medium text-1xl " htmlFor="">
            CS Order Notes
          </label>
        </header>
        <main className="p-5">
          <section className="flex flex-col w-4/5">
            <header className="flex items-center gap-3">
              <img
                src="https://picsum.photos/200/200"
                id="userImg"
                className="h-12 rounded-full"
                alt=""
              />
              <label
                htmlFor="userImg"
                className="text-sm text-current font-medium"
              >
                John Doe
              </label>
              <div className="bg-gray-100 rounded-full h-0 5"></div>
              <span className="text-slate-400 text-sm">now</span>
            </header>
            <section>
              <p className="text-slate-700 py-5">
                Laboris non ad et aute sint aliquip mollit voluptate velit
                dolore magna fugiat ex. Commodo amet veniam nostrud mollit quis
                sint qui nulla elit esse excepteur ullamco esse magna. Nisi duis
                aute est in mollit irure enim tempor in.
              </p>
            </section>
          </section>
          <section className="grid grid-cols-48 items-center gap-5 w-4/5 mt-5">
            <img
              src="https://picsum.photos/200/200"
              className="h-12 rounded-full col-span-3"
              alt=""
            />
            <form className="flex items-center col-span-45 gap-3">
              <textarea
                className="border border-slate-300 rounded-lg w-10/12 outline-0 focus:border-blue-300 p-5"
                name="addComment"
                id="addComment"
                rows={3}
              ></textarea>
              <button
                className="bg-secondary hover:bg-blue-600 text-white w-2/12 rounded-lg px-2 py-3"
                type="submit"
              >
                Add note
              </button>
            </form>
          </section>
        </main>
      </section>
    </section>
  );
};

export default OrderDetail;
