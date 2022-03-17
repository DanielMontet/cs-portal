import { AppProps, GlobalAppContext, order } from "../../types/props.types";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import DataTable from "../../components/Table/order-table.component";
import { useContext, useEffect, useState } from "react";

const OrderList: React.FunctionComponent<AppProps> = () => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const { orders, handleOrderSearch } = useContext(GlobalAppContext);
  const [orderResult, setOrderResult] = useState<null | order[]>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setOrderResult(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = handleOrderSearch!(query);
    setOrderResult(result);
    setQuery("");
    setIsFocused(false);
  };

  let content: JSX.Element;

  if (orderResult && orderResult!.length > 0) {
    content = <DataTable orderData={orderResult} />;
  } else {
    content = (
      <Tabs className="p-5">
        <TabList>
          <Tab>Received Orders</Tab>
          <Tab>Prepared Orders</Tab>
          <Tab>Allocated Orders</Tab>
          <Tab>Orders on the way</Tab>
          <Tab>Delivered Orders</Tab>
          <Tab>Pending Orders</Tab>
        </TabList>

        <TabPanel>
          <DataTable orderData={orders} />
        </TabPanel>
        <TabPanel>
          <DataTable orderData={orders} />
        </TabPanel>
        <TabPanel>
          <DataTable orderData={orders} />
        </TabPanel>
        <TabPanel>
          <DataTable orderData={orders} />
        </TabPanel>
        <TabPanel>
          <DataTable orderData={orders} />
        </TabPanel>
        <TabPanel>
          <DataTable orderData={orders} />
        </TabPanel>
      </Tabs>
    );
  }
  return (
    <section className="h-full shadow rounded-lg bg-white">
      <header className="border-b border-gray-200 p-5">
        <label
          className="text-current text-1xl font-medium"
          htmlFor="customerList"
        >
          Orders
        </label>
      </header>
      <section>
        <section className="w-full p-5">
          <form onSubmit={(e) => handleSubmit(e)}>
            <span
              className={`border border-gray-400 rounded-lg grid grid-cols-6  w-96 hover:border-blue-500 ${
                isFocused && "border-blue-500 outline-blue-500"
              }`}
            >
              <div className="grid grid-cols-6 col-span-4 items-center px-4 py-2">
                <img src="/search.png" alt="" className="h-3 col-span-1" />
                <input
                  className="border-0 outline-0 col-span-5"
                  placeholder="Order ID"
                  type="text"
                  onChange={(e) => handleChange(e)}
                  onFocus={(e) => setIsFocused(true)}
                />
              </div>
              <button
                className="bg-secondary text-sm text-white font-medium col-span-2 rounded-r-lg hover:bg-blue-600"
                type="submit"
              >
                Search
              </button>
            </span>
          </form>
        </section>
        <section className="w-full">{content}</section>
      </section>
    </section>
  );
};

export default OrderList;
