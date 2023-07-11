import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Page() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section>
          <nav className="flex justify-between items-center bg-white py-6 px-10 relative">
            <a className="text-lg font-bold" href="index.html">
              <img
                className="rounded-lg h-16"
                src="images/Logo-Long-2.svg"
                alt=""
                width="auto"
              />
            </a>
            <div className="xl:hidden">
              <button className="navbar-burger focus:outline-none text-indigo-900 hover:text-indigo-800">
                <svg
                  className="block h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <ul className="hidden xl:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <li>
                <a
                  className="text-lg mr-10 2xl:mr-16 font-extrabold hover:text-indigo-800"
                  href="store.html"
                >
                  Indie Store
                </a>
              </li>
              <li>
                <a
                  className="text-lg mr-10 2xl:mr-16 font-extrabold hover:text-indigo-800"
                  href="book.html"
                >
                  Game Design Book
                </a>
              </li>
              <li></li>
            </ul>
            <div className="hidden xl:flex items-center">
              <a
                className="inline-block py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
                href="#"
              >
                Github
              </a>
            </div>
          </nav>
          <div className="hidden navbar-menu relative z-50">
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
            <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-full md:w-5/6 max-w-sm py-8 px-8 bg-white border-r overflow-y-auto">
              <div className="flex items-center mb-8">
                <a className="mr-auto text-2xl font-bold leading-none" href="#">
                  <img
                    className="h-6"
                    src="nigodo-assets/logo-nigodo.svg"
                    alt=""
                    width="auto"
                  />
                </a>
                <button className="navbar-close">
                  <svg
                    className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="my-auto">
                <ul className="py-10">
                  <li className="mb-1">
                    <a
                      className="block p-4 text-lg font-extrabold hover:bg-gray-50 rounded"
                      href="#"
                    >
                      Product
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="block p-4 text-lg font-extrabold hover:bg-gray-50 rounded"
                      href="#"
                    >
                      Features
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="block p-4 text-lg font-extrabold hover:bg-gray-50 rounded"
                      href="#"
                    >
                      Pricing
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="block p-4 text-lg font-extrabold hover:bg-gray-50 rounded"
                      href="#"
                    >
                      Resources
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <a
                  className="block py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
                  href="#"
                >
                  Sign Up
                </a>
              </div>
            </nav>
          </div>
        </section>
        <section className="relative overflow-hidden py-16">
          <div className="absolute top-0 left-0 h-128 sm:h-156 w-full bg-orange-200">
            <div className="flex h-full justify-between items-start md:items-center"></div>
            <img
              className="-mb-1 block w-full"
              src="nigodo-assets/background-elements/pattern-horizontal-orange.svg"
              alt=""
            />
          </div>
          <div className="container px-4 mx-auto relative">
            <div className="max-w-4xl mx-auto mb-12 text-center">
              <p className="text-xl font-bold mb-2">John Doe • 19 Jan 2022</p>
              <h1 className="text-3xl md:text-4xl font-extrabold font-heading mb-4">
                Lorem ipsum dolor sit amet
              </h1>
              <p className="text-xl font-extrabold leading-8 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <span className="inline-flex h-6 items-center justify-center text-xs font-extrabold px-2 text-indigo-900 rounded border border-indigo-900 bg-orange-50 uppercase">
                Technology
              </span>
            </div>
            <img
              className="block w-full mb-12 h-112 lg:h-140 object-cover border-3 border-indigo-900 rounded-2xl shadow-lg"
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
              alt=""
            />
            <div className="max-w-4xl mx-auto">
              <p className="text-xl font-extrabold leading-7 pb-12 mb-12 border-b-3 border-indigo-900">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
                massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
                purus. Non massa enim vitae duis mattis. Vel in ultricies vel
                fringilla.
              </p>
              <h3 className="text-2xl font-extrabold mb-4">Header 1</h3>
              <p className="text-xl font-extrabold leading-7 mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
                massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
                purus. Non massa enim vitae duis mattis. Vel in ultricies vel
                fringilla.
              </p>
              <div className="mb-10 p-8 border-l-3 border-indigo-500">
                <p className="text-2xl font-extrabold leading-8 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ullamcorper mattis lorem non. Ultrices praesent amet ipsum
                  justo massa. Eu dolor aliquet risus gravida nunc at feugiat
                  consequat purus.
                </p>
                <span className="text-xl text-gray-400 font-extrabold leading-7">
                  — John Doe, CEO &amp; Founder
                </span>
              </div>
              <p className="text-xl font-extrabold leading-7 mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
                massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
                purus. Non massa enim vitae duis mattis. Vel in ultricies vel
                fringilla.
              </p>
              <img
                className="block mb-6 w-full h-112 object-cover border-3 border-indigo-900 rounded-2xl shadow-lg"
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
                alt=""
              />
              <p className="text-xl font-extrabold text-gray-400 mb-8">
                Non massa enim vitae duis mattis. Vel in ultricies vel
                fringilla.
              </p>
              <h3 className="text-2xl font-extrabold mb-4">Header 1</h3>
              <p className="text-xl font-extrabold leading-7 mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
                massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
                purus. Non massa enim vitae duis mattis. Vel in ultricies vel
                fringilla.
              </p>
              <p className="text-xl font-extrabold leading-7 mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
                massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
                purus. Non massa enim vitae duis mattis. Vel in ultricies vel
                fringilla.
              </p>
              <p className="text-xl font-extrabold leading-7 mb-10">
                Sagittis et eu at elementum, quis in. Proin praesent volutpat
                egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi
                ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate
                consectetur ac ultrices at diam dui eget fringilla tincidunt.
                Arcu sit dignissim massa erat cursus vulputate gravida id. Sed
                quis auctor vulputate hac elementum gravida cursus dis.
              </p>
              <ul className="mb-10">
                <li className="text-xl font-extrabold leading-7 mb-2">
                  1. Lectus id duis vitae porttitor enim gravida morbi.
                </li>
                <li className="text-xl font-extrabold leading-7 mb-2">
                  2. Eu turpis posuere semper feugiat volutpat elit, ultrices
                  suspendisse. Auctor vel in vitae placerat.
                </li>
                <li className="text-xl font-extrabold leading-7">
                  3. Suspendisse maecenas ac donec scelerisque diam sed est duis
                  purus.
                </li>
              </ul>
              <p className="text-xl font-extrabold leading-7 pb-12 mb-12 border-b-3 border-indigo-900">
                Vestibulum placerat magna nulla, sit amet venenatis sapien
                consequat ut. Cras pulvinar, lorem tristique pharetra finibus,
                dui erat finibus orci, a vehicula arcu sapien id metus. Quisque
                quis lorem a sem porttitor feugiat. Etiam quis congue est. Donec
                fermentum ac libero a pretium. Nulla nisl sem, euismod ut eros
                vitae, egestas scelerisque enim. Vivamus id pharetra massa.
                Nulla aliquet erat elit, a gravida dui efficitur vel. Sed
                pulvinar diam sed neque ullamcorper semper. Nulla elementum arcu
                lacus, quis porta nisl posuere varius. Quisque tempus libero sed
                urna posuere hendrerit.
              </p>
              <div className="md:flex justify-center items-center">
                <a
                  className="inline-block w-full md:w-auto mb-4 md:mb-0 md:mr-6 py-3 px-8 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
                  href="#"
                >
                  Discuss this Book Page
                </a>
                <a
                  className="inline-flex items-center justify-center w-14 h-14 border-3 border-indigo-900 hover:border-indigo-800 rounded bg-white text-indigo-900 hover:text-indigo-800 shadow mr-3"
                  href="#"
                >
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.1798 27.6364V17.0214H21.8109L22.3557 12.8833H18.1798V10.2417C18.1798 9.04402 18.5175 8.22781 20.2705 8.22781L22.5027 8.22691V4.52566C22.1166 4.47646 20.7916 4.36365 19.2493 4.36365C16.0288 4.36365 13.824 6.29175 13.824 9.83189V12.8833H10.1818V17.0214H13.824V27.6364H18.1798Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  className="inline-flex items-center justify-center w-14 h-14 border-3 border-indigo-900 hover:border-indigo-800 rounded bg-white text-indigo-900 hover:text-indigo-800 shadow mr-3"
                  href="#"
                >
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.13417 0.909058H19.8655C23.8497 0.909058 27.0911 4.15039 27.0909 8.13429V19.8656C27.0909 23.8495 23.8497 27.0909 19.8655 27.0909H8.13417C4.15026 27.0909 0.909088 23.8497 0.909088 19.8656V8.13429C0.909088 4.15039 4.15026 0.909058 8.13417 0.909058ZM19.8657 24.7679C22.5688 24.7679 24.7681 22.5688 24.7681 19.8656H24.7679V8.13429C24.7679 5.43128 22.5687 3.23204 19.8655 3.23204H8.13417C5.43115 3.23204 3.23207 5.43128 3.23207 8.13429V19.8656C3.23207 22.5688 5.43115 24.7681 8.13417 24.7679H19.8657ZM7.14285 14.0001C7.14285 10.219 10.2189 7.14282 14 7.14282C17.7811 7.14282 20.8571 10.219 20.8571 14.0001C20.8571 17.7811 17.7811 20.8571 14 20.8571C10.2189 20.8571 7.14285 17.7811 7.14285 14.0001ZM9.50397 14C9.50397 16.479 11.521 18.4958 14 18.4958C16.479 18.4958 18.496 16.479 18.496 14C18.496 11.5207 16.4792 9.50383 14 9.50383C11.5208 9.50383 9.50397 11.5207 9.50397 14Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  className="inline-flex items-center justify-center w-14 h-14 border-3 border-indigo-900 hover:border-indigo-800 rounded bg-white text-indigo-900 hover:text-indigo-800 shadow"
                  href="#"
                >
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M29.0909 8.19468C28.1808 8.59795 27.2042 8.87145 26.1782 8.99355C27.2259 8.3662 28.0278 7.37113 28.4079 6.18907C27.4252 6.77004 26.3404 7.19189 25.1846 7.42058C24.2591 6.43323 22.9426 5.81824 21.4824 5.81824C18.681 5.81824 16.4097 8.08963 16.4097 10.8895C16.4097 11.2866 16.4545 11.6744 16.541 12.0453C12.3258 11.8336 8.58808 9.81404 6.08646 6.74531C5.64917 7.49319 5.4004 8.36462 5.4004 9.29484C5.4004 11.0548 6.2966 12.6077 7.65636 13.5162C6.82505 13.4884 6.04319 13.2597 5.3587 12.8796V12.943C5.3587 15.3998 7.10783 17.4502 9.42711 17.9169C9.00218 18.0312 8.5541 18.0946 8.09054 18.0946C7.76299 18.0946 7.44622 18.0621 7.13563 18.0003C7.78149 20.0167 9.65426 21.4831 11.8731 21.5233C10.1379 22.883 7.94994 23.6912 5.57349 23.6912C5.16404 23.6912 4.76072 23.6664 4.36363 23.6216C6.60876 25.0633 9.27418 25.9039 12.1389 25.9039C21.4701 25.9039 26.5707 18.1749 26.5707 11.472L26.5537 10.8153C27.5503 10.1045 28.4125 9.21141 29.0909 8.19468Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-10 pb-20 bg-orange-200">
          <div className="container px-4 mx-auto">
            <div className="mx-auto">
              <div className="text-center mx-auto max-w-screen-lg mb-8">
                <a className="inline-block mx-auto mb-6" href="#">
                  <img
                    src="images/icons8-github.gif"
                    alt=""
                    className="h-40 w-40 rounded-full"
                  />
                </a>
                <h2 className="md:text-4xl font-extrabold mb-2 text-3xl">
                  Ready to sell without comissions?
                </h2>
                <p className="text-lg font-extrabold leading-7 text-indigo-500">
                  Don't worry about the details. We'll chat about them later.
                </p>
              </div>
              <form
                action=""
                className="mx-auto max-w-screen-md"
                data-bitwarden-watching={1}
              >
                <div className="mb-6">
                  <label className="block mb-2 font-extrabold" htmlFor="">
                    Game
                  </label>
                  <input
                    className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
                    type="text"
                    placeholder="David"
                  />
                </div>
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
                <div className="mb-6"></div>
                <button className="inline-block w-full px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200 py-4 mt-4">
                  Post Inquiry
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className="bg-orange-200">
          <div className="pt-26 border-3 border-l-0 border-r-0 border-indigo-900">
            <div className="pb-16 border-b-3 border-indigo-900">
              <div className="container px-4 mx-auto text-center">
                <div className="flex flex-wrap justify-between items-center">
                  <div className="w-full lg:w-auto mb-12 lg:mb-0">
                    <a className="inline-block mx-auto" href="index.html">
                      <img
                        className="rounded-lg h-16"
                        src="images/Logo-Long-2.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="w-full lg:w-auto mb-12 lg:mb-0">
                    <div className="flex flex-wrap items-center justify-center">
                      <a
                        className="inline-block mr-4 md:mr-16 2xl:mr-20 text-lg font-extrabold hover:text-indigo-800"
                        href="features.html"
                      >
                        Features
                      </a>
                      <a
                        className="inline-block mr-4 md:mr-16 2xl:mr-20 text-lg font-extrabold hover:text-indigo-800"
                        href="perks.html"
                      >
                        Sponsors Perks
                      </a>
                      <a
                        className="inline-block mr-4 md:mr-16 2xl:mr-20 text-lg font-extrabold hover:text-indigo-800"
                        href="#"
                      >
                        Built in Public
                      </a>
                      <a
                        className="inline-block text-lg font-extrabold hover:text-indigo-800"
                        href="#"
                      >
                        Press Kit
                      </a>
                    </div>
                  </div>
                  <div className="w-full lg:w-auto flex items-center justify-center">
                    <a
                      className="inline-block text-indigo-900 hover:text-indigo-800 mr-2"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width={40}
                        zoomAndPan="magnify"
                        viewBox="0 0 30 30.000001"
                        height={40}
                        preserveAspectRatio="xMidYMid meet"
                        version={1.0}
                        className="bi bi-twitter h-12 w-12"
                      >
                        <defs>
                          <filter
                            x="0%"
                            y="0%"
                            width="100%"
                            height="100%"
                            id="id1"
                          >
                            <feColorMatrix
                              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                              colorInterpolationFilters="sRGB"
                            />
                          </filter>
                          <filter
                            x="0%"
                            y="0%"
                            width="100%"
                            height="100%"
                            id="id2"
                          >
                            <feColorMatrix
                              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0.2126 0.7152 0.0722 0 0"
                              colorInterpolationFilters="sRGB"
                            />
                          </filter>
                          <clipPath id="id3">
                            <path
                              d="M 0.484375 0 L 29.515625 0 L 29.515625 29 L 0.484375 29 Z M 0.484375 0 "
                              clipRule="nonzero"
                            />
                          </clipPath>
                          <image
                            x={0}
                            y={0}
                            width={100}
                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAAAAABVicqIAAAAAmJLR0QA/4ePzL8AAAGQSURBVGiB7ZixTsNADIbP1zZtCQsvwMoLMPII5a0QA4/Ag3RBakcmNgaoGGBBYqgQKBTC5c6MOYRvKPpzUiN/UyJZ/uKzHUUxRlEURVGU3nO6rBhCtZilHOcYAzMzP50l6gA6mO/kWpZQST1vM9v28vhffUxRHIqST6jEHIiSV6xkKkresZKRKNlgJRHd9cSLEnAlTpR8YCWNKHnLIXnBSuTjAu9JECVgZMkwh2QPKyFRUuaQTLASFiXgSuTXyvRvIF4yziEpsBK5J+A9kadrgJVE6ax4iSBqcS8l4J5Ec9SdJKK748oywrIEXIncE7Akekt1d1xZ9iQiykzpqB2TdEcvj6s/PcmyJz4dhZOEdBRO0h25p4vTUThJk47aMcl3byRf2Mzyz4I1VvIsSqpHpGNzJUrmD8D5am4v25voO2h1ZMtJcu+3WlW3ur9YtLe/cs5OKtovy+mkGA4sWWstERkOvvHOBSIyhsgw+8bVrq6dseNyPCqGAzKBOTCzYRPY+/XN9Wqbh1IURVEUZSf5AXTSh7m+hyvKAAAAAElFTkSuQmCC"
                            id="id4"
                            height={100}
                            preserveAspectRatio="xMidYMid meet"
                          />
                          <mask id="id5">
                            <g filter="url(#id1)">
                              <g
                                filter="url(#id2)"
                                transform="matrix(0.290323, 0, 0, 0.290323, 0.48387, 0.00000193548)"
                              >
                                <image
                                  x={0}
                                  y={0}
                                  width={100}
                                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAAAAABVicqIAAAAAmJLR0QA/4ePzL8AAAGQSURBVGiB7ZixTsNADIbP1zZtCQsvwMoLMPII5a0QA4/Ag3RBakcmNgaoGGBBYqgQKBTC5c6MOYRvKPpzUiN/UyJZ/uKzHUUxRlEURVGU3nO6rBhCtZilHOcYAzMzP50l6gA6mO/kWpZQST1vM9v28vhffUxRHIqST6jEHIiSV6xkKkresZKRKNlgJRHd9cSLEnAlTpR8YCWNKHnLIXnBSuTjAu9JECVgZMkwh2QPKyFRUuaQTLASFiXgSuTXyvRvIF4yziEpsBK5J+A9kadrgJVE6ax4iSBqcS8l4J5Ec9SdJKK748oywrIEXIncE7Akekt1d1xZ9iQiykzpqB2TdEcvj6s/PcmyJz4dhZOEdBRO0h25p4vTUThJk47aMcl3byRf2Mzyz4I1VvIsSqpHpGNzJUrmD8D5am4v25voO2h1ZMtJcu+3WlW3ur9YtLe/cs5OKtovy+mkGA4sWWstERkOvvHOBSIyhsgw+8bVrq6dseNyPCqGAzKBOTCzYRPY+/XN9Wqbh1IURVEUZSf5AXTSh7m+hyvKAAAAAElFTkSuQmCC"
                                  height={100}
                                  preserveAspectRatio="xMidYMid meet"
                                />
                              </g>
                            </g>
                          </mask>
                          <image
                            x={0}
                            y={0}
                            width={100}
                            xlinkHref="data:image/png;base64,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"
                            id="id6"
                            height={100}
                            preserveAspectRatio="xMidYMid meet"
                          />
                        </defs>
                        <g clipPath="url(#id3)">
                          <g mask="url(#id5)">
                            <g transform="matrix(0.290323, 0, 0, 0.290323, 0.48387, 0.00000193548)">
                              <image
                                x={0}
                                y={0}
                                width={100}
                                xlinkHref="data:image/png;base64,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"
                                height={100}
                                preserveAspectRatio="xMidYMid meet"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </a>
                    <a
                      className="inline-block text-indigo-900 hover:text-indigo-800 mr-2"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width={40}
                        zoomAndPan="magnify"
                        viewBox="0 0 30 30.000001"
                        height={40}
                        preserveAspectRatio="xMidYMid meet"
                        version={1.0}
                        className="bi bi-github h-12 w-12"
                      >
                        <defs>
                          <filter
                            x="0%"
                            y="0%"
                            width="100%"
                            height="100%"
                            id="id1"
                          >
                            <feColorMatrix
                              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                              colorInterpolationFilters="sRGB"
                            />
                          </filter>
                          <filter
                            x="0%"
                            y="0%"
                            width="100%"
                            height="100%"
                            id="id2"
                          >
                            <feColorMatrix
                              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0.2126 0.7152 0.0722 0 0"
                              colorInterpolationFilters="sRGB"
                            />
                          </filter>
                          <clipPath id="id3">
                            <path
                              d="M 0.484375 0 L 29.515625 0 L 29.515625 29 L 0.484375 29 Z M 0.484375 0 "
                              clipRule="nonzero"
                            />
                          </clipPath>
                          <image
                            x={0}
                            y={0}
                            width={100}
                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAAAAABVicqIAAAAAmJLR0QA/4ePzL8AAACVSURBVGiB7dixDYMwGERhyAAsBlvhmo2cMg3ZJRKm5mgigZTfFVdE6L3K1X2ySzcNERER3b7xI0/rc6gZLxMhSUqVezgNKb6L662+5WO5PY5b+wtfqHQRIqtxnn6Yl8NAQEBAQEBAQEBAQEBAQEBAQEBuiqze5SVEZi/yDpHJi1TmkvPHdqzhQy4eoeTe+yxERET0j+0U4tOF+E/e6QAAAABJRU5ErkJggg=="
                            id="id4"
                            height={100}
                            preserveAspectRatio="xMidYMid meet"
                          />
                          <mask id="id5">
                            <g filter="url(#id1)">
                              <g
                                filter="url(#id2)"
                                transform="matrix(0.290323, 0, 0, 0.290323, 0.48387, 0.00000193548)"
                              >
                                <image
                                  x={0}
                                  y={0}
                                  width={100}
                                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAAAAABVicqIAAAAAmJLR0QA/4ePzL8AAACVSURBVGiB7dixDYMwGERhyAAsBlvhmo2cMg3ZJRKm5mgigZTfFVdE6L3K1X2ySzcNERER3b7xI0/rc6gZLxMhSUqVezgNKb6L662+5WO5PY5b+wtfqHQRIqtxnn6Yl8NAQEBAQEBAQEBAQEBAQEBAQEBuiqze5SVEZi/yDpHJi1TmkvPHdqzhQy4eoeTe+yxERET0j+0U4tOF+E/e6QAAAABJRU5ErkJggg=="
                                  height={100}
                                  preserveAspectRatio="xMidYMid meet"
                                />
                              </g>
                            </g>
                          </mask>
                          <image
                            x={0}
                            y={0}
                            width={100}
                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAABmJLR0QA/wD/AP+gvaeTAAAEIUlEQVR4nO2cXWscVRjH/89u1rAbQpNINpW8jhSl3axpqRAssZoaRAQDpSqkvfTWD5EPoR9B413BgF60pSreCAr2JbiJL9u8VZIgZhOJvah7vJh1GCfZM+eZzMyeJM/vap99zsOeeZjzP39m2AMIgiAIgiAIgiAIgiAIgiAIgjEUOmLQKZHh0KOJgntttPLbQ/3IjD49PDJKCur4dgoAEQCCUsPOuZCRmtygUyIFAoFUnLOzFKVAIN391aapJkARCCqTaStfec8Zm8h3dicwy6bMzV5/cONqoj+xuff3fHX1o/s/Pa3XQQSluy20y1A10uUr756beCff2f3GS33+fCCcLBc1WVZtahQL+Q9KL3w4dhYA1UMWkK5ZBFf94IxdBnDt0sDU+b63Lz7nZgPh9Hj/mxdOT4/3H5hl1abPtDMEIFRvdMvQrQeQ7+wCUFnbVQqLj3fdTCBcXNvJZWlp/eAsq9ZP+ZObITOMF+1GpksOOyX3w8zspzHOx5y52evVX75N57ecMxPuh+XqQrMxIdahGSw9OkxoFWHL8CCuXRp4+UxPey7zxQ+/JxraRpRmsfToMCF8q8MGbNespH2Wh7eTxKZZ5nJDh7NddsJYhuZyQ8D7rw6dd7rasnTrxw1WbSJXGROMZpnLjQIqqztP/6n//Pgvbq3N2K5Z6f+oRrOi7IYAXi8Xv3qwmUKYvinVEN1nFZ7J+hUnidA2IvosAEs+xUkotA3RrCCxaRZLbi6Xer9Z2IpW65G+KdXA9lkmcuP5rPZcxu+zjqhUefB8FszkRgGVtZ16Xfl9lmGtzTCatbBSW1ipGYb3qtv3qtvRaq0los+aLBfv+iQmuTDyk9KRkcG7t+eC056aefRo1UtNTs0AaAyLV7M8psf7X3nx2c5C7vPv1hMNEbcpDbRvfzf1RGlW4JF5cqFt2O6zrHoGz7uzWHLz2mjv1w+3otXuvwYbYDSLJTeudepob3OtE1eqPI6qKWXJTWVtN0O01OTN4NGSKg9Os9Z3F33Xow8D1olVay0R3xueTIx2wxPFYXfD1PbvFmKy7coyZCDNYmC0DK1yhi3EqFmpOcMWYmJKZRkykGYxkGYxEFMaRExpOGJKY0aaxUBMKQMxpQ3ElMaMNIuBNItBIqZ0/6tz9725P+V9YxsaU2rUrBNlSuP/o9PJRJrFQEwpA6Nm3bn6VrGQT3oqLWRj78nUzS+Bxt+cm6Fbhv+dDoF5K7etGJmvLgMIPb8iq8md6im6R0R8v/lHLpsZ6Ch05HKxTrL1bOw9+Wzp14/vV+pKIUMAattbzQbrOjn0/CiUomN+YMj/IVpufgiG7s6q/bnZ1d3rnqNBx7hjCu49Ba3Jgr5ZAGrbW6d6+honjxzLfnkXRaTvlCAIgiAIgiAIgiAIgiAIgiDw+BeaK1OSac+7PQAAAABJRU5ErkJggg=="
                            id="id6"
                            height={100}
                            preserveAspectRatio="xMidYMid meet"
                          />
                        </defs>
                        <g clipPath="url(#id3)">
                          <g mask="url(#id5)">
                            <g transform="matrix(0.290323, 0, 0, 0.290323, 0.48387, 0.00000193548)">
                              <image
                                x={0}
                                y={0}
                                width={100}
                                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAABmJLR0QA/wD/AP+gvaeTAAAEIUlEQVR4nO2cXWscVRjH/89u1rAbQpNINpW8jhSl3axpqRAssZoaRAQDpSqkvfTWD5EPoR9B413BgF60pSreCAr2JbiJL9u8VZIgZhOJvah7vJh1GCfZM+eZzMyeJM/vap99zsOeeZjzP39m2AMIgiAIgiAIgiAIgiAIgiAIgjEUOmLQKZHh0KOJgntttPLbQ/3IjD49PDJKCur4dgoAEQCCUsPOuZCRmtygUyIFAoFUnLOzFKVAIN391aapJkARCCqTaStfec8Zm8h3dicwy6bMzV5/cONqoj+xuff3fHX1o/s/Pa3XQQSluy20y1A10uUr756beCff2f3GS33+fCCcLBc1WVZtahQL+Q9KL3w4dhYA1UMWkK5ZBFf94IxdBnDt0sDU+b63Lz7nZgPh9Hj/mxdOT4/3H5hl1abPtDMEIFRvdMvQrQeQ7+wCUFnbVQqLj3fdTCBcXNvJZWlp/eAsq9ZP+ZObITOMF+1GpksOOyX3w8zspzHOx5y52evVX75N57ecMxPuh+XqQrMxIdahGSw9OkxoFWHL8CCuXRp4+UxPey7zxQ+/JxraRpRmsfToMCF8q8MGbNespH2Wh7eTxKZZ5nJDh7NddsJYhuZyQ8D7rw6dd7rasnTrxw1WbSJXGROMZpnLjQIqqztP/6n//Pgvbq3N2K5Z6f+oRrOi7IYAXi8Xv3qwmUKYvinVEN1nFZ7J+hUnidA2IvosAEs+xUkotA3RrCCxaRZLbi6Xer9Z2IpW65G+KdXA9lkmcuP5rPZcxu+zjqhUefB8FszkRgGVtZ16Xfl9lmGtzTCatbBSW1ipGYb3qtv3qtvRaq0los+aLBfv+iQmuTDyk9KRkcG7t+eC056aefRo1UtNTs0AaAyLV7M8psf7X3nx2c5C7vPv1hMNEbcpDbRvfzf1RGlW4JF5cqFt2O6zrHoGz7uzWHLz2mjv1w+3otXuvwYbYDSLJTeudepob3OtE1eqPI6qKWXJTWVtN0O01OTN4NGSKg9Os9Z3F33Xow8D1olVay0R3xueTIx2wxPFYXfD1PbvFmKy7coyZCDNYmC0DK1yhi3EqFmpOcMWYmJKZRkykGYxkGYxEFMaRExpOGJKY0aaxUBMKQMxpQ3ElMaMNIuBNItBIqZ0/6tz9725P+V9YxsaU2rUrBNlSuP/o9PJRJrFQEwpA6Nm3bn6VrGQT3oqLWRj78nUzS+Bxt+cm6Fbhv+dDoF5K7etGJmvLgMIPb8iq8md6im6R0R8v/lHLpsZ6Ch05HKxTrL1bOw9+Wzp14/vV+pKIUMAattbzQbrOjn0/CiUomN+YMj/IVpufgiG7s6q/bnZ1d3rnqNBx7hjCu49Ba3Jgr5ZAGrbW6d6+honjxzLfnkXRaTvlCAIgiAIgiAIgiAIgiAIgiDw+BeaK1OSac+7PQAAAABJRU5ErkJggg=="
                                height={100}
                                preserveAspectRatio="xMidYMid meet"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </a>
                    <a
                      className="inline-block text-indigo-900 hover:text-indigo-800"
                      href="#"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="container px-4 pt-16 pb-24 mx-auto">
              <p className="text-center text-lg font-extrabold">
                © 2022 Gamekaiju. Assets &amp; Articles are Creative Commons and
                code is MIT.
              </p>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
