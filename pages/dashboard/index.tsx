import Layout from "../../components/Layout/layout.component";
import { meals } from "../../lib/dummy-data";
import { AppProps } from "../../types/props.types";

const Dashboard: React.FunctionComponent<AppProps> = (props) => {
  return <Layout page={<Page />}></Layout>;
};

const Page: React.FunctionComponent<AppProps> = (props) => {
  return (
    <section className="grid grid-rows-48 h-full">
      <header className="flex flex-row row-span-3 pr-3 pl-5 mb-3 items-center bg-white rounded-lg shadow">
        <label htmlFor="kuneHubs" className="mr-2">
          Filter by:
        </label>
        <select
          className="border border-slate-500 outline-0 focus:border-blue-700 text-slate-500 text-sm rounded-md p-2 bg-white"
          name="hubs"
          id="kuneHubs"
        >
          <option className="rounded-md" value="All" selected>
            ALL HUBS
          </option>
          <option value="MAUA">MAUA</option>
          <option value="CBD">CBD</option>
          <option value="SAMEER">SAMEER</option>
          <option value="THIKA ROAD">THIKA ROAD</option>
        </select>
      </header>
      <section className="row-span-44">
        <div className="grid grid-cols-4 gap-5 mb-3">
          <div className="bg-white rounded-lg h-28 p-5 shadow">
            Total Orders
          </div>
          <div className="bg-white rounded-lg h-28 p-5 shadow">
            Another report
          </div>
          <div className="bg-white rounded-lg h-28 p-5 shadow">
            Another report
          </div>
          <div className="bg-white rounded-lg h-28 p-5 shadow">
            Another report
          </div>
        </div>
        <div className="bg-white p-5 rounded flex flex-col gap-4">
          <h2 className="">Meals of the day</h2>
          <div className="shadow overflow-x-scroll border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
                    scope="col"
                  >
                    Title
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
                    scope="col"
                  >
                    Sold
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
                    scope="col"
                  >
                    Remaining
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
                    scope="col"
                  ></th>
                </tr>
              </thead>
              <tbody className=" divide-y divide-gray-200">
                {meals.map((meal) => {
                  return (
                    <tr className="">
                      <td className="flex items-center gap-3 my-3 pl-5">
                        <img
                          src={meal.img}
                          className="h-12 rounded-lg "
                          alt=""
                        />
                        <p className="whitespace-nowrap text-sm text-gray-700">
                          {meal.title}
                        </p>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {meal.sold}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {meal.remaining}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Dashboard;
