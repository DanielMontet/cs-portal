import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import OrderItemsTable from "../../components/Table/order-items-table.component";
import { AppProps } from "../../types/props.types";
import OrderCommentSection from "./order-comment.component";

const OrderDetail: React.FunctionComponent<AppProps> = (props) => {
  const [date] = useState(new Date());
  return (
    <section className="max-h-fit min-w-1000 grid grid-cols-6 gap-5 grid-rows-6 sm:grid-rows-none">
      <section className="shadow rounded-lg col-span-6 sm:col-span-4 bg-white row-span-2 ">
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
          <div className="p-5 grid grid-cols-6 gap-5 sm:gap-48">
            <div className="col-span-3">
              <span className="w-full grid grid-cols-6 items-center py-2 border-b border-b-slate-200">
                <label
                  className="text-slate-800 font-medium text-sm col-span-3"
                  htmlFor=""
                >
                  Received at:
                </label>
                <span className="col-span-3 flex items-center gap-5">
                  <p className=" text-slate-600 text-sm text-right">
                    {`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}
                  </p>
                  <p className="text-slate-600 text-sm">
                    {`  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}
                  </p>
                </span>
              </span>
              <span className="w-full grid grid-cols-6 items-center py-2 border-b border-b-slate-200">
                <label
                  className="text-slate-800 font-medium text-sm col-span-3"
                  htmlFor=""
                >
                  Allocated at:
                </label>
                <span className="col-span-3 flex items-center gap-5">
                  <p className=" text-slate-600 text-sm text-right">
                    {`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}
                  </p>
                  <p className="text-slate-600 text-sm">
                    {`  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}
                  </p>
                </span>
              </span>
              <span className="w-full grid grid-cols-6 items-center py-2 border-b border-b-slate-200">
                <label
                  className="text-slate-800 font-medium text-sm col-span-3"
                  htmlFor=""
                >
                  Picked up at:
                </label>
                <span className="col-span-3 flex items-center gap-5">
                  <p className=" text-slate-600 text-sm text-right">
                    {`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}
                  </p>
                  <p className="text-slate-600 text-sm">
                    {`  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}
                  </p>
                </span>
              </span>
              <span className="w-full grid grid-cols-6 items-center py-2 border-b border-b-slate-200">
                <label
                  className="text-slate-800 font-medium text-sm col-span-3"
                  htmlFor=""
                >
                  Arrived Locale at:
                </label>
                <span className="col-span-3 flex items-center gap-5">
                  <p className=" text-slate-600 text-sm text-right">
                    {`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}
                  </p>
                  <p className="text-slate-600 text-sm">
                    {`  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}
                  </p>
                </span>
              </span>
              <span className="w-full grid grid-cols-6 items-center py-2 border-b border-b-slate-200">
                <label
                  className="text-slate-800 font-medium text-sm col-span-3"
                  htmlFor=""
                >
                  Delivered at:
                </label>
                <span className="col-span-3 flex items-center gap-5">
                  <p className=" text-slate-600 text-sm text-right">
                    {`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}
                  </p>
                  <p className="text-slate-600 text-sm">
                    {`  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}
                  </p>
                </span>
              </span>
            </div>
            <div className="col-span-3">
              <span className="w-full grid grid-cols-6 items-center py-2 border-b border-b-slate-200">
                <label
                  className="text-slate-800 font-medium text-sm col-span-3"
                  htmlFor=""
                >
                  Delivery cost:
                </label>
                <p className="col-span-3 text-slate-600 text-sm text-right">
                  300
                </p>
              </span>
              <span className="w-full grid grid-cols-6 items-center py-2 border-b border-b-slate-200">
                <label
                  className="text-slate-800 font-medium text-sm col-span-3"
                  htmlFor=""
                >
                  Cutlery cost:
                </label>
                <p className="col-span-3 text-slate-600 text-sm text-right">
                  20
                </p>
              </span>
              <span className="w-full grid grid-cols-6 items-center py-2 border-b border-b-slate-200">
                <label
                  className="text-slate-800 font-medium text-sm col-span-3"
                  htmlFor=""
                >
                  Total:
                </label>
                <p className="col-span-3 text-slate-600 text-sm text-right">
                  500
                </p>
              </span>
              <span className="w-full grid grid-cols-6 items-center py-2 border-b border-b-slate-200">
                <label
                  className="text-slate-800 font-medium text-sm col-span-3"
                  htmlFor=""
                >
                  Overall Cost(KES):
                </label>
                <p className="col-span-3 text-slate-600 text-sm text-right">
                  8000
                </p>
              </span>
            </div>
          </div>
        </main>
      </section>
      <section className="shadow rounded-lg col-span-6 sm:col-span-2 bg-white row-span-2 ">
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
      <section className="shadow col-span-6 rounded-lg h-full bg-white row-span-2 ">
        <OrderCommentSection />
      </section>
    </section>
  );
};

export default OrderDetail;
