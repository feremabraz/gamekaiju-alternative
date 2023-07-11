import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Account() {
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
        <section className='bg-orange-200 pt-16 pb-8'>
          <div className='container px-4 mx-auto'>
            <div className='flex flex-wrap -mx-4 items-center mb-8'>
              <div className='w-full lg:w-1/2 px-4 mb-8 lg:mb-0'>
                <div className='max-w-xl'>
                  <span className='text-lg font-extrabold text-orange-500'>
                    Content Request
                  </span>
                  <h1 className='text-3xl md:text-4xl font-extrabold font-heading mt-3 mb-3'>
                    Let’s grow together
                  </h1>
                  <p className='text-xl font-extrabold leading-8'>
                    You can ask me to make an asset following one of the styles
                    already published. It can be anything. I strive to fulfill
                    as many requests as I can.
                  </p>
                </div>
              </div>
              <div className='w-full lg:w-1/2 px-4'>
                <div className='flex flex-wrap items-center lg:justify-end'>
                  <a
                    className='inline-block w-full md:w-auto mb-2 md:mb-0 md:mr-4 py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200'
                    href='#'
                  >
                    I want an asset
                  </a>
                  <a
                    className='inline-block w-full md:w-auto py-4 px-6 text-center leading-6 text-lg text-indigo-900 hover:text-white font-extrabold bg-white hover:bg-indigo-800 border-3 border-indigo-900 shadow rounded transition duration-200'
                    href='#'
                  >
                    I need something else
                  </a>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap -mx-4 mb-16 items-center'>
              <div className='w-full lg:w-1/2 px-4 mb-16 lg:mb-0'>
                <div className='flex flex-wrap -mx-4'>
                  <div className='w-full sm:w-1/2 px-4 mb-12 pl-12'>
                    <div className='inline-flex mb-8 w-20 h-20 items-center justify-center bg-white text-indigo-900 border-3 border-indigo-900 rounded-full shadow-md'>
                      <svg
                        width={32}
                        height={32}
                        viewBox='0 0 32 32'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-12 h-12'
                      >
                        <path
                          d='M26.9467 11.76L18.6667 3.7067C17.9653 3.03984 17.0345 2.66797 16.0667 2.66797C15.0989 2.66797 14.1681 3.03984 13.4667 3.7067L5.18667 11.7067C4.81877 12.0279 4.52289 12.4231 4.31839 12.8666C4.11389 13.31 4.00539 13.7917 4 14.28V25.72C4.01405 26.6902 4.41206 27.6152 5.10682 28.2925C5.80159 28.9698 6.73647 29.3441 7.70667 29.3334H24.2933C25.2635 29.3441 26.1984 28.9698 26.8932 28.2925C27.5879 27.6152 27.9859 26.6902 28 25.72V14.28C27.999 13.8113 27.9054 13.3474 27.7246 12.915C27.5439 12.4826 27.2795 12.0901 26.9467 11.76ZM15.2533 5.6267C15.4573 5.44025 15.7237 5.33686 16 5.33686C16.2763 5.33686 16.5427 5.44025 16.7467 5.6267L24 12.6667L16.7067 19.7067C16.5027 19.8932 16.2363 19.9965 15.96 19.9965C15.6837 19.9965 15.4173 19.8932 15.2133 19.7067L8 12.6667L15.2533 5.6267ZM25.3333 25.72C25.3162 25.9817 25.1982 26.2266 25.0043 26.4031C24.8103 26.5797 24.5555 26.6742 24.2933 26.6667H7.70667C7.44451 26.6742 7.18966 26.5797 6.99571 26.4031C6.80176 26.2266 6.68382 25.9817 6.66667 25.72V15.1334L12.0667 20.3334L9.85333 22.4667C9.605 22.7165 9.46561 23.0545 9.46561 23.4067C9.46561 23.7589 9.605 24.0969 9.85333 24.3467C9.97726 24.4767 10.1262 24.5803 10.2911 24.6514C10.4561 24.7224 10.6337 24.7593 10.8133 24.76C11.1566 24.7587 11.4862 24.6249 11.7333 24.3867L14.0933 22.12C14.6795 22.4782 15.3531 22.6677 16.04 22.6677C16.7269 22.6677 17.4005 22.4782 17.9867 22.12L20.3467 24.3867C20.5938 24.6249 20.9234 24.7587 21.2667 24.76C21.4463 24.7593 21.6239 24.7224 21.7889 24.6514C21.9538 24.5803 22.1027 24.4767 22.2267 24.3467C22.475 24.0969 22.6144 23.7589 22.6144 23.4067C22.6144 23.0545 22.475 22.7165 22.2267 22.4667L20 20.3334L25.3333 15.1334V25.72Z'
                          fill='currentColor'
                        />
                      </svg>
                    </div>
                    <h3 className='text-2xl font-extrabold mb-3'>Email</h3>
                    <p className='text-xl sm:text-2xl font-bold text-orange-400'>
                      fb@gamekaiju.monster
                    </p>
                  </div>
                  <div className='w-full sm:w-1/2 px-4 mb-12'></div>
                  <div className='w-full sm:w-1/2 px-4 mb-12 sm:mb-0 pl-12'>
                    <div className='inline-flex mb-8 w-20 h-20 items-center justify-center bg-white text-indigo-900 border-3 border-indigo-900 rounded-full shadow-md'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width={16}
                        height={16}
                        fill='currentColor'
                        className='w-9 h-9'
                        viewBox='0 0 16 16'
                      >
                        <path d='M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z' />
                      </svg>
                    </div>
                    <h3 className='text-2xl font-extrabold mb-3'>Discord</h3>
                    <p className='text-xl sm:text-2xl font-bold text-orange-400 w-96'>
                      https://discord.gg/2PRCRfkne3
                    </p>
                  </div>
                  <div className='w-full sm:w-1/2 px-4'></div>
                </div>
              </div>
              <div className='w-full lg:w-1/2 px-4'>
                <div className='px-6 py-12 md:px-12 bg-white border-3 border-indigo-900 rounded-2xl shadow-md text-center'>
                  <form className='text-left' action=''>
                    <div className='mb-8'>
                      <label className='block mb-2 font-extrabold' htmlFor=''>
                        Asset Request
                      </label>
                      <textarea
                        className='w-full p-4 text-lg font-extrabold placeholder-indigo-900 shadow border-2 border-indigo-900 rounded resize-none'
                        name=''
                        id=''
                        cols={30}
                        rows={10}
                        placeholder='Your message...'
                        defaultValue={''}
                      />
                    </div>
                    <button className='inline-block w-full py-4 px-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200'>
                      Post
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-white py-16'>
          <div className='container px-4 mx-auto'>
            <div className='flex flex-wrap -mx-4 items-center'>
              <div className='w-full lg:w-3/5 px-4 mb-8 lg:mb-0'>
                <span className='text-lg font-extrabold text-indigo-500'>
                  Assistance Request
                </span>
                <h1 className='text-3xl md:text-4xl font-extrabold font-heading mt-4 mb-4'>
                  Do you prefer to chat here?
                </h1>
                <p className='text-xl font-extrabold leading-8'>
                  You can always use the live chat option. If I'm not around,
                  just leave your message. I usually answer in 2 hours (GMT +1).
                  Keep in mind I work at night.
                </p>
              </div>
              <div className='w-full lg:w-2/5 px-4'>
                <div className='flex flex-wrap items-center lg:justify-end'>
                  <a
                    className='inline-block w-full xl:w-auto py-4 px-6 text-center leading-6 text-lg text-indigo-900 hover:text-white font-extrabold bg-white hover:bg-indigo-800 border-3 border-indigo-900 shadow rounded transition duration-200'
                    href='#'
                  >
                    Open a Chat Session
                  </a>
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
                                xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAABmJLR0QA/wD/AP+gvaeTAAAGwUlEQVR4nO2bbUxTVxjHn9MX+oYo3NqNgCvNpsuspFJwbMwlslW2uM25LGSJJs7M6Zxv2Yft07Iti47FuJg58WVDXFz0y7LFRLPNahETcZrJJGgQER0gCBN6e1GgLSuXsw+FtkB6DtcWWtrzCzT35Tn3Pv33POc859xzARgMBoPBYDAYDAaDwWAwGAwGg8GYNIhqYbdX1dXVt7bdrf27zuUSRFGcBremB7lcznEZBfl5JpPRmmex2YrJ9jLy6a937XVUnc/LswhCb3//QCIpBQCiKPb19ff29lrzLGcd1bt37yXbk2qW3V7lqDqfwekPHfohqk7GI1s3b3Ty/HJbMaF+KQjl6+rqbS8v27hpu0Im22ZZ+HpOtkGrmQI/Y0m323Oqpb38WmP5ge8rK/ZfrasnGMsJ556a/8ylS3913Ovcblm43rxAp1RG29XYo1MqrQZOKZdd/renx+kcHBy8cuVyOGOSWEimau+45/MNlRUV6JSkOjjTmZeqO9p4W+gVepx8Z0drODOSBLzLJYoiAJqrUUffwXjC/wUH+t1e7yDBjNQb+pWKsl/xjThE6u5JYuEkU4oKJc9KPr0w4RxFLHLhhIPyZcliYYSSSixKGJHEQpBkFQuArBc1DFmbFYQqVlKByZHEGvgQMCWMiIMYDIAAA+QePxFNn6aYHCNX/ftWACheUd7axpMNAMC/DcdPIASYWDdIWhpzzAgAI2hp+OLRfZ8hmMxf+sOoreVGOBtaUoqSqoGPIHUABADDUfQlzkGBjzCQx4aUwgkGtS+jJKVRDENh5znhq3PRulpMoNQsGbl7kHgrJIvzehpB6oAADwOgCCJx4Jfr7rO3FE+kD90VtCULAEPPB78GdnVv5z7ylaeGiAbSEGEUuh3NaVuKfM3OtC1F7tO33KebgruO2xFdOhaQxUKIltSOQ9h5TigLNkyq/OwHey4AwIM9F7BPxEPDgV11fla4UnELJYPHgEDSLI0MQiN/1lqrTKP01nYM93qCJnM06oJsXWluuFKxA5EjkSQWBpA6n7V7/ocAUAZNANC97udxZ7997bPgzkkAgLLSpnGlYghttENLSpNpGB1ZngWRdYWJB+3RKaJM8Yxj05lvhFTOnW7QvGCcjD32+DwXW9+5+Gf6AA+lb0i4UyygiIUxkhSLap8nU+joP9bh+eNm6PF2FbfLuELoemjWp2qVwers+vS06PJkSnI5dlDDUFqrdajk4zOL35TP1Ym8O/T40cylnao5Ht/wHcETelx0eeQGnd2y6mDJJ5JuFBPIY0MsdabUq9TcMSzI2PGKekl26PEm7eP+jb7/hkKPqwvnZex49Z/H5g8qZ8AKAepyD2kNvOFBV0n9SbR6WdrmIl1NA1/ZwK0385UNKEUGIgCAyuf96LfvAvZpP5YCQqWXfrJb4r3BAnoGL/Fyq2sO6/u6AcaLbE596N942t018Q76vvtrag5LvFUMiPJMaZ92tt2ycuLxLcbmLK+Q5RXWddVMPGu3rOzTzpZ0o5hAC0OJUzSVxdsBAPy5uCJ4caN6YF/zsXHGsrSRdqox29KYbYl5Bk9lCp8bygyUyqJZOqlcLH6YQrFQjkFpDKuXypKpXbVo6u4+FZDDEEc0GSCXpX9egl0PU57sROoUAEAquWyORmlMVxXOU1mzAv1HimJmPBYhPjc0mRFgDChpnhsCALS1NISzIYYhBswWQ4RA0yKKDyxmPqziSIA6RQM4JJ4TmMn0ZUSxEAAgBPj6mrei5lS8MpmVQmx9lgQoC3CnyYsZQpQn/xIbcgOfXAu7qdCWHCXXYjYKtPkslpSGQBnusHoVCnvDQgIkseRyeXys15g+FArSq70ksTguQ6tVA0C320MwSwDuu70AkDpLl8FlEMxIYhUU5FkW5wLAqdb26DoXb5xqaQOARWbzknwrwYwklslkfP+9tQCovL6x8sathKxf993eww1N+6/dxAAb1r9rND5BMCY1SQ5H9VlHtZ7j9h2oSOxUHgPatnmDk+eX216y2ZaFMyPVLJutWM9xTp4/UrHv+cJCf/vlz1IxAuyfGESAgi9TBRZVYhg76YFGD+ORAmONMRr5Cy3gf2aJ8MgqAowBYzzSQ49eG6OQxYk4cM5f3P+PAtk1QoBwYFSCAQMGjU5T9NyzRyoOOnlBz3EEpWAynZ3DUX31an1La1ttbR3v4kVxGELeNQuoMO5ieOLaLjz6NcYoFdhEYfI6POYj+BbE2Loe/MVQ0DHsH7CNbqKg435d5Qq5nuMKCqwmY47VmmezvUhVg8FgMBgMBoPBYDAYDAaDwWAwGIzJ8j850kDdpnhT1QAAAABJRU5ErkJggg=='
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

