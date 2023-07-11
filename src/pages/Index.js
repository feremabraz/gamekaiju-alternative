import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className='relative pb-24'>
          <img
            className='hidden md:block absolute top-0 right-0 w-36 sm:w-1/2 lg:w-auto lg:h-full object-contain'
            src='nigodo-assets/background/background-orange-right.svg'
            alt=''
          />
          <nav className='flex mb-24 justify-between items-center py-6 px-10 relative'>
            <a className='text-lg font-bold' href='#'>
              <img
                className='rounded-lg'
                src='images/Logo-Long-2.svg'
                alt=''
                width='auto'
              />
            </a>
            <div className='xl:hidden'>
              <button className='navbar-burger focus:outline-none text-indigo-900 hover:text-indigo-800'>
                <svg
                  className='block h-6 w-6'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>Mobile menu</title>
                  <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                </svg>
              </button>
            </div>
            <ul className='hidden xl:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <li>
                <a
                  className='text-lg mr-10 2xl:mr-16 font-extrabold hover:text-indigo-800'
                  href='#'
                >
                  Discussions
                </a>
              </li>
              <li>
                <a
                  className='text-lg mr-10 2xl:mr-16 font-extrabold hover:text-indigo-800'
                  href='#'
                >
                  Roadmap
                </a>
              </li>
            </ul>
            <div className='hidden xl:flex items-center'>
              <a
                className='inline-block mr-6 text-lg font-extrabold hover:text-indigo-800'
                href='login.html'
              >
                Log In
              </a>
              <a
                className='inline-block py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200'
                href='signup.html'
              >
                Sign Up
              </a>
            </div>
          </nav>
          <div className='container px-4 mx-auto relative'>
            <div className='flex flex-wrap -mx-4'>
              <div className='w-full lg:w-1/2 px-4 mb-12 lg:mb-0'>
                <div className='lg:max-w-lg'>
                  <span className='text-xl md:text-2xl font-extrabold text-indigo-500'>
                    Free &amp; Open Source
                  </span>
                  <h1 className='text-3xl sm:text-4xl font-extrabold font-heading mt-1 mb-6 lg:text-4l'>
                    Assets with Impact
                  </h1>
                  <p className='md:text-2xl font-extrabold leading-8 mb-10 text-base'>
                    Our Unity Engine content is some of the highest quality
                    you'll find online. We're also passionate about game design
                    and love sharing our insights with our readers.
                  </p>
                  <div className='flex flex-wrap -mx-2 mb-6'>
                    <div className='w-full md:w-auto lg:w-7/12 px-2 mb-2 md:mb-0'>
                      <input
                        className='block w-full p-4 text-lg font-extrabold placeholder-indigo-900 shadow border-2 border-indigo-900 rounded'
                        type='email'
                        placeholder='hello@shuffle.dev'
                      />
                    </div>
                    <div className='w-full md:w-auto lg:w-5/12 px-2'>
                      <a
                        className='inline-flex md:w-auto items-center justify-center h-full py-4 px-5 leading-6 text-md text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 rounded transition duration-200'
                        href='signup.html'
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                  <div className='flex flex-wrap items-center'>
                    <div className='flex mr-8 items-center'>
                      <img
                        className='block w-6 h-6 mr-2 object-contain'
                        src='nigodo-assets/circle-icon-green.svg'
                        alt=''
                      />
                      <span className='text-lg font-extrabold'>
                        Monthly Updates
                      </span>
                    </div>
                    <div className='flex items-center'>
                      <img
                        className='block w-6 h-6 mr-2 object-contain'
                        src='nigodo-assets/circle-icon-green.svg'
                        alt=''
                      />
                      <span className='text-lg font-extrabold'>
                        Learn about Game Design
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/2 px-4'>
                <img
                  className='block h-128 lg:h-140 w-full xl:max-w-lg object-cover border-3 border-indigo-900 rounded-2xl shadow-lg'
                  src='images/Screenshot-from-2022-12-29-13-37-46.png'
                  alt=''
                />
              </div>
            </div>
          </div>
          <div className='hidden navbar-menu relative z-50'>
            <div className='navbar-backdrop fixed inset-0 bg-gray-800 opacity-25' />
            <nav className='fixed top-0 left-0 bottom-0 flex flex-col w-full md:w-5/6 max-w-sm py-8 px-8 bg-white border-r overflow-y-auto'>
              <div className='flex items-center mb-8'>
                <a className='mr-auto text-2xl font-bold leading-none' href='#'>
                  <img
                    className='h-6'
                    src='nigodo-assets/logo-nigodo.svg'
                    alt=''
                    width='auto'
                  />
                </a>
                <button className='navbar-close'>
                  <svg
                    className='h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>
              <div className='my-auto'>
                <ul className='py-10'>
                  <li className='mb-1'>
                    <a
                      className='block p-4 text-lg font-extrabold hover:bg-gray-50 rounded'
                      href='#'
                    >
                      Product
                    </a>
                  </li>
                  <li className='mb-1'>
                    <a
                      className='block p-4 text-lg font-extrabold hover:bg-gray-50 rounded'
                      href='#'
                    >
                      Features
                    </a>
                  </li>
                  <li className='mb-1'>
                    <a
                      className='block p-4 text-lg font-extrabold hover:bg-gray-50 rounded'
                      href='#'
                    >
                      Pricing
                    </a>
                  </li>
                  <li className='mb-1'>
                    <a
                      className='block p-4 text-lg font-extrabold hover:bg-gray-50 rounded'
                      href='#'
                    >
                      Resources
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <a
                  className='block mb-6 text-center leading-6 text-lg font-extrabold hover:text-indigo-800'
                  href='#'
                >
                  Log In
                </a>
                <a
                  className='block py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200'
                  href='#'
                >
                  Sign Up
                </a>
              </div>
            </nav>
          </div>
        </section>
        <section className='bg-white pt-12'>
          <div className='container px-4 mx-auto'>
            <h2 className='text-center text-xl font-extrabold mb-6'>
              Works with every template. Not affiliated nor endorsed.
            </h2>
            <div className='flex flex-wrap -mx-4 -mb-8'>
              <div className='w-full md:w-1/2 lg:w-1/4 px-4 mb-8'>
                <div className='flex items-center justify-center h-44 p-6 md:px-12 bg-white border-3 border-indigo-900 rounded-2xl shadow-md'>
                  <img
                    src='images/U-Logo-Black-RGB.svg'
                    alt=''
                    className='h-24'
                  />
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/4 px-4 mb-8'>
                <div className='flex items-center justify-center h-44 p-6 md:px-12 bg-white border-3 border-indigo-900 rounded-2xl shadow-md'>
                  <img
                    src='images/UE-Logo-stacked-unreal-engine-black.svg'
                    alt=''
                    className='h-24'
                  />
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/4 px-4 mb-8'>
                <div className='flex items-center justify-center h-44 p-6 md:px-12 bg-white border-3 border-indigo-900 rounded-2xl shadow-md'>
                  <img
                    src='images/logo-large-monochrome-light.svg'
                    alt=''
                    className='h-24'
                  />
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/4 px-4 mb-8'>
                <div className='flex items-center justify-center h-44 p-6 md:px-12 bg-white border-3 border-indigo-900 rounded-2xl shadow-md'>
                  <img
                    src='images/Untitled-200-80-px.svg'
                    alt=''
                    className='h-24'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-26 bg-white relative overflow-hidden'>
          <img
            className='absolute top-0 left-0 w-full md:h-full'
            src='nigodo-assets/background-elements/pattern-center-dots-color.svg'
            alt=''
          />
          <div className='container px-4 mx-auto relative'>
            <div className='flex flex-wrap -mx-4 mb-16 items-center justify-between'>
              <div className='w-full lg:w-1/2 xl:w-2/3 px-4 mb-8 lg:mb-0'>
                <span className='text-lg font-extrabold text-indigo-500'>
                  Gamekaiju strives to achieve the highest quality.
                </span>
                <h1 className='text-3xl md:text-4xl font-extrabold font-heading mt-3 mb-3'>
                  Designed with your needs in mind
                </h1>
                <p className='text-xl font-extrabold leading-8'>
                  Get customized assets every month. Gamekaiju adapts them for
                  every subscriber.
                </p>
              </div>
              <div className='w-full lg:w-1/2 xl:w-1/3 px-4'>
                <div className='flex flex-wrap lg:justify-end'>
                  <a
                    className='inline-block w-full md:w-auto py-4 px-6 text-center leading-6 text-lg text-indigo-900 hover:text-white font-extrabold bg-white hover:bg-indigo-800 border-3 border-indigo-900 shadow rounded transition duration-200'
                    href='signup.html'
                  >
                    See the assets
                  </a>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap -mx-4 -mb-8'>
              <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-8'>
                <img
                  className='block mb-6 w-full h-80 border-3 border-indigo-900 rounded-2xl shadow-md object-cover'
                  src='images/ezgif-com-gif-maker.gif'
                  alt=''
                />
                <h2 className='text-2xl md:text-3xl font-extrabold mb-2'>
                  Characters
                </h2>
                <span className='text-lg text-indigo-500'>Fully Rigged</span>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-8'>
                <img
                  className='block mb-6 w-full h-80 border-3 border-indigo-900 rounded-2xl shadow-md object-cover'
                  src='https://images.unsplash.com/photo-1657641898365-48ae7d64e676?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHw5Nnx8M0R8ZW58MHwyfHx8MTY1ODYyNDc4MQ&ixlib=rb-1.2.1&q=80&w=1920'
                  alt=''
                />
                <h2 className='text-2xl md:text-3xl font-extrabold mb-2'>
                  Bots
                </h2>
                <span className='text-lg text-indigo-500'>
                  Procedurally Animated
                </span>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-8'>
                <img
                  className='block mb-6 w-full h-80 border-3 border-indigo-900 rounded-2xl shadow-md object-cover'
                  src='https://images.unsplash.com/photo-1649877510851-10effb9a59b4?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHwyNTl8fDNEJTIwYnVpbGRpbmd8ZW58MHwyfHx8MTY1ODYyNDg4OA&ixlib=rb-1.2.1&q=80&w=1920'
                  alt=''
                />
                <h2 className='text-2xl md:text-3xl font-extrabold mb-2'>
                  Props to personalize
                </h2>
                <span className='text-lg text-indigo-500'>
                  For interiors, exteriors &amp; characters
                </span>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-8'>
                <img
                  className='block mb-6 w-full h-80 border-3 border-indigo-900 rounded-2xl shadow-md object-cover'
                  src='https://images.unsplash.com/photo-1652881818518-bb5645be9ac3?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHwyNXx8c3RhciUyMHdhcnMlMjAzZHxlbnwwfDJ8fHwxNjU4NjI0OTk0&ixlib=rb-1.2.1&q=80&w=1920'
                  alt=''
                />
                <h2 className='text-2xl md:text-3xl font-extrabold mb-2'>
                  Buildings
                </h2>
                <span className='text-lg text-indigo-500'>
                  Modular &amp; Walkable
                </span>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-8'>
                <img
                  className='block mb-6 w-full h-80 border-3 border-indigo-900 rounded-2xl shadow-md object-cover'
                  src='https://images.unsplash.com/photo-1592841665194-e62ef17a37cd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHwzMHx8ZWJvb2t8ZW58MHwwfHx8MTY1OTY5MjQxNA&ixlib=rb-1.2.1&q=80&w=1920'
                  alt=''
                />
                <h2 className='text-2xl md:text-3xl font-extrabold mb-2'>
                  Game Design Book
                </h2>
                <span className='text-lg text-indigo-500'>
                  Pages added bi-weekly
                </span>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-8'>
                <img
                  className='block mb-6 w-full h-80 border-3 border-indigo-900 rounded-2xl shadow-md object-cover'
                  src='https://images.unsplash.com/flagged/photo-1599605266826-3c84bc0883c0?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHwzMHx8dmlkZW9nYW1lfGVufDB8fHx8MTY1ODYyNTA0Nw&ixlib=rb-1.2.1&q=80&w=1920'
                  alt=''
                />
                <h2 className='text-2xl md:text-3xl font-extrabold mb-2'>
                  2D &amp; Audio
                </h2>
                <span className='text-lg text-indigo-500'>
                  For interfaces &amp; interactions
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className='pt-12 pb-16 bg-orange-200'>
          <div className='container px-4 mx-auto relative'>
            <div className='max-w-5xl mx-auto mb-16 text-center'>
              <span className='text-lg font-extrabold text-indigo-500'>
                A shared journey has begun
              </span>
              <h1 className='text-3xl md:text-4xl font-extrabold font-heading mt-4 mb-6'>
                Gain a small in-house artist for your game
              </h1>
            </div>
            <img
              className='block w-full h-112 lg:h-156 mb-16 object-cover border-3 border-indigo-900 rounded-2xl shadow-lg'
              src='https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHw2MXx8M0QlMjBmYW1pbHklMjBjaGFyYWN0ZXJzfGVufDB8fHx8MTY1OTcxMzk3MA&ixlib=rb-1.2.1&q=80&w=1920'
              alt=''
            />
            <div className='flex flex-wrap -mx-4'>
              <div className='w-full lg:w-1/3 px-4 mb-12 lg:mb-0'>
                <div className='h-full max-w-md mx-auto py-12 px-8 bg-white border-3 border-indigo-900 shadow-md rounded-2xl text-center'>
                  <img
                    className='block mx-auto mb-4 h-60'
                    src='images/casual-life-3d-girl-planning-budget-with-tablet-and-piggy-bank.png'
                    alt=''
                  />
                  <h4 className='text-2xl font-extrabold mb-6'>
                    Stay on budget
                  </h4>
                  <p className='text-lg font-extrabold leading-7'>
                    Take the files, edit them, distribute them (it's MIT
                    licensed). Don't worry about creating an asset flip. Asset
                    are designed with customization and modularity in mind.
                  </p>
                </div>
              </div>
              <div className='w-full lg:w-1/3 px-4 mb-12 lg:mb-0'>
                <div className='h-full max-w-md mx-auto py-12 px-8 bg-white border-3 border-indigo-900 shadow-md rounded-2xl text-center'>
                  <img
                    className='block mx-auto mb-4 h-60'
                    src='images/casual-life-3d-girl-sitting-on-floor-with-laptop-and-studying.png'
                    alt=''
                  />
                  <h4 className='text-2xl font-extrabold mb-6'>
                    Learn game design
                  </h4>
                  <p className='text-lg font-extrabold leading-7'>
                    Read the game design book, developed as open source. Make a
                    fork of the repo and make edits (markdown, it's easy), or
                    include the content in your own work.
                  </p>
                </div>
              </div>
              <div className='w-full lg:w-1/3 px-4'>
                <div className='h-full max-w-md mx-auto py-12 px-8 bg-white border-3 border-indigo-900 shadow-md rounded-2xl text-center'>
                  <img
                    className='block mx-auto mb-4 h-60'
                    src='images/casual-life-3d-young-man-and-woman-looking-at-tablet.png'
                    alt=''
                  />
                  <h4 className='text-2xl font-extrabold mb-6'>
                    Give feedback
                  </h4>
                  <p className='text-lg font-extrabold leading-7'>
                    Use the roadmap and discussions, both available on Github,
                    to shape the course of the project. Everyone is welcome.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-26 bg-white overflow-hidden'>
          <div className='container px-4 mx-auto'>
            <div className='relative py-16 px-6 sm:px-20 sm:mx-4 bg-white border-3 border-indigo-900 rounded-2xl shadow-md'>
              <div className='absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 hidden sm:block px-4'>
                <a
                  className='inline-flex items-center justify-center w-16 h-16 bg-white text-indigo-900 hover:text-indigo-800 rounded-full border-3 border-indigo-900 hover:border-indigo-800'
                  href='#'
                >
                  <svg
                    width={20}
                    height={22}
                    viewBox='0 0 20 22'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M18.3333 9.33333H5.68332L11.1833 3.85C11.4972 3.53616 11.6735 3.1105 11.6735 2.66667C11.6735 2.22283 11.4972 1.79717 11.1833 1.48333C10.8695 1.16949 10.4438 0.993179 9.99999 0.993179C9.55615 0.993179 9.1305 1.16949 8.81666 1.48333L0.483323 9.81667C0.331589 9.97517 0.212647 10.1621 0.133323 10.3667C-0.0333734 10.7724 -0.0333734 11.2276 0.133323 11.6333C0.212647 11.8379 0.331589 12.0248 0.483323 12.1833L8.81666 20.5167C8.9716 20.6729 9.15593 20.7969 9.35903 20.8815C9.56213 20.9661 9.77997 21.0097 9.99999 21.0097C10.22 21.0097 10.4379 20.9661 10.641 20.8815C10.8441 20.7969 11.0284 20.6729 11.1833 20.5167C11.3395 20.3617 11.4635 20.1774 11.5481 19.9743C11.6328 19.7712 11.6763 19.5534 11.6763 19.3333C11.6763 19.1133 11.6328 18.8955 11.5481 18.6924C11.4635 18.4893 11.3395 18.3049 11.1833 18.15L5.68332 12.6667H18.3333C18.7754 12.6667 19.1993 12.4911 19.5118 12.1785C19.8244 11.8659 20 11.442 20 11C20 10.558 19.8244 10.134 19.5118 9.82149C19.1993 9.50893 18.7754 9.33333 18.3333 9.33333Z'
                      fill='currentColor'
                    />
                  </svg>
                </a>
              </div>
              <div className='absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 hidden sm:block px-4'>
                <a
                  className='inline-flex items-center justify-center w-16 h-16 bg-white text-indigo-900 hover:text-indigo-800 rounded-full border-3 border-indigo-900 hover:border-indigo-800'
                  href='#'
                >
                  <svg
                    width={20}
                    height={22}
                    viewBox='0 0 20 22'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M1.66668 9.33333H14.3167L8.81668 3.85C8.50284 3.53616 8.32652 3.1105 8.32652 2.66667C8.32652 2.22283 8.50284 1.79717 8.81668 1.48333C9.13052 1.16949 9.55617 0.993179 10 0.993179C10.4438 0.993179 10.8695 1.16949 11.1833 1.48333L19.5167 9.81667C19.6684 9.97517 19.7874 10.1621 19.8667 10.3667C20.0334 10.7724 20.0334 11.2276 19.8667 11.6333C19.7874 11.8379 19.6684 12.0248 19.5167 12.1833L11.1833 20.5167C11.0284 20.6729 10.8441 20.7969 10.641 20.8815C10.4379 20.9661 10.22 21.0097 10 21.0097C9.77999 21.0097 9.56215 20.9661 9.35905 20.8815C9.15595 20.7969 8.97161 20.6729 8.81668 20.5167C8.66046 20.3617 8.53647 20.1774 8.45186 19.9743C8.36724 19.7712 8.32368 19.5534 8.32368 19.3333C8.32368 19.1133 8.36724 18.8955 8.45186 18.6924C8.53647 18.4893 8.66046 18.3049 8.81668 18.15L14.3167 12.6667H1.66668C1.22465 12.6667 0.800724 12.4911 0.488164 12.1785C0.175603 11.8659 9.53714e-06 11.442 9.53714e-06 11C9.53714e-06 10.558 0.175603 10.134 0.488164 9.82149C0.800724 9.50893 1.22465 9.33333 1.66668 9.33333Z'
                      fill='currentColor'
                    />
                  </svg>
                </a>
              </div>
              <div className='flex flex-wrap -mx-4 justify-between items-center relative'>
                <div className='w-full sm:w-auto px-4 mb-6 xl:mb-0'>
                  <div className='flex items-center'>
                    <img
                      src='images/Untitled-design.gif'
                      alt=''
                      className='rounded-full border-2'
                    />
                    <div className='pl-8'>
                      <h4 className='text-xl font-extrabold'>
                        Macauley Herring
                      </h4>
                      <span className='block text-gray-400 font-bold'>
                        CEO &amp; Founder at Nigodo
                      </span>
                    </div>
                  </div>
                </div>
                <div className='w-full sm:w-auto px-4'>
                  <p className='max-w-xl text-2xl font-extrabold'>
                    The best solution for anyone who wants to work a flexible
                    schedule but still earn a full-time income.
                  </p>
                </div>
              </div>
              <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 sm:hidden w-full mt-12 px-4 flex justify-center items-center'>
                <a
                  className='inline-flex mr-4 items-center justify-center w-16 h-16 bg-white text-indigo-900 hover:text-indigo-800 rounded-full border-3 border-indigo-900 hover:border-indigo-800'
                  href='#'
                >
                  <svg
                    width={20}
                    height={22}
                    viewBox='0 0 20 22'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M18.3333 9.33333H5.68332L11.1833 3.85C11.4972 3.53616 11.6735 3.1105 11.6735 2.66667C11.6735 2.22283 11.4972 1.79717 11.1833 1.48333C10.8695 1.16949 10.4438 0.993179 9.99999 0.993179C9.55615 0.993179 9.1305 1.16949 8.81666 1.48333L0.483323 9.81667C0.331589 9.97517 0.212647 10.1621 0.133323 10.3667C-0.0333734 10.7724 -0.0333734 11.2276 0.133323 11.6333C0.212647 11.8379 0.331589 12.0248 0.483323 12.1833L8.81666 20.5167C8.9716 20.6729 9.15593 20.7969 9.35903 20.8815C9.56213 20.9661 9.77997 21.0097 9.99999 21.0097C10.22 21.0097 10.4379 20.9661 10.641 20.8815C10.8441 20.7969 11.0284 20.6729 11.1833 20.5167C11.3395 20.3617 11.4635 20.1774 11.5481 19.9743C11.6328 19.7712 11.6763 19.5534 11.6763 19.3333C11.6763 19.1133 11.6328 18.8955 11.5481 18.6924C11.4635 18.4893 11.3395 18.3049 11.1833 18.15L5.68332 12.6667H18.3333C18.7754 12.6667 19.1993 12.4911 19.5118 12.1785C19.8244 11.8659 20 11.442 20 11C20 10.558 19.8244 10.134 19.5118 9.82149C19.1993 9.50893 18.7754 9.33333 18.3333 9.33333Z'
                      fill='currentColor'
                    />
                  </svg>
                </a>
                <a
                  className='inline-flex items-center justify-center w-16 h-16 bg-white text-indigo-900 hover:text-indigo-800 rounded-full border-3 border-indigo-900 hover:border-indigo-800'
                  href='#'
                >
                  <svg
                    width={20}
                    height={22}
                    viewBox='0 0 20 22'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M1.66668 9.33333H14.3167L8.81668 3.85C8.50284 3.53616 8.32652 3.1105 8.32652 2.66667C8.32652 2.22283 8.50284 1.79717 8.81668 1.48333C9.13052 1.16949 9.55617 0.993179 10 0.993179C10.4438 0.993179 10.8695 1.16949 11.1833 1.48333L19.5167 9.81667C19.6684 9.97517 19.7874 10.1621 19.8667 10.3667C20.0334 10.7724 20.0334 11.2276 19.8667 11.6333C19.7874 11.8379 19.6684 12.0248 19.5167 12.1833L11.1833 20.5167C11.0284 20.6729 10.8441 20.7969 10.641 20.8815C10.4379 20.9661 10.22 21.0097 10 21.0097C9.77999 21.0097 9.56215 20.9661 9.35905 20.8815C9.15595 20.7969 8.97161 20.6729 8.81668 20.5167C8.66046 20.3617 8.53647 20.1774 8.45186 19.9743C8.36724 19.7712 8.32368 19.5534 8.32368 19.3333C8.32368 19.1133 8.36724 18.8955 8.45186 18.6924C8.53647 18.4893 8.66046 18.3049 8.81668 18.15L14.3167 12.6667H1.66668C1.22465 12.6667 0.800724 12.4911 0.488164 12.1785C0.175603 11.8659 9.53714e-06 11.442 9.53714e-06 11C9.53714e-06 10.558 0.175603 10.134 0.488164 9.82149C0.800724 9.50893 1.22465 9.33333 1.66668 9.33333Z'
                      fill='currentColor'
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className='py-26 bg-orange-200'>
          <div className='container px-4 mx-auto'>
            <div className='text-center mb-14'>
              <span className='text-lg font-extrabold text-indigo-500'>
                For those who don't want to do customization by themselves
              </span>
              <h1 className='text-3xl md:text-4xl font-extrabold font-heading mt-4 mb-6'>
                Everything free. Nothing is paywalled
              </h1>
              <div className='flex items-center justify-center'>
                <span className='sm:text-xl font-extrabold'>Billed Once</span>
                <div className='inline-flex w-16 h-10 mx-4 px-px items-center bg-white border-3 border-indigo-900 rounded-full shadow'>
                  <button className='w-7 h-7 border-3 border-indigo-900 bg-green-200 rounded-full' />
                  <button className='w-7 h-7 rounded-full focus:outline-none' />
                </div>
                <span className='sm:text-xl font-extrabold'>
                  Billed Monthly
                </span>
              </div>
            </div>
            <div className='flex flex-wrap -mx-4'>
              <div className='w-full lg:w-1/2 px-4 mb-12 lg:mb-0'>
                <div className='flex flex-col h-full bg-white border-3 border-indigo-900 rounded-2xl shadow-md'>
                  <div className='flex flex-wrap justify-between items-center px-6 lg:px-12 py-12 border-b-3 border-indigo-900'>
                    <div className='mb-4 w-full sm:w-1/2 sm:mb-0'>
                      <h2 className='text-2xl font-extrabold'>Basic plan</h2>
                      <p className='text-lg font-extrabold leading-7'>
                        For bigger teams
                      </p>
                    </div>
                    <div className='flex w-full sm:w-auto items-start'>
                      <span className='pr-1 text-lg font-extrabold'>$</span>
                      <span className='text-4xl md:text-5xl font-extrabold'>
                        FREE
                      </span>
                      <span className='pl-1 text-lg font-extrabold self-end'>
                        /mo
                      </span>
                    </div>
                  </div>
                  <div className='mb-auto py-12 px-6 lg:px-12'>
                    <div className='flex mb-4 items-center'>
                      <img
                        className='block w-6 h-6 mr-2 object-contain'
                        src='nigodo-assets/circle-icon-green.svg'
                        alt=''
                      />
                      <span className='text-lg font-extrabold'>
                        Access to all features
                      </span>
                    </div>
                    <div className='flex mb-4 items-center'>
                      <img
                        className='block w-6 h-6 mr-2 object-contain'
                        src='nigodo-assets/circle-icon-green.svg'
                        alt=''
                      />
                      <span className='text-lg font-extrabold'>
                        Assisted onboarding support
                      </span>
                    </div>
                    <div className='flex mb-4 items-center'>
                      <img
                        className='block w-6 h-6 mr-2 object-contain'
                        src='nigodo-assets/circle-icon-green.svg'
                        alt=''
                      />
                      <span className='text-lg font-extrabold'>
                        CPM Overage: Unlimited
                      </span>
                    </div>
                    <div className='flex items-center'>
                      <img
                        className='block w-6 h-6 mr-2 object-contain'
                        src='nigodo-assets/circle-icon-green.svg'
                        alt=''
                      />
                      <span className='text-lg font-extrabold'>
                        Program reviews 1x a month
                      </span>
                    </div>
                  </div>
                  <div className='py-10 px-6 lg:px-12 border-t-3 border-indigo-900'>
                    <a
                      className='inline-block w-full py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200'
                      href='signup.html'
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/2 px-4'>
                <div className='flex flex-col h-full bg-white border-3 border-indigo-900 rounded-2xl shadow-md'>
                  <div className='flex flex-wrap justify-between items-center px-6 lg:px-12 py-12 border-b-3 border-indigo-900'>
                    <div className='mb-4 w-full sm:w-1/2 sm:mb-0'>
                      <h2 className='text-2xl font-extrabold'>Basic plan</h2>
                      <p className='text-lg font-extrabold leading-7'>
                        For bigger teams
                      </p>
                    </div>
                    <div className='flex w-full sm:w-auto items-start'>
                      <span className='pr-1 text-lg font-extrabold'>$</span>
                      <span className='text-4xl md:text-5xl font-extrabold'>
                        29
                      </span>
                      <span className='pl-1 text-lg font-extrabold self-end'>
                        /mo
                      </span>
                    </div>
                  </div>
                  <div className='mb-auto py-12 px-6 lg:px-12'>
                    <div className='flex mb-4 items-center'>
                      <img
                        className='block w-6 h-6 mr-2 object-contain'
                        src='nigodo-assets/circle-icon-green.svg'
                        alt=''
                      />
                      <span className='text-lg font-extrabold'>
                        Access to all features
                      </span>
                    </div>
                    <div className='flex mb-4 items-center'>
                      <img
                        className='block w-6 h-6 mr-2 object-contain'
                        src='nigodo-assets/circle-icon-green.svg'
                        alt=''
                      />
                      <span className='text-lg font-extrabold'>
                        Assisted onboarding support
                      </span>
                    </div>
                    <div className='flex mb-4 items-center'>
                      <img
                        className='block w-6 h-6 mr-2 object-contain'
                        src='nigodo-assets/circle-icon-green.svg'
                        alt=''
                      />
                      <span className='text-lg font-extrabold'>
                        CPM Overage: Unlimited
                      </span>
                    </div>
                    <div className='flex mb-4 items-center'>
                      <img
                        className='block w-6 h-6 mr-2 object-contain'
                        src='nigodo-assets/circle-icon-green.svg'
                        alt=''
                      />
                      <span className='text-lg font-extrabold'>
                        Access to all features
                      </span>
                    </div>
                    <div className='flex mb-4 items-center'>
                      <img
                        className='block w-6 h-6 mr-2 object-contain'
                        src='nigodo-assets/circle-icon-green.svg'
                        alt=''
                      />
                      <span className='text-lg font-extrabold'>
                        CPM Overage: Unlimited
                      </span>
                    </div>
                    <div className='flex items-center'>
                      <img
                        className='block w-6 h-6 mr-2 object-contain'
                        src='nigodo-assets/circle-icon-green.svg'
                        alt=''
                      />
                      <span className='text-lg font-extrabold'>
                        Program reviews 1x a month
                      </span>
                    </div>
                  </div>
                  <div className='py-10 px-6 lg:px-12 border-t-3 border-indigo-900'>
                    <a
                      className='inline-block w-full py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200'
                      href='signup.html'
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-orange-200'>
          <div className='pt-26 border-3 border-l-0 border-r-0 border-indigo-900'>
            <div className='pb-16 border-b-3 border-indigo-900'>
              <div className='container px-4 mx-auto text-center'>
                <div className='flex flex-wrap justify-between items-center'>
                  <div className='w-full lg:w-auto mb-12 lg:mb-0'>
                    <a className='inline-block mx-auto' href='index.html'>
                      <img
                        className='rounded-lg h-16'
                        src='images/Logo-Long-2.svg'
                        alt=''
                      />
                    </a>
                  </div>
                  <div className='w-full lg:w-auto mb-12 lg:mb-0'>
                    <div className='flex flex-wrap items-center justify-center'>
                      <a
                        className='inline-block mr-4 md:mr-16 2xl:mr-20 text-lg font-extrabold hover:text-indigo-800'
                        href='#'
                      >
                        Discussions
                      </a>
                      <a
                        className='inline-block mr-4 md:mr-16 2xl:mr-20 text-lg font-extrabold hover:text-indigo-800'
                        href='#'
                      >
                        Roadmap
                      </a>
                    </div>
                  </div>
                  <div className='w-full lg:w-auto flex items-center justify-center'>
                    <a
                      className='inline-block text-indigo-900 hover:text-indigo-800 mr-2'
                      href='#'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                        width={40}
                        zoomAndPan='magnify'
                        viewBox='0 0 30 30.000001'
                        height={40}
                        preserveAspectRatio='xMidYMid meet'
                        version={1.0}
                        className='bi bi-twitter h-12 w-12'
                      >
                        <defs>
                          <filter
                            x='0%'
                            y='0%'
                            width='100%'
                            height='100%'
                            id='id1'
                          >
                            <feColorMatrix
                              values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'
                              colorInterpolationFilters='sRGB'
                            />
                          </filter>
                          <filter
                            x='0%'
                            y='0%'
                            width='100%'
                            height='100%'
                            id='id2'
                          >
                            <feColorMatrix
                              values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0.2126 0.7152 0.0722 0 0'
                              colorInterpolationFilters='sRGB'
                            />
                          </filter>
                          <clipPath id='id3'>
                            <path
                              d='M 0.484375 0 L 29.515625 0 L 29.515625 29 L 0.484375 29 Z M 0.484375 0 '
                              clipRule='nonzero'
                            />
                          </clipPath>
                          <image
                            x={0}
                            y={0}
                            width={100}
                            xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAAAAABVicqIAAAAAmJLR0QA/4ePzL8AAAGQSURBVGiB7ZixTsNADIbP1zZtCQsvwMoLMPII5a0QA4/Ag3RBakcmNgaoGGBBYqgQKBTC5c6MOYRvKPpzUiN/UyJZ/uKzHUUxRlEURVGU3nO6rBhCtZilHOcYAzMzP50l6gA6mO/kWpZQST1vM9v28vhffUxRHIqST6jEHIiSV6xkKkresZKRKNlgJRHd9cSLEnAlTpR8YCWNKHnLIXnBSuTjAu9JECVgZMkwh2QPKyFRUuaQTLASFiXgSuTXyvRvIF4yziEpsBK5J+A9kadrgJVE6ax4iSBqcS8l4J5Ec9SdJKK748oywrIEXIncE7Akekt1d1xZ9iQiykzpqB2TdEcvj6s/PcmyJz4dhZOEdBRO0h25p4vTUThJk47aMcl3byRf2Mzyz4I1VvIsSqpHpGNzJUrmD8D5am4v25voO2h1ZMtJcu+3WlW3ur9YtLe/cs5OKtovy+mkGA4sWWstERkOvvHOBSIyhsgw+8bVrq6dseNyPCqGAzKBOTCzYRPY+/XN9Wqbh1IURVEUZSf5AXTSh7m+hyvKAAAAAElFTkSuQmCC'
                            id='id4'
                            height={100}
                            preserveAspectRatio='xMidYMid meet'
                          />
                          <mask id='id5'>
                            <g filter='url(#id1)'>
                              <g
                                filter='url(#id2)'
                                transform='matrix(0.290323, 0, 0, 0.290323, 0.48387, 0.00000193548)'
                              >
                                <image
                                  x={0}
                                  y={0}
                                  width={100}
                                  xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAAAAABVicqIAAAAAmJLR0QA/4ePzL8AAAGQSURBVGiB7ZixTsNADIbP1zZtCQsvwMoLMPII5a0QA4/Ag3RBakcmNgaoGGBBYqgQKBTC5c6MOYRvKPpzUiN/UyJZ/uKzHUUxRlEURVGU3nO6rBhCtZilHOcYAzMzP50l6gA6mO/kWpZQST1vM9v28vhffUxRHIqST6jEHIiSV6xkKkresZKRKNlgJRHd9cSLEnAlTpR8YCWNKHnLIXnBSuTjAu9JECVgZMkwh2QPKyFRUuaQTLASFiXgSuTXyvRvIF4yziEpsBK5J+A9kadrgJVE6ax4iSBqcS8l4J5Ec9SdJKK748oywrIEXIncE7Akekt1d1xZ9iQiykzpqB2TdEcvj6s/PcmyJz4dhZOEdBRO0h25p4vTUThJk47aMcl3byRf2Mzyz4I1VvIsSqpHpGNzJUrmD8D5am4v25voO2h1ZMtJcu+3WlW3ur9YtLe/cs5OKtovy+mkGA4sWWstERkOvvHOBSIyhsgw+8bVrq6dseNyPCqGAzKBOTCzYRPY+/XN9Wqbh1IURVEUZSf5AXTSh7m+hyvKAAAAAElFTkSuQmCC'
                                  height={100}
                                  preserveAspectRatio='xMidYMid meet'
                                />
                              </g>
                            </g>
                          </mask>
                          <image
                            x={0}
                            y={0}
                            width={100}
                            xlinkHref='data:image/png;base64,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'
                            id='id6'
                            height={100}
                            preserveAspectRatio='xMidYMid meet'
                          />
                        </defs>
                        <g clipPath='url(#id3)'>
                          <g mask='url(#id5)'>
                            <g transform='matrix(0.290323, 0, 0, 0.290323, 0.48387, 0.00000193548)'>
                              <image
                                x={0}
                                y={0}
                                width={100}
                                xlinkHref='data:image/png;base64,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'
                                height={100}
                                preserveAspectRatio='xMidYMid meet'
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </a>
                    <a
                      className='inline-block text-indigo-900 hover:text-indigo-800 mr-2'
                      href='#'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                        width={40}
                        zoomAndPan='magnify'
                        viewBox='0 0 30 30.000001'
                        height={40}
                        preserveAspectRatio='xMidYMid meet'
                        version={1.0}
                        className='bi bi-github h-12 w-12'
                      >
                        <defs>
                          <filter
                            x='0%'
                            y='0%'
                            width='100%'
                            height='100%'
                            id='id1'
                          >
                            <feColorMatrix
                              values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'
                              colorInterpolationFilters='sRGB'
                            />
                          </filter>
                          <filter
                            x='0%'
                            y='0%'
                            width='100%'
                            height='100%'
                            id='id2'
                          >
                            <feColorMatrix
                              values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0.2126 0.7152 0.0722 0 0'
                              colorInterpolationFilters='sRGB'
                            />
                          </filter>
                          <clipPath id='id3'>
                            <path
                              d='M 0.484375 0 L 29.515625 0 L 29.515625 29 L 0.484375 29 Z M 0.484375 0 '
                              clipRule='nonzero'
                            />
                          </clipPath>
                          <image
                            x={0}
                            y={0}
                            width={100}
                            xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAAAAABVicqIAAAAAmJLR0QA/4ePzL8AAACVSURBVGiB7dixDYMwGERhyAAsBlvhmo2cMg3ZJRKm5mgigZTfFVdE6L3K1X2ySzcNERER3b7xI0/rc6gZLxMhSUqVezgNKb6L662+5WO5PY5b+wtfqHQRIqtxnn6Yl8NAQEBAQEBAQEBAQEBAQEBAQEBuiqze5SVEZi/yDpHJi1TmkvPHdqzhQy4eoeTe+yxERET0j+0U4tOF+E/e6QAAAABJRU5ErkJggg=='
                            id='id4'
                            height={100}
                            preserveAspectRatio='xMidYMid meet'
                          />
                          <mask id='id5'>
                            <g filter='url(#id1)'>
                              <g
                                filter='url(#id2)'
                                transform='matrix(0.290323, 0, 0, 0.290323, 0.48387, 0.00000193548)'
                              >
                                <image
                                  x={0}
                                  y={0}
                                  width={100}
                                  xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAAAAABVicqIAAAAAmJLR0QA/4ePzL8AAACVSURBVGiB7dixDYMwGERhyAAsBlvhmo2cMg3ZJRKm5mgigZTfFVdE6L3K1X2ySzcNERER3b7xI0/rc6gZLxMhSUqVezgNKb6L662+5WO5PY5b+wtfqHQRIqtxnn6Yl8NAQEBAQEBAQEBAQEBAQEBAQEBuiqze5SVEZi/yDpHJi1TmkvPHdqzhQy4eoeTe+yxERET0j+0U4tOF+E/e6QAAAABJRU5ErkJggg=='
                                  height={100}
                                  preserveAspectRatio='xMidYMid meet'
                                />
                              </g>
                            </g>
                          </mask>
                          <image
                            x={0}
                            y={0}
                            width={100}
                            xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAABmJLR0QA/wD/AP+gvaeTAAAEIUlEQVR4nO2cXWscVRjH/89u1rAbQpNINpW8jhSl3axpqRAssZoaRAQDpSqkvfTWD5EPoR9B413BgF60pSreCAr2JbiJL9u8VZIgZhOJvah7vJh1GCfZM+eZzMyeJM/vap99zsOeeZjzP39m2AMIgiAIgiAIgiAIgiAIgiAIgjEUOmLQKZHh0KOJgntttPLbQ/3IjD49PDJKCur4dgoAEQCCUsPOuZCRmtygUyIFAoFUnLOzFKVAIN391aapJkARCCqTaStfec8Zm8h3dicwy6bMzV5/cONqoj+xuff3fHX1o/s/Pa3XQQSluy20y1A10uUr756beCff2f3GS33+fCCcLBc1WVZtahQL+Q9KL3w4dhYA1UMWkK5ZBFf94IxdBnDt0sDU+b63Lz7nZgPh9Hj/mxdOT4/3H5hl1abPtDMEIFRvdMvQrQeQ7+wCUFnbVQqLj3fdTCBcXNvJZWlp/eAsq9ZP+ZObITOMF+1GpksOOyX3w8zspzHOx5y52evVX75N57ecMxPuh+XqQrMxIdahGSw9OkxoFWHL8CCuXRp4+UxPey7zxQ+/JxraRpRmsfToMCF8q8MGbNespH2Wh7eTxKZZ5nJDh7NddsJYhuZyQ8D7rw6dd7rasnTrxw1WbSJXGROMZpnLjQIqqztP/6n//Pgvbq3N2K5Z6f+oRrOi7IYAXi8Xv3qwmUKYvinVEN1nFZ7J+hUnidA2IvosAEs+xUkotA3RrCCxaRZLbi6Xer9Z2IpW65G+KdXA9lkmcuP5rPZcxu+zjqhUefB8FszkRgGVtZ16Xfl9lmGtzTCatbBSW1ipGYb3qtv3qtvRaq0los+aLBfv+iQmuTDyk9KRkcG7t+eC056aefRo1UtNTs0AaAyLV7M8psf7X3nx2c5C7vPv1hMNEbcpDbRvfzf1RGlW4JF5cqFt2O6zrHoGz7uzWHLz2mjv1w+3otXuvwYbYDSLJTeudepob3OtE1eqPI6qKWXJTWVtN0O01OTN4NGSKg9Os9Z3F33Xow8D1olVay0R3xueTIx2wxPFYXfD1PbvFmKy7coyZCDNYmC0DK1yhi3EqFmpOcMWYmJKZRkykGYxkGYxEFMaRExpOGJKY0aaxUBMKQMxpQ3ElMaMNIuBNItBIqZ0/6tz9725P+V9YxsaU2rUrBNlSuP/o9PJRJrFQEwpA6Nm3bn6VrGQT3oqLWRj78nUzS+Bxt+cm6Fbhv+dDoF5K7etGJmvLgMIPb8iq8md6im6R0R8v/lHLpsZ6Ch05HKxTrL1bOw9+Wzp14/vV+pKIUMAattbzQbrOjn0/CiUomN+YMj/IVpufgiG7s6q/bnZ1d3rnqNBx7hjCu49Ba3Jgr5ZAGrbW6d6+honjxzLfnkXRaTvlCAIgiAIgiAIgiAIgiAIgiDw+BeaK1OSac+7PQAAAABJRU5ErkJggg=='
                            id='id6'
                            height={100}
                            preserveAspectRatio='xMidYMid meet'
                          />
                        </defs>
                        <g clipPath='url(#id3)'>
                          <g mask='url(#id5)'>
                            <g transform='matrix(0.290323, 0, 0, 0.290323, 0.48387, 0.00000193548)'>
                              <image
                                x={0}
                                y={0}
                                width={100}
                                xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAABmJLR0QA/wD/AP+gvaeTAAAEIUlEQVR4nO2cXWscVRjH/89u1rAbQpNINpW8jhSl3axpqRAssZoaRAQDpSqkvfTWD5EPoR9B413BgF60pSreCAr2JbiJL9u8VZIgZhOJvah7vJh1GCfZM+eZzMyeJM/vap99zsOeeZjzP39m2AMIgiAIgiAIgiAIgiAIgiAIgjEUOmLQKZHh0KOJgntttPLbQ/3IjD49PDJKCur4dgoAEQCCUsPOuZCRmtygUyIFAoFUnLOzFKVAIN391aapJkARCCqTaStfec8Zm8h3dicwy6bMzV5/cONqoj+xuff3fHX1o/s/Pa3XQQSluy20y1A10uUr756beCff2f3GS33+fCCcLBc1WVZtahQL+Q9KL3w4dhYA1UMWkK5ZBFf94IxdBnDt0sDU+b63Lz7nZgPh9Hj/mxdOT4/3H5hl1abPtDMEIFRvdMvQrQeQ7+wCUFnbVQqLj3fdTCBcXNvJZWlp/eAsq9ZP+ZObITOMF+1GpksOOyX3w8zspzHOx5y52evVX75N57ecMxPuh+XqQrMxIdahGSw9OkxoFWHL8CCuXRp4+UxPey7zxQ+/JxraRpRmsfToMCF8q8MGbNespH2Wh7eTxKZZ5nJDh7NddsJYhuZyQ8D7rw6dd7rasnTrxw1WbSJXGROMZpnLjQIqqztP/6n//Pgvbq3N2K5Z6f+oRrOi7IYAXi8Xv3qwmUKYvinVEN1nFZ7J+hUnidA2IvosAEs+xUkotA3RrCCxaRZLbi6Xer9Z2IpW65G+KdXA9lkmcuP5rPZcxu+zjqhUefB8FszkRgGVtZ16Xfl9lmGtzTCatbBSW1ipGYb3qtv3qtvRaq0los+aLBfv+iQmuTDyk9KRkcG7t+eC056aefRo1UtNTs0AaAyLV7M8psf7X3nx2c5C7vPv1hMNEbcpDbRvfzf1RGlW4JF5cqFt2O6zrHoGz7uzWHLz2mjv1w+3otXuvwYbYDSLJTeudepob3OtE1eqPI6qKWXJTWVtN0O01OTN4NGSKg9Os9Z3F33Xow8D1olVay0R3xueTIx2wxPFYXfD1PbvFmKy7coyZCDNYmC0DK1yhi3EqFmpOcMWYmJKZRkykGYxkGYxEFMaRExpOGJKY0aaxUBMKQMxpQ3ElMaMNIuBNItBIqZ0/6tz9725P+V9YxsaU2rUrBNlSuP/o9PJRJrFQEwpA6Nm3bn6VrGQT3oqLWRj78nUzS+Bxt+cm6Fbhv+dDoF5K7etGJmvLgMIPb8iq8md6im6R0R8v/lHLpsZ6Ch05HKxTrL1bOw9+Wzp14/vV+pKIUMAattbzQbrOjn0/CiUomN+YMj/IVpufgiG7s6q/bnZ1d3rnqNBx7hjCu49Ba3Jgr5ZAGrbW6d6+honjxzLfnkXRaTvlCAIgiAIgiAIgiAIgiAIgiDw+BeaK1OSac+7PQAAAABJRU5ErkJggg=='
                                height={100}
                                preserveAspectRatio='xMidYMid meet'
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </a>
                    <a
                      className='inline-block text-indigo-900 hover:text-indigo-800'
                      href='#'
                    ></a>
                  </div>
                </div>
              </div>
            </div>
            <div className='container px-4 pt-16 pb-24 mx-auto'>
              <p className='text-center text-lg font-extrabold'>
                © 2023 Gamekaiju. Viana do Castelo, Portugal.
              </p>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}

