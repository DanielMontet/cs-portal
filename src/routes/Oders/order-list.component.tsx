import { AppProps } from "../../types/props.types";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const OrderList: React.FunctionComponent<AppProps> = (props) => {
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
          <span className="border border-gray-400 rounded-lg grid grid-cols-6  w-96 hover:border-blue-500">
            <div className="grid grid-cols-6 col-span-4 items-center px-4 py-2">
              <img src="/search.png" alt="" className="h-3 col-span-1" />
              <input className="border-0 outline-0 col-span-5" type="text" />
            </div>
            <button className="bg-secondary text-sm text-white font-medium col-span-2 rounded-r-lg">
              Search
            </button>
          </span>
        </section>
        <section className="w-full">
          <Tabs className="p-5">
            <TabList>
              <Tab>Received Orders</Tab>
              <Tab>Prepared Orders</Tab>
              <Tab>Dispatched Orders</Tab>
              <Tab>Delivered Orders</Tab>
              <Tab>Pending Orders</Tab>
            </TabList>

            <TabPanel>
              <Table />
            </TabPanel>
            <TabPanel>
              <Table />
            </TabPanel>
            <TabPanel>
              <Table />
            </TabPanel>
            <TabPanel>
              <Table />
            </TabPanel>
            <TabPanel>
              <Table />
            </TabPanel>
          </Tabs>
        </section>
      </section>
    </section>
  );
};

export default OrderList;

function Table() {
  return (
    <table className="w-full">
      <thead className="border-b border-gray-200 w-full">
        <tr>
          <th className="p-6 text-left text-sm">Customer Name</th>
          <th className="p-6 text-left text-sm">Phone</th>
          <th className="p-6 text-left text-sm">Orders</th>
          <th className="p-6 text-left text-sm">Location</th>
          <th className="p-6 text-left text-sm">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-6 text-left text-sm border-b border-gray-200">
            Customer Name
          </td>
          <td className="p-6 text-left text-sm border-b border-gray-200">
            Phone
          </td>
          <td className="p-6 text-left text-sm border-b border-gray-200">
            Orders
          </td>
          <td className="p-6 text-left text-sm border-b border-gray-200">
            Location
          </td>
          <td className="p-6 text-left text-sm border-b border-gray-200">
            Action
          </td>
        </tr>
      </tbody>
    </table>
  );
}
