import { useContext } from "react";
import { AppProps, GlobalAppContext } from "../../types/props.types";

const Dashboard: React.FunctionComponent<AppProps> = (props) => {
  const { meals } = useContext(GlobalAppContext);
  return (
    <section className="grid grid-rows-48 grid-cols-6 h-full gap-5">
      <header className=" row-span-2 sm:row-span-4 col-span-6">
        <div className="flex flex-row items-center px-5 py-4 bg-white rounded-lg shadow">
          <div className="flex flex-row items-center">
            <label htmlFor="kuneHubs" className="mr-2">
              Filter by hub:
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
          </div>
        </div>
      </header>
      <section className="row-span-47  sm:row-span-42 flex flex-col gap-5 col-span-6">
        <div className="grid sm:grid-cols-4 gap-5 mb-3">
          <div className="bg-primary text-white text-1xl fs rounded-lg h-32 p-5">
            Total Orders
          </div>
          <div className="bg-secondary text-white rounded-lg h-32 p-5 shadow">
            Another report
          </div>
          <div className="bg-warning text-white rounded-lg h-32 p-5 shadow">
            Another report
          </div>
          <div className="bg-dark text-white rounded-lg h-32 p-5 shadow">
            Another report
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg flex flex-col gap-4">
          <h2 className="mb-3">Meals of the day</h2>
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
                {meals!.map((meal, index) => {
                  return (
                    <tr className="" key={index}>
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
