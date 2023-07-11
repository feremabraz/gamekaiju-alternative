import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Login() {
  useEffect(() => {
    // Custom CSS classes for elements from the index.html
    let classes = document.body.classList;
    document.body.classList.remove(...classes);
    document.body.classList.add(
      ..."antialiased font-body text-body bg-orange-200".split(" ")
    );
    const rootElement = document.getElementById("root");
    classes = rootElement.classList;
    rootElement.classList.remove(...classes);
    rootElement.classList.add(..."".split(" "));
  });

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <section className="bg-orange-200 relative overflow-hidden py-16 pb-26">
        <img
          className="absolute top-0 right-0 w-2/3 md:h-full"
          src="nigodo-assets/background-elements/pattern-smash-dots-orange-right.svg"
          alt=""
        />
        <img
          className="absolute top-0 left-0 w-1/3 md:h-full"
          src="nigodo-assets/background-elements/pattern-two-smashes-orange-left.svg"
          alt=""
        />
        <div className="container px-4 mx-auto relative">
          <div className="py-12 px-6 md:p-16 border-3 border-indigo-900 shadow bg-white rounded-2xl max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <a className="inline-block mx-auto mb-6" href="index.html">
                <img
                  src="images/Logo-Long-2.svg"
                  alt=""
                  className="rounded-lg h-14"
                />
              </a>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
                Welcome again!
              </h2>
              <p className="text-lg font-extrabold leading-7 text-indigo-500">
                Passwordless Login, for your convenience.
              </p>
            </div>
            <form action="">
              <div className="mb-6">
                <label className="block mb-2 font-extrabold" htmlFor="">
                  Email
                </label>
                <input
                  className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
                  type="email"
                  placeholder="hello@shuffle.dev"
                />
              </div>
              <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200">
                Log In
              </button>
              <a
                className="flex items-center justify-center mb-6 py-4 px-6 hover:text-white leading-6 text-lg font-extrabold bg-white hover:bg-indigo-800 border-3 border-indigo-900 shadow rounded transition duration-200"
                href="#"
              >
                <img
                  className="h-12 w-12 rounded-full"
                  src="images/icons8-github.gif"
                  alt=""
                />
                <span className="pl-2"> Log in with Github</span>
              </a>
              <p className="text-center font-extrabold">
                Don’t have an account?{" "}
                <a
                  className="text-indigo-500 hover:underline"
                  href="signup.html"
                >
                  Sign Up
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
