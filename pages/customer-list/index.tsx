import { AppProps } from "../../types/props.types";
import Layout from "../../components/Layout/layout.component";

const CustomerList: React.FunctionComponent<AppProps> = (props) => {
  return <Layout page={<Page />} />;
};

const Page: React.FunctionComponent<AppProps> = (props) => {
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
        <section className="w-full p-5">
          <span className="border border-gray-400 rounded-lg grid grid-cols-6 items-center px-4 py-2 w-52 hover:border-blue-500">
            <img src="/search.png" alt="" className="h-3 col-span-1" />
            <input className="border-0 outline-0 col-span-5" type="text" />
          </span>
        </section>
        <section className="w-full">
          <table className="w-full">
            <thead className="border-b border-gray-200 w-full">
              <tr>
                <th className="p-6 text-left text-xs">Customer Name</th>
                <th className="p-6 text-left text-xs">Phone</th>
                <th className="p-6 text-left text-xs">Orders</th>
                <th className="p-6 text-left text-xs">Location</th>
                <th className="p-6 text-left text-xs">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Customer Name
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Phone
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Orders
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Location
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Action
                </td>
              </tr>
              <tr>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Customer Name
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Phone
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Orders
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Location
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Action
                </td>
              </tr>
              <tr>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Customer Name
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Phone
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Orders
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Location
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Action
                </td>
              </tr>
              <tr>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Customer Name
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Phone
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Orders
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Location
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Action
                </td>
              </tr>
              <tr>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Customer Name
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Phone
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Orders
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Location
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Action
                </td>
              </tr>
              <tr>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Customer Name
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Phone
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Orders
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Location
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Action
                </td>
              </tr>
              <tr>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Customer Name
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Phone
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Orders
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Location
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Action
                </td>
              </tr>
              <tr>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Customer Name
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Phone
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Orders
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Location
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Action
                </td>
              </tr>
              <tr>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Customer Name
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Phone
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Orders
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Location
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Action
                </td>
              </tr>
              <tr>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Customer Name
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Phone
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Orders
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Location
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Action
                </td>
              </tr>
              <tr>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Customer Name
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Phone
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Orders
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Location
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Action
                </td>
              </tr>
              <tr>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Customer Name
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Phone
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Orders
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Location
                </td>
                <td className="p-6 text-left text-xs border-b border-gray-200">
                  Action
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>
    </section>
  );
};

export default CustomerList;
