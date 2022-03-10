const Login: React.FunctionComponent = (props) => {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <section className="pb-5">
        <h1 className="text-2xl font-medium">Login into your account</h1>
      </section>
      <section>
        <form>
          <div className="input-group flex flex-col">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" autoComplete="on" />
          </div>
          <div className="input-group flex flex-col">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
        </form>
      </section>
    </section>
  );
};

export default Login;
