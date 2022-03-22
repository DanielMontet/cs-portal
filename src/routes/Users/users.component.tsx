import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import UserListTable from "../../components/Table/users-table.component";
import {
  TabPanel,
  a11yProps,
} from "../../components/Tabnav/tab-nav-utils.component";
import { AppProps, GlobalAppContext } from "../../types/props.types";
import AddUser from "./add-user.component";

const UserManagementTab: React.FunctionComponent = () => {
  const [value, setValue] = useState(0);
  const { users } = useContext(GlobalAppContext);

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
          <Tab label="Users" {...a11yProps(0)} />
          <Tab label="Add User" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
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
        <UserListTable userData={users} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AddUser />
      </TabPanel>
    </Box>
  );
};

const UserList: React.FunctionComponent<AppProps> = (props) => {
  return (
    <section className="h-full shadow rounded-lg bg-white">
      <header className="border-b border-gray-200 p-5">
        <label className="text-current text-sm font-medium" htmlFor="UserList">
          List / Add Users
        </label>
      </header>
      <section className="w-full">
        <UserManagementTab />
      </section>
    </section>
  );
};

export default UserList;
