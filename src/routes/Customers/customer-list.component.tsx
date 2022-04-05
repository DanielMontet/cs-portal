import { Link } from "react-router-dom";
import { AppProps } from "../../types/props.types";

const CustomerList: React.FunctionComponent<AppProps> = (props) => {
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
                  <Link to="/customers/1" className="text-blue-500">
                    victor Cheboi
                  </Link>
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  Phone
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  15
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  Location
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  Action
                </td>
              </tr>
              <tr>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  <Link to="/customers/1" className="text-blue-500">
                    johnson Paints
                  </Link>
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  Phone
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  13
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  Location
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  Action
                </td>
              </tr>
              <tr>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  <Link to="/customers/1" className="text-blue-500">
                    Victor Bashir
                  </Link>
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  Phone
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  1
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  Location
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  Action
                </td>
              </tr>
              <tr>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  <Link to="/customers/1" className="text-blue-500">
                    loius Moreno
                  </Link>
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  Phone
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  55
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  Location
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  Action
                </td>
              </tr>
              <tr>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  <Link to="/customers/1" className="text-blue-500">
                    Brian Alfred
                  </Link>
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  Phone
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  70
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  Location
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  Action
                </td>
              </tr>
              <tr>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  <Link to="/customers/1" className="text-blue-500">
                    Aaron Kipkorir
                  </Link>
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  Phone
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  1
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  Location
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  Action
                </td>
              </tr>
              <tr>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  <Link to="/customers/1" className="text-blue-500">
                    Mary Nyagaka
                  </Link>
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  Phone
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  39
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  Location
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  Action
                </td>
              </tr>
              <tr>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  <Link to="/customers/1" className="text-blue-500">
                    Damaris Cheptoo
                  </Link>
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  Phone
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  70
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  Location
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  Action
                </td>
              </tr>
              <tr>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  <Link to="/customers/1" className="text-blue-500">
                    Madeline Waweru
                  </Link>
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  Phone
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  100
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  Location
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  Action
                </td>
              </tr>
              <tr>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  <Link to="/customers/1" className="text-blue-500">
                    Johnson Jr
                  </Link>
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  Phone
                </td>
                <td className="p-6 text-left text-sm border-b border-gray-200">
                  45
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
        </section>
      </section>
    </section>
  );
};

export default CustomerList;
