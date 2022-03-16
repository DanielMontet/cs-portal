import { AppProps } from "../../types/props.types";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import DataTable from "../../components/Table/order-table.component";

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
              <Tab>Allocated Orders</Tab>
              <Tab>Orders on the way</Tab>
              <Tab>Delivered Orders</Tab>
              <Tab>Pending Orders</Tab>
            </TabList>

            <TabPanel>
              <DataTable />
            </TabPanel>
            <TabPanel>
              <DataTable />
            </TabPanel>
            <TabPanel>
              <DataTable />
            </TabPanel>
            <TabPanel>
              <DataTable />
            </TabPanel>
            <TabPanel>
              <DataTable />
            </TabPanel>
            <TabPanel>
              <DataTable />
            </TabPanel>
          </Tabs>
        </section>
      </section>
    </section>
  );
};

export default OrderList;

// order received
// order prepared
// order allocated
// order on its way
// order delivered
