import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  a11yProps,
  TabPanel,
} from "../../components/Tabnav/tab-nav-utils.component";
import { AppProps } from "../../types/props.types";

export const AddOrEditUserForm: React.FunctionComponent<AppProps> = ({
  editUser,
}) => {
  return (
    <form
      className="grid grid-cols-6 gap-5 mt-5 px-5"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="border border-blue-200 col-span-3 p-5 rounded-lg">
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
        </div>
      </div>
      <div className="border border-blue-200 col-span-3 p-5 rounded-lg">
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
      </div>
      <div className="col-span-6 flex gap-3 justify-end">
        {editUser && (
          <Button color="secondary" variant="contained" size="small">
            Edit
          </Button>
        )}
        <Button variant="contained" size="small" className="">
          Save
        </Button>
      </div>
    </form>
  );
};

function UserDetailsTab() {
  const [value, setValue] = useState(0);

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
          <Tab label="Actions" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <AddOrEditUserForm editUser={true} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <section className="p-5">
          <Link
            to="/reset-password"
            className="text-blue-500 hover:text-blue-600"
          >
            Reset password
          </Link>
        </section>
      </TabPanel>
    </Box>
  );
}

const UserDetail: React.FunctionComponent<AppProps> = () => {
  return (
    <section className="shadow bg-white rounded-lg h-full">
      <header className="border-b border-gray-200 p-5 min-w-fit">
        <label
          className="text-current text-1xl font-medium"
          htmlFor="customerList"
        >
          User details
        </label>
      </header>
      <section className="p-5">
        <UserDetailsTab />
      </section>
    </section>
  );
};

export default UserDetail;
