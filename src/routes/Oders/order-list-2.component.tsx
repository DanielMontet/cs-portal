import { AppProps, GlobalAppContext, order } from "../../types/props.types";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import DataTable from "../../components/Table/order-table.component";
import React, { useContext, useEffect, useState } from "react";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import BasicSelect from "../../components/FormControls/select.component";
import MealsTable from "../../components/Table/meals-table.component";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const OrderList2: React.FunctionComponent<AppProps> = () => {
  const [query, setQuery] = useState({
    orderId: null,
    phoneNumber: null,
    date: null
  });
  const { orders, meals, handleOrderSearch } = useContext(GlobalAppContext);
  const [orderResult, setOrderResult] = useState<null | order[]>(null);
  const [showOrderForm, setShowOrderForm] = useState(false);

  const handleSubmit = (e: any) => {};
  let content: JSX.Element;

  if (showOrderForm) {
    content = <OrderForm mealsData={meals} />;
  } else {
    content = <DataTable orderData={orders} />;
  }

  return (
    <section className="h-full shadow rounded-lg bg-white grid grid-cols-6 min-w-1000 sm:min-width-fit">
      <header className="border-b border-gray-200 p-5 col-span-6">
        <label
          className="text-current text-1xl font-medium"
          htmlFor="customerList"
        >
          Orders
        </label>
      </header>
      <section className="col-span-6">
        <section className="w-full p-5">
          <section className="flex gap-5">
            <FormControl variant="standard">
              <InputLabel htmlFor="input-with-icon-adornment">
                Order Id
              </InputLabel>
              <Input id="input-with-icon-adornment" />
            </FormControl>
            <FormControl variant="standard">
              <InputLabel htmlFor="input-with-icon-adornment">
                Phone Number
              </InputLabel>
              <Input id="input-with-icon-adornment" />
            </FormControl>
            <FormControl variant="standard">
              <InputLabel htmlFor="input-with-icon-adornment" shrink>
                Date
              </InputLabel>
              <Input type="date" />
            </FormControl>
            <button className="rounded-lg bg-blue-500 px-5 text-white text-sm">
              search
            </button>
            <button className="rounded-lg bg-purple-600 px-5 text-white text-sm">
              reset all
            </button>
            <button
              className="rounded-lg bg-blue-500 px-5 text-white text-sm"
              onClick={(e) => setShowOrderForm(!showOrderForm)}
            >
              make order
            </button>
          </section>
        </section>
        <section className="w-full">{content}</section>
      </section>
    </section>
  );
};

export default OrderList2;

const OrderForm: React.FunctionComponent<AppProps> = ({ mealsData }) => {
  const [cart, setCart] = useState({ count: 5 });
  const [userDetails, setUserDetails] = useState({});

  return (
    <form>
      <section className="p-5">
        <header className="flex justify-between items-center">
          <p className="text-slate-700 font-medium">Make Order</p>
        </header>
        <section className="grid grid-cols-48">
          <section className="col-span-45">
            <Tabs className="mt-5">
              <TabList>
                <Tab>
                  <p className="text-sm font-medium text-slate-700">Meals</p>
                </Tab>
                <Tab>
                  <p className="text-sm font-medium text-slate-700">
                    Customer details
                  </p>
                </Tab>
                <Tab>
                  <p className="text-sm font-medium text-slate-700">
                    Order fulfilment
                  </p>
                </Tab>
              </TabList>

              <TabPanel>
                <section className="mt-5 flex-col gap-5 px-3">
                  <section className="flex items-center gap-8 ">
                    <BasicSelect
                      name="Hubs"
                      default="Maua"
                      items={["MAUA", "THIKA ROAD", "SAMEER", "CBD"]}
                    />
                    <FormControl variant="standard">
                      <InputLabel htmlFor="input-with-icon-adornment">
                        Meal
                      </InputLabel>
                      <Input id="input-with-icon-adornment" />
                    </FormControl>
                    <button className="rounded-lg bg-blue-500 px-5 py-3 text-white text-sm">
                      search
                    </button>
                  </section>
                  <MealsTable mealsData={mealsData} />
                </section>
              </TabPanel>
              <TabPanel>
                <section>
                  <CustomerOrderInfo />
                </section>
              </TabPanel>
              <TabPanel>
                <section></section>
              </TabPanel>
            </Tabs>
          </section>
          <section className="col-span-3">
            <div className="relative absolute right-8 top-8 ">
              <img src="/shopping-cart.png" className="h-5" alt="" />
              <span
                className={`${
                  cart.count ? "bg-orange-500 w-5 h-5 rounded-full" : ""
                } absolute flex bottom-4 left-3 font-bold p-3 justify-center items-center font-bold text-sm text-white`}
              >
                <p>{cart.count}</p>
              </span>
            </div>
          </section>
        </section>
      </section>
    </form>
  );
};

const CustomerOrderInfo: React.FunctionComponent<AppProps> = () => {
  return (
    <section>
      <div className="p-5 grid grid-cols-6 gap-4">
        <section className="border border-blue-200 col-span-3 p-5 rounded-lg">
          <label>Personal Information</label>
          <div className="mt-4 grid grid-cols-6 gap-4">
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              size="small"
              className="col-span-3"
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              size="small"
              className="col-span-3"
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              size="small"
              className="col-span-3"
            />
          </div>
        </section>
        <section className="border border-blue-200 col-span-3 p-5 rounded-lg">
          <label>Delivery Information</label>
          <div className="mt-4 grid grid-cols-6 gap-4">
            <TextField
              id="outlined-basic"
              label="Delivery Address"
              variant="outlined"
              size="small"
              className="col-span-3"
            />
            <TextField
              id="outlined-basic"
              label="Company/Apartment No"
              variant="outlined"
              size="small"
              className="col-span-3"
            />
            <TextField
              id="outlined-basic"
              label="Note"
              variant="outlined"
              size="small"
              className="col-span-6"
              multiline={true}
              rows={10}
            />
          </div>
        </section>
      </div>
      <div className="p-5 flex justify-end">
        <Button size="small" className="bg-blue-500 " variant="contained">
          Save
        </Button>
      </div>
    </section>
  );
};

// Name
