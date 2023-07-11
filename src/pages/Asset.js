import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Asset() {
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
        <section className='bg-white'>
          <div className='container px-4 mx-auto pt-16'>
            <div className='max-w-4xl'>
              <span className='inline-flex h-6 items-center justify-center text-xs font-extrabold px-2 text-indigo-900 rounded border border-indigo-900 bg-green-200 uppercase'>
                Updated within the last month
              </span>
            </div>
            <div className='max-w-4xl mx-auto'></div>
          </div>
        </section>
        <section className='bg-white pb-26'>
          <div className='container px-4 mx-auto'>
            <div className='flex flex-wrap -mx-4 mb-16 items-center justify-between'>
              <div className='w-full lg:w-1/2 xl:w-2/3 px-4 mb-8 lg:mb-0'>
                <h1 className='text-3xl md:text-4xl font-extrabold font-heading mt-3 mb-3'>
                  Our team is the best in the business.
                </h1>
                <p className='text-xl font-extrabold leading-8'>
                  Highly professional and capable of running your business
                  across all digital channels.
                </p>
              </div>
              <div className='w-full lg:w-1/2 xl:w-1/3 px-4'>
                <div className='flex flex-wrap lg:justify-end'>
                  <a
                    className='inline-block w-full md:w-auto mb-2 md:mb-0 md:mr-6 py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200'
                    href='#'
                  >
                    Download
                  </a>
                  <a
                    className='inline-block w-full md:w-auto py-4 px-6 text-center leading-6 text-lg text-indigo-900 hover:text-white font-extrabold bg-white hover:bg-indigo-800 border-3 border-indigo-900 shadow rounded transition duration-200'
                    href='#'
                  >
                    See details
                  </a>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap -mx-4 -mb-8'>
              <div className='w-full lg:w-2/3 px-4 mb-8'>
                <div className='h-full flex flex-col border-3 border-indigo-900 rounded-2xl shadow overflow-hidden'>
                  <div className='mb-auto h-full'>
                    <img
                      className='block h-96 lg:h-full w-full object-cover'
                      src='nigodo-assets/team/photo-5.jpg'
                      alt=''
                    />
                  </div>
                  <div className='px-6 py-4 bg-indigo-900'>
                    <h2 className='text-xl text-white font-extrabold'>
                      Macauley Herring
                    </h2>
                    <span className='text-lg font-bold text-indigo-300'>
                      CEO &amp; Founder
                    </span>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/3 px-4 mb-8'>
                <div className='mb-8 border-3 border-indigo-900 rounded-2xl shadow overflow-hidden'>
                  <div>
                    <img
                      className='block w-full h-96 lg:h-64 object-cover'
                      src='nigodo-assets/team/photo-3.jpg'
                      alt=''
                    />
                  </div>
                  <div className='px-6 py-4 bg-indigo-900'>
                    <h2 className='text-xl text-white font-extrabold'>
                      Elen Benitez
                    </h2>
                    <span className='text-lg font-bold text-indigo-300'>
                      CPO
                    </span>
                  </div>
                </div>
                <div className='border-3 border-indigo-900 rounded-2xl shadow overflow-hidden'>
                  <div>
                    <img
                      className='block w-full h-96 lg:h-64 object-cover'
                      src='nigodo-assets/team/photo-2.jpg'
                      alt=''
                    />
                  </div>
                  <div className='px-6 py-4 bg-indigo-900'>
                    <h2 className='text-xl text-white font-extrabold'>
                      Jo Mathews
                    </h2>
                    <span className='text-lg font-bold text-indigo-300'>
                      CTO
                    </span>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/3 px-4 mb-8'>
                <div className='mb-8 border-3 border-indigo-900 rounded-2xl shadow overflow-hidden'>
                  <div>
                    <img
                      className='block w-full h-96 lg:h-64 object-cover'
                      src='nigodo-assets/team/photo-1.jpg'
                      alt=''
                    />
                  </div>
                  <div className='px-6 py-4 bg-indigo-900'>
                    <h2 className='text-xl text-white font-extrabold'>
                      Macauley Herring
                    </h2>
                    <span className='text-lg font-bold text-indigo-300'>
                      Customer Services
                    </span>
                  </div>
                </div>
                <div className='border-3 border-indigo-900 rounded-2xl shadow overflow-hidden'>
                  <div>
                    <img
                      className='block w-full h-96 lg:h-64 object-cover'
                      src='nigodo-assets/team/photo-2.jpg'
                      alt=''
                    />
                  </div>
                  <div className='px-6 py-4 bg-indigo-900'>
                    <h2 className='text-xl text-white font-extrabold'>
                      Alya Levine
                    </h2>
                    <span className='text-lg font-bold text-indigo-300'>
                      Backend Developer
                    </span>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-2/3 px-4 mb-8'>
                <div className='h-full flex flex-col border-3 border-indigo-900 rounded-2xl shadow overflow-hidden'>
                  <div className='mb-auto h-full'>
                    <img
                      className='block h-96 lg:h-full w-full object-cover'
                      src='nigodo-assets/team/photo-3.jpg'
                      alt=''
                    />
                  </div>
                  <div className='px-6 py-4 bg-indigo-900'>
                    <h2 className='text-xl text-white font-extrabold'>
                      Rosemary Hernandez
                    </h2>
                    <span className='text-lg font-bold text-indigo-300'>
                      IOS Developer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-white'>
          <div className='container px-4 mx-auto relative'>
            <div className='flex flex-wrap -mx-4'>
              <div className='w-full lg:w-1/3 px-4 mb-12 lg:mb-0'>
                <div className='h-full max-w-md mx-auto py-12 px-8 bg-white border-3 border-indigo-900 shadow-md rounded-2xl text-center'>
                  <img
                    className='block mx-auto mb-4 h-20'
                    src='images/icons8-archive-100.png'
                    alt=''
                  />
                  <h4 className='text-2xl font-extrabold mb-6'>
                    Game Engine Ready
                  </h4>
                  <p className='text-lg font-extrabold leading-7'>
                    When an asset needs to display special information, you can
                    check it by pressing the button in the upper right corner or
                    the three dots below.
                  </p>
                </div>
              </div>
              <div className='w-full lg:w-1/3 px-4 mb-12 lg:mb-0'>
                <div className='h-full max-w-md mx-auto py-12 px-8 bg-white border-3 border-indigo-900 shadow-md rounded-2xl text-center'>
                  <img
                    className='block mx-auto mb-4 h-20'
                    src='images/icons8-laptop-alert-100.png'
                    alt=''
                  />
                  <h4 className='text-2xl font-extrabold mb-6'>Bug Free</h4>
                  <p className='text-lg font-extrabold leading-7'>
                    I don't like to see warnings on the console either,
                    especially if they are marked as errors. Special care has
                    been taken to spare you that experience.
                  </p>
                </div>
              </div>
              <div className='w-full lg:w-1/3 px-4'>
                <div className='h-full max-w-md mx-auto py-12 px-8 bg-white border-3 border-indigo-900 shadow-md rounded-2xl text-center'>
                  <img
                    className='block mx-auto mb-4 h-20'
                    src='images/icons8-mana-100.png'
                    alt=''
                  />
                  <h4 className='text-2xl font-extrabold mb-6'>
                    Both of us Empowered
                  </h4>
                  <p className='text-lg font-extrabold leading-7'>
                    When you are a sponsor you are enabling the continued
                    expansion of assets like this, and you can also tell me
                    exactly where to expand it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-white py-26'>
          <div className='container px-4 mx-auto'>
            <div className='max-w-4xl mx-auto'>
              <div className='md:flex justify-center items-center'>
                <a
                  className='inline-block w-full md:w-auto mb-4 md:mb-0 md:mr-6 py-3 px-8 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200'
                  href='#'
                >
                  Discuss this Asset
                </a>
                <a
                  className='inline-flex items-center justify-center w-14 h-14 border-3 border-indigo-900 hover:border-indigo-800 rounded bg-white text-indigo-900 hover:text-indigo-800 shadow mr-4'
                  href='#'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    className='h-8 w-8'
                  >
                    <path d='M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' />
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
                            xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAABmJLR0QA/wD/AP+gvaeTAAAGwUlEQVR4nO2bbUxTVxjHn9MX+oYo3NqNgCvNpsuspFJwbMwlslW2uM25LGSJJs7M6Zxv2Yft07Iti47FuJg58WVDXFz0y7LFRLPNahETcZrJJGgQER0gCBN6e1GgLSuXsw+FtkB6DtcWWtrzCzT35Tn3Pv33POc859xzARgMBoPBYDAYDAaDwWAwGAwGg8GYNIhqYbdX1dXVt7bdrf27zuUSRFGcBremB7lcznEZBfl5JpPRmmex2YrJ9jLy6a937XVUnc/LswhCb3//QCIpBQCiKPb19ff29lrzLGcd1bt37yXbk2qW3V7lqDqfwekPHfohqk7GI1s3b3Ty/HJbMaF+KQjl6+rqbS8v27hpu0Im22ZZ+HpOtkGrmQI/Y0m323Oqpb38WmP5ge8rK/ZfrasnGMsJ556a/8ylS3913Ovcblm43rxAp1RG29XYo1MqrQZOKZdd/renx+kcHBy8cuVyOGOSWEimau+45/MNlRUV6JSkOjjTmZeqO9p4W+gVepx8Z0drODOSBLzLJYoiAJqrUUffwXjC/wUH+t1e7yDBjNQb+pWKsl/xjThE6u5JYuEkU4oKJc9KPr0w4RxFLHLhhIPyZcliYYSSSixKGJHEQpBkFQuArBc1DFmbFYQqVlKByZHEGvgQMCWMiIMYDIAAA+QePxFNn6aYHCNX/ftWACheUd7axpMNAMC/DcdPIASYWDdIWhpzzAgAI2hp+OLRfZ8hmMxf+sOoreVGOBtaUoqSqoGPIHUABADDUfQlzkGBjzCQx4aUwgkGtS+jJKVRDENh5znhq3PRulpMoNQsGbl7kHgrJIvzehpB6oAADwOgCCJx4Jfr7rO3FE+kD90VtCULAEPPB78GdnVv5z7ylaeGiAbSEGEUuh3NaVuKfM3OtC1F7tO33KebgruO2xFdOhaQxUKIltSOQ9h5TigLNkyq/OwHey4AwIM9F7BPxEPDgV11fla4UnELJYPHgEDSLI0MQiN/1lqrTKP01nYM93qCJnM06oJsXWluuFKxA5EjkSQWBpA6n7V7/ocAUAZNANC97udxZ7997bPgzkkAgLLSpnGlYghttENLSpNpGB1ZngWRdYWJB+3RKaJM8Yxj05lvhFTOnW7QvGCcjD32+DwXW9+5+Gf6AA+lb0i4UyygiIUxkhSLap8nU+joP9bh+eNm6PF2FbfLuELoemjWp2qVwers+vS06PJkSnI5dlDDUFqrdajk4zOL35TP1Ym8O/T40cylnao5Ht/wHcETelx0eeQGnd2y6mDJJ5JuFBPIY0MsdabUq9TcMSzI2PGKekl26PEm7eP+jb7/hkKPqwvnZex49Z/H5g8qZ8AKAepyD2kNvOFBV0n9SbR6WdrmIl1NA1/ZwK0385UNKEUGIgCAyuf96LfvAvZpP5YCQqWXfrJb4r3BAnoGL/Fyq2sO6/u6AcaLbE596N942t018Q76vvtrag5LvFUMiPJMaZ92tt2ycuLxLcbmLK+Q5RXWddVMPGu3rOzTzpZ0o5hAC0OJUzSVxdsBAPy5uCJ4caN6YF/zsXHGsrSRdqox29KYbYl5Bk9lCp8bygyUyqJZOqlcLH6YQrFQjkFpDKuXypKpXbVo6u4+FZDDEEc0GSCXpX9egl0PU57sROoUAEAquWyORmlMVxXOU1mzAv1HimJmPBYhPjc0mRFgDChpnhsCALS1NISzIYYhBswWQ4RA0yKKDyxmPqziSIA6RQM4JJ4TmMn0ZUSxEAAgBPj6mrei5lS8MpmVQmx9lgQoC3CnyYsZQpQn/xIbcgOfXAu7qdCWHCXXYjYKtPkslpSGQBnusHoVCnvDQgIkseRyeXys15g+FArSq70ksTguQ6tVA0C320MwSwDuu70AkDpLl8FlEMxIYhUU5FkW5wLAqdb26DoXb5xqaQOARWbzknwrwYwklslkfP+9tQCovL6x8sathKxf993eww1N+6/dxAAb1r9rND5BMCY1SQ5H9VlHtZ7j9h2oSOxUHgPatnmDk+eX216y2ZaFMyPVLJutWM9xTp4/UrHv+cJCf/vlz1IxAuyfGESAgi9TBRZVYhg76YFGD+ORAmONMRr5Cy3gf2aJ8MgqAowBYzzSQ49eG6OQxYk4cM5f3P+PAtk1QoBwYFSCAQMGjU5T9NyzRyoOOnlBz3EEpWAynZ3DUX31an1La1ttbR3v4kVxGELeNQuoMO5ieOLaLjz6NcYoFdhEYfI6POYj+BbE2Loe/MVQ0DHsH7CNbqKg435d5Qq5nuMKCqwmY47VmmezvUhVg8FgMBgMBoPBYDAYDAaDwWAwGIzJ8j850kDdpnhT1QAAAABJRU5ErkJggg=='
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

