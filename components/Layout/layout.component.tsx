const Layout: React.FunctionComponent<any> = ({ main }) => {
  return (
    <section className="h-screen grid grid-rows-48">
      <header className="row-span-4 flex  bg-red-300">
        <div className="h-full flex items-center">
          <img src="/kune_landscape_logo.svg" className="h-3/4 w-3/4 " alt="" />
          <img src="/menu.svg" alt="" className="h-1/4 w-1/4 ml-5" />
        </div>
      </header>
      <section className="row-span-44 grid grid-cols-48 bg-red-500">
        <nav className="col-span-7 bg-green-200"></nav>
        <main className="col-span-41 bg-green-500"></main>
      </section>
    </section>
  );
};

export default Layout;
