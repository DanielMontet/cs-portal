import { Link } from "react-router-dom";
import { AppProps, GlobalAppContext } from "../../types/props.types";
import CustomerListTable from "../../components/Table/customer-table.component";
import {useContext, useEffect, useState} from "react";

const CustomerList: React.FunctionComponent= () => {
  const { users } = useContext(GlobalAppContext);
  const [ query, setQuery ] = useState(null);
  const [filterData, setFilterData] = useState(null);

  const handleSearch = () => {

      let result = users.filter(user => {
        console.log(user.phone)
        console.log(query)
        return user.phone === query || user.email === query
      });
      setFilterData(result)
      setQuery(null)

  }

  return (
    <section className="h-full shadow rounded-lg bg-white">
      <header className="border-b border-gray-200 p-5">
        <label
          className="text-current text-1xl font-medium"
          htmlFor="customerList"
        >
          Customer List
        </label>
      </header>
      <section>
        <section className="w-full p-5 flex gap-5">
          <span className="border border-gray-400 rounded-lg grid grid-cols-6  w-96 hover:border-blue-500">
            <div className="grid grid-cols-6 col-span-4 items-center px-4 py-2">
              <img src="/search.png" alt="" className="h-3 col-span-1" />
              <input className="border-0 outline-0 col-span-5" type="text" 
              onChange={e => setQuery(e.target.value)}
              value={query}
              />
            </div>
            <button className="bg-secondary text-sm text-white font-medium col-span-2 rounded-r-lg"
              onClick={e => handleSearch()}
            >
              Search
            </button>
          </span>
          <span>
            <button className="rounded-lg bg-purple-600 px-5 py-3 text-white text-sm"
            onClick={e => {
              setQuery(null);
              setFilterData(null)
            }}
            >reset all</button>
            </span>
        </section>
        <section className="w-full">
          <CustomerListTable userData={ filterData? filterData: users} />
        </section>
      </section>
    </section>
  );
};

export default CustomerList;
