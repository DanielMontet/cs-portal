import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React from "react";
import {
  TabPanel,
  a11yProps,
} from "../../components/Tabnav/tab-nav-utils.component";
import { AppProps } from "../../types/props.types";
import TextField from "@mui/material/TextField";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";

const CustomerDetail: React.FunctionComponent<AppProps> = (props) => {
  return (
    <section className="shadow rounded-lg bg-white h-full">
      <header className="border-b border-gray-200 p-5">
        <label
          className="text-current text-1xl font-medium"
          htmlFor="customerList"
        >
          Customer Details
        </label>
      </header>
      <CustomerDetailsNavigation />
    </section>
  );
};

function CustomerDetailsNavigation() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="px-5 pt-5"
        >
          <Tab label="Personal Details" {...a11yProps(0)} />
          <Tab label="Orders" {...a11yProps(1)} />
          <Tab label="Actions" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <section className="grid grid-cols-6 gap-5 mt-5 px-5">
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
                label="Last Order Location"
                variant="outlined"
                size="small"
                className="col-span-3"
              />
            </div>
          </section>
          <section className="border border-blue-200 col-span-3 p-5 rounded-lg">
            <label>Contact Information</label>
            <div className="mt-4 grid grid-cols-6 gap-4">
              <TextField
                id="outlined-basic"
                label="Phone"
                variant="outlined"
                size="small"
                className="col-span-3"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
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
        </section>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CustomerOrderTable />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ActionsNavigation />
      </TabPanel>
    </Box>
  );
}

function createData(
  name: any,
  calories: any,
  fat: any,
  carbs: any,
  protein: any
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function CustomerOrderTable() {
  return (
    <TableContainer component={"div"} className="mt-5">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="font-bold pl-10">Order ID</TableCell>
            <TableCell className="font-bold" align="center">
              Delivery Address
            </TableCell>
            <TableCell className="font-bold" align="center">
              Company/Apartment
            </TableCell>
            <TableCell className="font-bold " align="center">
              Total Amount
            </TableCell>
            <TableCell className="font-bold" align="center">
              Status
            </TableCell>
            <TableCell className="font-bold" align="center">
              Tracking
            </TableCell>
            <TableCell className="font-bold" align="center">
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell className="pl-10 py-5" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell className="py-5" align="center">
                {row.calories}
              </TableCell>
              <TableCell className="py-5" align="center">
                {row.fat}
              </TableCell>
              <TableCell className="py-5" align="center">
                {row.carbs}
              </TableCell>
              <TableCell className="py-5" align="center">
                {row.protein}
              </TableCell>
              <TableCell className="py-5" align="center">
                {row.protein}
              </TableCell>
              <TableCell className="p-5" align="center">
                <span className="text-blue-500 font-medium">
                  <a href={"/orders/1"}>view</a>
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const ActionsNavigation: React.FunctionComponent = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  return (
    <Box
      className="p-5"
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        width: "100%",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab
          className="capitalize"
          label="Approve Details Change"
          {...a11yProps(0)}
        />
        <Tab className="capitalize" label="Make Order" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className="p-5">Approve Change of Customer Details</div>
      </TabPanel>
      <TabPanel value={value} index={1}>
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
      </TabPanel>
    </Box>
  );
};

export default CustomerDetail;
