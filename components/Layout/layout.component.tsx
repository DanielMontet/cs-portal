import Link from "next/link";

const Layout: React.FunctionComponent<any> = ({ main }) => {
  return (
    <section className="h-screen grid grid-rows-48">
      <header className="row-span-4 grid grid-cols-48">
        <div className="h-full flex items-center justify-between col-span-7">
          <img src="/kune_landscape_logo.svg" className="h-3/5 w-3/5 " alt="" />
          <img src="/menu.svg" alt="" className="h-1/5 w-1/5 cursor-pointer" />
        </div>
      </header>
      <section className="row-span-44 grid grid-cols-48">
        <nav className="col-span-7">
          <div className="flex flex-col ml-6 mr-4">
            <label className="my-2 text-current font-medium">Dashboard</label>
            <Link href="/dashboard">
              <a className="bg-blue-100 text-slate-600 my-1 rounded-md px-5 py-2">
                Dashboard
              </a>
            </Link>
            <Link href="/todays-orders">
              <a className="bg-blue-100 text-slate-600 my-1 rounded-md px-5 py-2">
                Today's Orders
              </a>
            </Link>
            <Link href="/users">
              <a className="bg-blue-100 text-slate-600 my-1 rounded-md px-5 py-2">
                Users
              </a>
            </Link>
          </div>
        </nav>
        <main className="col-span-41  bg-gray-100 rounded-tl-lg"></main>
      </section>
    </section>
  );
};

export default Layout;
