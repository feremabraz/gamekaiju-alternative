import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Book() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section>
          <nav className='flex justify-between items-center bg-white py-6 px-10 relative'>
            <a className='text-lg font-bold' href='index.html'>
              <img
                className='rounded-lg h-16'
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
                  href='store.html'
                >
                  Indie Store
                </a>
              </li>
              <li>
                <a
                  className='text-lg mr-10 2xl:mr-16 font-extrabold hover:text-indigo-800'
                  href='book.html'
                >
                  Game Design Book
                </a>
              </li>
              <li></li>
            </ul>
            <div className='hidden xl:flex items-center'>
              <a
                className='inline-block py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200'
                href='#'
              >
                Github
              </a>
            </div>
          </nav>
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
                  className='block py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200'
                  href='#'
                >
                  Sign Up
                </a>
              </div>
            </nav>
          </div>
        </section>
        <section className='bg-orange-200 py-16'>
          <div className='container px-4 mx-auto'>
            <div className='max-w-4xl mx-auto mb-16 text-center'>
              <span className='text-lg font-extrabold text-orange-500'>
                Iterated constantly from Github
              </span>
              <h1 className='text-3xl md:text-4xl font-extrabold font-heading mt-2 mb-4'>
                Each aspect of game development, covered in biweekly issues.
              </h1>
              <p className='text-xl font-extrabold leading-8 mb-12'>
                No useless verbiage. Practical tips and examples created in game
                engines. 2D and 3D iterated documents following the maxim "show,
                don't tell". Editables on Github.
              </p>
              <div className='inline-flex w-full max-w-md p-4 items-center bg-white border-2 border-indigo-900 rounded shadow'>
                <a className='text-indigo-900 hover:text-indigo-800' href='#'>
                  <svg
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M21.71 20.29L18 16.61C19.4401 14.8144 20.1375 12.5353 19.9488 10.2413C19.7601 7.94731 18.6997 5.81279 16.9855 4.27665C15.2714 2.74051 13.0338 1.91951 10.7329 1.98247C8.43203 2.04543 6.24272 2.98757 4.61514 4.61515C2.98756 6.24273 2.04543 8.43204 1.98247 10.7329C1.91951 13.0338 2.7405 15.2714 4.27664 16.9855C5.81278 18.6997 7.9473 19.7601 10.2413 19.9488C12.5353 20.1375 14.8144 19.4401 16.61 18L20.29 21.68C20.383 21.7737 20.4936 21.8481 20.6154 21.8989C20.7373 21.9497 20.868 21.9758 21 21.9758C21.132 21.9758 21.2627 21.9497 21.3846 21.8989C21.5064 21.8481 21.617 21.7737 21.71 21.68C21.8902 21.4935 21.991 21.2443 21.991 20.985C21.991 20.7257 21.8902 20.4765 21.71 20.29ZM11 18C9.61553 18 8.26215 17.5895 7.111 16.8203C5.95986 16.0511 5.06265 14.9579 4.53284 13.6788C4.00303 12.3997 3.8644 10.9922 4.1345 9.63437C4.4046 8.2765 5.07128 7.02922 6.05025 6.05026C7.02922 5.07129 8.2765 4.4046 9.63436 4.13451C10.9922 3.86441 12.3997 4.00303 13.6788 4.53285C14.9579 5.06266 16.0511 5.95987 16.8203 7.11101C17.5895 8.26216 18 9.61553 18 11C18 12.8565 17.2625 14.637 15.9497 15.9498C14.637 17.2625 12.8565 18 11 18Z'
                      fill='#171952'
                    />
                  </svg>
                </a>
                <input
                  className='bg-transparent px-3 text-lg font-extrabold text-indigo-900 placeholder-indigo-900 outline-none'
                  type='search'
                  placeholder='Search'
                />
              </div>
            </div>
            <div className='mb-10'>
              <div className='lg:flex items-center -mb-4'>
                <a
                  className='inline-block mb-4 mr-6 xl:mr-16 text-xl font-extrabold'
                  href='#'
                >
                  All Categories
                </a>
                <a
                  className='inline-block mb-4 mr-6 xl:mr-16 text-xl font-extrabold text-orange-400 hover:text-orange-500'
                  href='#'
                >
                  Introduction series
                </a>
                <a
                  className='inline-block mb-4 mr-6 xl:mr-16 text-xl font-extrabold text-orange-400 hover:text-orange-500'
                  href='#'
                >
                  Emotion series
                </a>
                <a
                  className='inline-block mb-4 mr-6 xl:mr-16 text-xl font-extrabold text-orange-400 hover:text-orange-500'
                  href='#'
                >
                  Marketing &amp; Selling
                </a>
                <a
                  className='inline-block mb-4 text-xl font-extrabold text-orange-400 hover:text-orange-500'
                  href='#'
                >
                  Genre specific
                </a>
              </div>
            </div>
            <div className='flex flex-wrap -mx-4 -mb-8'>
              <div className='w-full lg:w-1/2 px-4 mb-8'>
                <div className='bg-white border-3 border-indigo-900 shadow-md rounded-2xl overflow-hidden'>
                  <img
                    className='h-64 md:h-96 w-full block object-cover'
                    src='nigodo-assets/blog/laptops.jpeg'
                    alt=''
                  />
                  <div className='px-6 py-8 md:p-10 border-t-3 border-indigo-900'>
                    <span className='inline-flex mb-6 h-6 items-center justify-center text-xs font-extrabold px-2 text-indigo-900 rounded border-2 border-indigo-900 bg-green-200 uppercase shadow-sm'>
                      Introduction series
                    </span>
                    <p className='text-xl font-bold text-gray-400 mb-2'>
                      Last update • 26 Jan 2022
                    </p>
                    <h2 className='text-2xl font-extrabold mb-6'>
                      A small business is only as good as its tools and it is
                      totally true.
                    </h2>
                    <p className='text-xl font-bold mb-6'>
                      We've all experienced the chaos of multiple spreadsheets,
                      tracking and insight tools, and scrambling for the right
                      data at the right time.
                    </p>
                    <a
                      className='inline-block text-xl font-bold text-indigo-500 hover:text-indigo-600'
                      href='#'
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/2 px-4 mb-8'>
                <div className='bg-white border-3 border-indigo-900 shadow-md rounded-2xl overflow-hidden'>
                  <img
                    className='h-64 md:h-96 w-full block object-cover'
                    src='nigodo-assets/blog/laptops2.jpeg'
                    alt=''
                  />
                  <div className='px-6 py-8 md:p-10 border-t-3 border-indigo-900'>
                    <span className='inline-flex mb-6 h-6 items-center justify-center text-xs font-extrabold px-2 text-indigo-900 rounded border-2 border-indigo-900 bg-green-200 uppercase shadow-sm'>
                      Introduction series
                    </span>
                    <p className='text-xl font-bold text-gray-400 mb-2'>
                      Last update • 26 Jan 2022
                    </p>
                    <h2 className='text-2xl font-extrabold mb-6'>
                      A small business is only as good as its tools and it is
                      totally true.
                    </h2>
                    <p className='text-xl font-bold mb-6'>
                      We've all experienced the chaos of multiple spreadsheets,
                      tracking and insight tools, and scrambling for the right
                      data at the right time.
                    </p>
                    <a
                      className='inline-block text-xl font-bold text-indigo-500 hover:text-indigo-600'
                      href='#'
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/2 px-4 mb-8'>
                <div className='bg-white border-3 border-indigo-900 shadow-md rounded-2xl overflow-hidden'>
                  <img
                    className='h-64 md:h-96 w-full block object-cover'
                    src='nigodo-assets/blog/office1.jpeg'
                    alt=''
                  />
                  <div className='px-6 py-8 md:p-10 border-t-3 border-indigo-900'>
                    <span className='inline-flex mb-6 h-6 items-center justify-center text-xs font-extrabold px-2 text-indigo-900 rounded border-2 border-indigo-900 bg-green-200 uppercase shadow-sm'>
                      Introduction series
                    </span>
                    <p className='text-xl font-bold text-gray-400 mb-2'>
                      Last update • 19 Jan 2022
                    </p>
                    <h2 className='text-2xl font-extrabold mb-6'>
                      A small business is only as good as its tools and it is
                      totally true.
                    </h2>
                    <p className='text-xl font-bold mb-6'>
                      We've all experienced the chaos of multiple spreadsheets,
                      tracking and insight tools, and scrambling for the right
                      data at the right time.
                    </p>
                    <a
                      className='inline-block text-xl font-bold text-indigo-500 hover:text-indigo-600'
                      href='#'
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/2 px-4 mb-8'>
                <div className='bg-white border-3 border-indigo-900 shadow-md rounded-2xl overflow-hidden'>
                  <img
                    className='h-64 md:h-96 w-full block object-cover'
                    src='nigodo-assets/blog/office2.jpeg'
                    alt=''
                  />
                  <div className='px-6 py-8 md:p-10 border-t-3 border-indigo-900'>
                    <span className='inline-flex mb-6 h-6 items-center justify-center text-xs font-extrabold px-2 text-indigo-900 rounded border-2 border-indigo-900 bg-green-200 uppercase shadow-sm'>
                      Emotion series
                    </span>
                    <p className='text-xl font-bold text-gray-400 mb-2'>
                      Last update • 19 Jan 2022
                    </p>
                    <h2 className='text-2xl font-extrabold mb-6'>
                      A small business is only as good as its tools and it is
                      totally true.
                    </h2>
                    <p className='text-xl font-bold mb-6'>
                      We've all experienced the chaos of multiple spreadsheets,
                      tracking and insight tools, and scrambling for the right
                      data at the right time.
                    </p>
                    <a
                      className='inline-block text-xl font-bold text-indigo-500 hover:text-indigo-600'
                      href='#'
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/2 px-4 mb-8'>
                <div className='bg-white border-3 border-indigo-900 shadow-md rounded-2xl overflow-hidden'>
                  <img
                    className='h-64 md:h-96 w-full block object-cover'
                    src='nigodo-assets/blog/office3.jpeg'
                    alt=''
                  />
                  <div className='px-6 py-8 md:p-10 border-t-3 border-indigo-900'>
                    <span className='inline-flex mb-6 h-6 items-center justify-center text-xs font-extrabold px-2 text-indigo-900 rounded border-2 border-indigo-900 bg-green-200 uppercase shadow-sm'>
                      Marketing &amp; Selling
                    </span>
                    <p className='text-xl font-bold text-gray-400 mb-2'>
                      Last update • 19 Jan 2022
                    </p>
                    <h2 className='text-2xl font-extrabold mb-6'>
                      A small business is only as good as its tools and it is
                      totally true.
                    </h2>
                    <p className='text-xl font-bold mb-6'>
                      We've all experienced the chaos of multiple spreadsheets,
                      tracking and insight tools, and scrambling for the right
                      data at the right time.
                    </p>
                    <a
                      className='inline-block text-xl font-bold text-indigo-500 hover:text-indigo-600'
                      href='#'
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/2 px-4 mb-8'>
                <div className='bg-white border-3 border-indigo-900 shadow-md rounded-2xl overflow-hidden'>
                  <img
                    className='h-64 md:h-96 w-full block object-cover'
                    src='nigodo-assets/blog/office2.jpeg'
                    alt=''
                  />
                  <div className='px-6 py-8 md:p-10 border-t-3 border-indigo-900'>
                    <span className='inline-flex mb-6 h-6 items-center justify-center text-xs font-extrabold px-2 text-indigo-900 rounded border-2 border-indigo-900 bg-green-200 uppercase shadow-sm'>
                      Genre specific
                    </span>
                    <p className='text-xl font-bold text-gray-400 mb-2'>
                      Last update • 12 Jan 2022
                    </p>
                    <h2 className='text-2xl font-extrabold mb-6'>
                      A small business is only as good as its tools and it is
                      totally true.
                    </h2>
                    <p className='text-xl font-bold mb-6'>
                      We've all experienced the chaos of multiple spreadsheets,
                      tracking and insight tools, and scrambling for the right
                      data at the right time.
                    </p>
                    <a
                      className='inline-block text-xl font-bold text-indigo-500 hover:text-indigo-600'
                      href='#'
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-20 text-center'>
              <a
                className='inline-block py-4 px-12 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200'
                href='#'
              >
                Show more
              </a>
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
                        href='features.html'
                      >
                        Features
                      </a>
                      <a
                        className='inline-block mr-4 md:mr-16 2xl:mr-20 text-lg font-extrabold hover:text-indigo-800'
                        href='perks.html'
                      >
                        Sponsors Perks
                      </a>
                      <a
                        className='inline-block mr-4 md:mr-16 2xl:mr-20 text-lg font-extrabold hover:text-indigo-800'
                        href='#'
                      >
                        Built in Public
                      </a>
                      <a
                        className='inline-block text-lg font-extrabold hover:text-indigo-800'
                        href='#'
                      >
                        Press Kit
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

