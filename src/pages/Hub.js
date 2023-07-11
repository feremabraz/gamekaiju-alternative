import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Hub() {
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
        <section className='bg-white py-16'>
          <div className='container px-4 mx-auto'>
            <div className='max-w-4xl mx-auto mb-16 text-center'>
              <span className='text-lg font-extrabold text-indigo-500'>
                Updated directly from Github
              </span>
              <h1 className='text-3xl md:text-4xl font-extrabold font-heading mt-2 mb-4'>
                A community oriented Asset Hub
              </h1>
              <p className='text-xl font-extrabold leading-8 mb-12'>
                Assets are licensed under 'Creative Commons By'. Support lifts
                attributtion.
              </p>
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
                  className='inline-block mb-4 mr-6 xl:mr-16 text-xl font-extrabold text-gray-400 hover:text-gray-500'
                  href='#'
                >
                  Characters
                </a>
                <a
                  className='inline-block mb-4 mr-6 xl:mr-16 text-xl font-extrabold text-gray-400 hover:text-gray-500'
                  href='#'
                >
                  Environment
                </a>
                <a
                  className='inline-block mb-4 mr-6 xl:mr-16 text-xl font-extrabold text-gray-400 hover:text-gray-500'
                  href='#'
                >
                  Plugins
                </a>
                <a
                  className='inline-block mb-4 text-xl font-extrabold text-gray-400 hover:text-gray-500'
                  href='#'
                >
                  GUI &amp; SFX
                </a>
              </div>
            </div>
            <div className='flex flex-wrap -mx-4 -mb-8'>
              <div className='w-full lg:w-1/2 px-4 mb-8'>
                <div className='md:flex bg-white border-3 border-indigo-900 shadow-md rounded-2xl overflow-hidden'>
                  <div className='w-full md:w-1/2'>
                    <img
                      className='h-72 lg:h-full w-full block object-cover'
                      src='nigodo-assets/blog/laptops.jpeg'
                      alt=''
                    />
                  </div>
                  <div className='w-full md:w-1/2'>
                    <div className='p-8'>
                      <h2 className='text-2xl font-extrabold mb-16'>
                        A small business is only as good as its tools and it is
                        totally true.
                      </h2>
                      <a
                        className='inline-block text-xl font-bold text-indigo-500 hover:text-indigo-600'
                        href='#'
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/2 px-4 mb-8'>
                <div className='md:flex bg-white border-3 border-indigo-900 shadow-md rounded-2xl overflow-hidden'>
                  <div className='w-full md:w-1/2'>
                    <img
                      className='h-72 lg:h-full w-full block object-cover'
                      src='nigodo-assets/blog/laptops2.jpeg'
                      alt=''
                    />
                  </div>
                  <div className='w-full md:w-1/2'>
                    <div className='p-8'>
                      <h2 className='text-2xl font-extrabold mb-16'>
                        A small business is only as good as its tools and it is
                        totally true.
                      </h2>
                      <a
                        className='inline-block text-xl font-bold text-indigo-500 hover:text-indigo-600'
                        href='#'
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/2 px-4 mb-8'>
                <div className='md:flex bg-white border-3 border-indigo-900 shadow-md rounded-2xl overflow-hidden'>
                  <div className='w-full md:w-1/2'>
                    <img
                      className='h-72 lg:h-full w-full block object-cover'
                      src='nigodo-assets/blog/office1.jpeg'
                      alt=''
                    />
                  </div>
                  <div className='w-full md:w-1/2'>
                    <div className='p-8'>
                      <h2 className='text-2xl font-extrabold mb-16'>
                        A small business is only as good as its tools and it is
                        totally true.
                      </h2>
                      <a
                        className='inline-block text-xl font-bold text-indigo-500 hover:text-indigo-600'
                        href='#'
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/2 px-4 mb-8'>
                <div className='md:flex bg-white border-3 border-indigo-900 shadow-md rounded-2xl overflow-hidden'>
                  <div className='w-full md:w-1/2'>
                    <img
                      className='h-72 lg:h-full w-full block object-cover'
                      src='nigodo-assets/blog/office2.jpeg'
                      alt=''
                    />
                  </div>
                  <div className='w-full md:w-1/2'>
                    <div className='p-8'>
                      <h2 className='text-2xl font-extrabold mb-16'>
                        A small business is only as good as its tools and it is
                        totally true.
                      </h2>
                      <a
                        className='inline-block text-xl font-bold text-indigo-500 hover:text-indigo-600'
                        href='#'
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/2 px-4 mb-8'>
                <div className='md:flex bg-white border-3 border-indigo-900 shadow-md rounded-2xl overflow-hidden'>
                  <div className='w-full md:w-1/2'>
                    <img
                      className='h-72 lg:h-full w-full block object-cover'
                      src='nigodo-assets/blog/laptops.jpeg'
                      alt=''
                    />
                  </div>
                  <div className='w-full md:w-1/2'>
                    <div className='p-8'>
                      <h2 className='text-2xl font-extrabold mb-16'>
                        A small business is only as good as its tools and it is
                        totally true.
                      </h2>
                      <a
                        className='inline-block text-xl font-bold text-indigo-500 hover:text-indigo-600'
                        href='#'
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/2 px-4 mb-8'>
                <div className='md:flex bg-white border-3 border-indigo-900 shadow-md rounded-2xl overflow-hidden'>
                  <div className='w-full md:w-1/2'>
                    <img
                      className='h-72 lg:h-full w-full block object-cover'
                      src='nigodo-assets/blog/laptops2.jpeg'
                      alt=''
                    />
                  </div>
                  <div className='w-full md:w-1/2'>
                    <div className='p-8'>
                      <h2 className='text-2xl font-extrabold mb-16'>
                        A small business is only as good as its tools and it is
                        totally true.
                      </h2>
                      <a
                        className='inline-block text-xl font-bold text-indigo-500 hover:text-indigo-600'
                        href='#'
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-20 text-center'>
              <div className='inline-flex h-14 bg-white rounded border-3 border-indigo-900 shadow'>
                <a
                  className='flex items-center justify-center h-full w-14 border-r-3 border-indigo-900 hover:bg-indigo-900 hover:text-white transition duration-200'
                  href='#'
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M9.17006 12.7101L13.4101 16.9501C13.503 17.0438 13.6136 17.1182 13.7355 17.1689C13.8573 17.2197 13.988 17.2458 14.1201 17.2458C14.2521 17.2458 14.3828 17.2197 14.5046 17.1689C14.6265 17.1182 14.7371 17.0438 14.8301 16.9501C15.0163 16.7627 15.1208 16.5092 15.1208 16.2451C15.1208 15.9809 15.0163 15.7274 14.8301 15.5401L11.2901 12.0001L14.8301 8.46005C15.0163 8.27269 15.1208 8.01924 15.1208 7.75505C15.1208 7.49086 15.0163 7.23741 14.8301 7.05005C14.7366 6.95737 14.6258 6.88404 14.504 6.83428C14.3821 6.78452 14.2517 6.75929 14.1201 6.76005C13.9884 6.75929 13.858 6.78452 13.7361 6.83428C13.6143 6.88404 13.5035 6.95737 13.4101 7.05005L9.17006 11.2901C9.07633 11.383 9.00193 11.4936 8.95117 11.6155C8.9004 11.7373 8.87426 11.868 8.87426 12.0001C8.87426 12.1321 8.9004 12.2628 8.95117 12.3846C9.00193 12.5065 9.07633 12.6171 9.17006 12.7101Z'
                      fill='currentColor'
                    />
                  </svg>
                </a>
                <a
                  className='flex items-center justify-center h-full w-14 font-extrabold text-white bg-indigo-900 border-r-3 border-indigo-900 transition duration-200'
                  href='#'
                >
                  1
                </a>
                <a
                  className='flex items-center justify-center h-full w-14 font-extrabold border-r-3 border-indigo-900 hover:bg-indigo-900 hover:text-white transition duration-200'
                  href='#'
                >
                  2
                </a>
                <a
                  className='flex items-center justify-center h-full w-14 font-extrabold border-r-3 border-indigo-900 hover:bg-indigo-900 hover:text-white transition duration-200'
                  href='#'
                >
                  3
                </a>
                <a
                  className='flex items-center justify-center h-full w-14 hover:bg-indigo-900 hover:text-white transition duration-200'
                  href='#'
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M14.8299 11.2899L10.5899 7.04995C10.497 6.95622 10.3864 6.88183 10.2645 6.83106C10.1427 6.78029 10.012 6.75415 9.87994 6.75415C9.74793 6.75415 9.61723 6.78029 9.49537 6.83106C9.37351 6.88183 9.26291 6.95622 9.16994 7.04995C8.98369 7.23731 8.87915 7.49076 8.87915 7.75495C8.87915 8.01913 8.98369 8.27259 9.16994 8.45995L12.7099 11.9999L9.16994 15.5399C8.98369 15.7273 8.87915 15.9808 8.87915 16.2449C8.87915 16.5091 8.98369 16.7626 9.16994 16.9499C9.26338 17.0426 9.3742 17.116 9.49603 17.1657C9.61787 17.2155 9.74833 17.2407 9.87994 17.2399C10.0115 17.2407 10.142 17.2155 10.2638 17.1657C10.3857 17.116 10.4965 17.0426 10.5899 16.9499L14.8299 12.7099C14.9237 12.617 14.9981 12.5064 15.0488 12.3845C15.0996 12.2627 15.1257 12.132 15.1257 11.9999C15.1257 11.8679 15.0996 11.7372 15.0488 11.6154C14.9981 11.4935 14.9237 11.3829 14.8299 11.2899Z'
                      fill='currentColor'
                    />
                  </svg>
                </a>
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

