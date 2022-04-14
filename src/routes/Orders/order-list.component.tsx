import {
  AppProps,
  cartItem,
  GlobalAppContext,
  meal,
  order,
} from "../../types/props.types";
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

const OrderFilter = ({
  setShowOrderForm,
  showOrderForm,
  setOrderId,
  setPhone,
  setDate,
  date,
  orderId,
  phone,
  handleSearch,
  setIsFilter,
  setOrderStatus,
  orderStatus,
}) => {
  return (
    <section className="flex gap-5">
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">Order Id</InputLabel>
        <Input
          id="input-with-icon-adornment"
          onChange={(e) => setOrderId(e.target.value)}
          value={orderId}
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          Phone Number
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          Order Status
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          onChange={(e) => setOrderStatus(e.target.value)}
          value={orderStatus}
        />
      </FormControl>
      <BasicSelect
        name="Hubs"
        default="ALL"
        items={["ALL", "MAUA", "THIKA ROAD", "SAMEER", "CBD"]}
      />
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment" shrink>
          Date
        </InputLabel>
        <Input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </FormControl>
      <button
        className="rounded-lg bg-blue-500 px-5 text-white text-sm"
        onClick={(e) => handleSearch(e)}
      >
        search
      </button>
      <button
        className="rounded-lg bg-purple-600 px-5 text-white text-sm"
        onClick={(e) => {
          setShowOrderForm(false);
          setOrderId("");
          setPhone("");
          setDate("");
          setOrderStatus("");
          setIsFilter(null);
        }}
      >
        reset all
      </button>
      <button
        className="rounded-lg bg-blue-500 px-5 text-white text-sm"
        onClick={(e) => {
          setShowOrderForm(!showOrderForm);
          setIsFilter(null);
        }}
      >
        make order
      </button>
    </section>
  );
};

const CustomerOrderForm: React.FunctionComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [companyOrAppartment, setCompanyOrAppartment] = useState("");
  const [note, setNote] = useState("");
  const { setCustomerDetails, customerDetails } = useContext(GlobalAppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCustomerDetails({
      firstName,
      lastName,
      email,
      deliveryAddress,
      companyOrAppartment,
      note,
    });
  };

  return (
    <section>
      <form onSubmit={(e) => handleSubmit(e)}>
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
                onChange={(e) => setFirstName(e.target.value)}
                value={customerDetails ? customerDetails.firstName : firstName}
              />
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                size="small"
                className="col-span-3"
                onChange={(e) => setLastName(e.target.value)}
                value={customerDetails ? customerDetails.lastName : lastName}
              />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                size="small"
                className="col-span-3"
                onChange={(e) => setEmail(e.target.value)}
                value={customerDetails ? customerDetails.email : email}
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
                onChange={(e) => setDeliveryAddress(e.target.value)}
                value={
                  customerDetails
                    ? customerDetails.deliveryAddress
                    : deliveryAddress
                }
              />
              <TextField
                id="outlined-basic"
                label="Company/Apartment No"
                variant="outlined"
                size="small"
                className="col-span-3"
                onChange={(e) => setCompanyOrAppartment(e.target.value)}
                value={
                  customerDetails
                    ? customerDetails.companyOrAppartment
                    : customerDetails
                }
              />
              <TextField
                id="outlined-basic"
                label="Note"
                variant="outlined"
                size="small"
                className="col-span-6"
                multiline={true}
                rows={10}
                onChange={(e) => setNote(e.target.value)}
                value={customerDetails ? customerDetails.note : note}
              />
            </div>
          </section>
        </div>
        <div className="p-5 flex justify-end">
          <Button
            size="small"
            className="bg-blue-500 px-5 py-3"
            variant="contained"
            type="submit"
          >
            Save
          </Button>
        </div>
      </form>
    </section>
  );
};

const OrderPanel: React.FunctionComponent<AppProps> = ({ mealsData }) => {
  const { cart } = useContext(GlobalAppContext);
  return (
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
                <MealsTable />
              </section>
            </TabPanel>
            <TabPanel>
              <section>
                <CustomerOrderForm />
              </section>
            </TabPanel>
            <TabPanel>
              <section className="p-5">
                <button className="bg-blue-500 text-white rounded-lg px-5 py-3">
                  Make Order
                </button>
              </section>
            </TabPanel>
          </Tabs>
        </section>
        <section className="col-span-3">
          <div className="relative absolute right-8 top-8 ">
            <img src="/shopping-cart.png" className="h-5" alt="" />
            <span
              className={`${
                cart.length ? "bg-orange-500 w-5 h-5 rounded-full" : ""
              } absolute flex bottom-4 left-3 font-bold p-3 justify-center items-center font-bold text-sm text-white`}
            >
              <p>{cart.length}</p>
            </span>
          </div>
        </section>
      </section>
    </section>
  );
};

const OrderList: React.FunctionComponent<AppProps> = () => {
  const { orders, meals } = useContext(GlobalAppContext);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [filter, setIsFilter] = useState(null);
  const [orderId, setOrderId] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [orderStatus, setOrderStatus] = useState(null);

  let content: JSX.Element;

  const handleSearch = () => {
    let result = orders.filter((order) => {
      return (
        order.orderId === orderId ||
        order.phone === phone ||
        order.date === date ||
        order.status === orderStatus
      );
    });
    setIsFilter(result);
  };

  if (showOrderForm) {
    content = <OrderPanel mealsData={meals} />;
  } else {
    content = <DataTable orderData={filter ? filter : orders} />;
  }

  return (
    <section className="min-h-fit h-full shadow rounded-lg bg-white flex flex-col">
      <header className="border-b border-gray-200 p-5 min-w-fit">
        <label
          className="text-current text-1xl font-medium"
          htmlFor="customerList"
        >
          Orders
        </label>
      </header>
      <section className="min-w-fit">
        <section className="w-full p-5">
          <OrderFilter
            setShowOrderForm={setShowOrderForm}
            showOrderForm={showOrderForm}
            setOrderId={setOrderId}
            setPhone={setPhone}
            setDate={setDate}
            date={date}
            orderId={orderId}
            phone={phone}
            handleSearch={handleSearch}
            setIsFilter={setIsFilter}
            setOrderStatus={setOrderStatus}
            orderStatus={orderStatus}
          />
        </section>
        <section className="w-full">{content}</section>
      </section>
    </section>
  );
};

export default OrderList;
