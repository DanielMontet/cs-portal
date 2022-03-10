import Link from "next/link";

const Login: React.FunctionComponent = (props) => {
  return (
    <section className="h-screen bg-gray-100 flex justify-center">
      <main className="h-full w-1/4">
        <header className="w-full mt-60 mb-5 flex flex-col items-center">
          <img className="max-h-12" src="/kune_landscape_logo.svg" alt="" />
          <h1 className="text-3xl font-extrabold text-gray-700">
            Login into your account
          </h1>
        </header>
        <section className="w-full flex ">
          <form className="w-full p-3">
            <div className="input-group flex flex-col mb-3">
              <label className="mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="rounded border border-solid border-slate-300 hover:border-blue-500 focus:outline-blue-500 py-2 px-4"
                type="text"
                id="email"
                autoComplete="on"
              />
            </div>
            <div className="input-group flex flex-col mb-4">
              <label className="mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="rounded border border-solid border-slate-300 hover:border-blue-500 focus:outline-blue-500 py-2 px-4"
                type="password"
                id="password"
              />
            </div>
            <div className="flex mb-3 items-center justify-between">
              <div className="flex items-center">
                <input
                  className="mr-3 ml-1 p-2"
                  type="checkbox"
                  name=""
                  id="rememberMe"
                />
                <label className="text-sm" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              <Link href="/reset-password">
                <a className="text-sm text-blue-500"> Forgot password?</a>
              </Link>
            </div>
            <button className="w-full bg-blue-600 text-white rounded py-2 px-4 ">
              Submit
            </button>
          </form>
        </section>
      </main>
    </section>
  );
};

export default Login;
