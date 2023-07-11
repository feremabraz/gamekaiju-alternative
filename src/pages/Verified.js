import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Verified() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <section className='py-26 md:py-48 min-h-screen md:min-h-0 bg-white'>
        <div className='container px-4 mx-auto'>
          <div className='max-w-xl mx-auto text-center'>
            <span className='inline-flex mb-6 h-6 items-center justify-center text-xs font-extrabold px-2 text-indigo-900 rounded border-2 border-indigo-900 bg-green-200 uppercase shadow-sm'>
              VERIFIED
            </span>
            <h1 className='text-3xl sm:text-4xl xl:text-5xl font-extrabold font-heading mb-3'>
              You're good to go
            </h1>
            <p className='text-xl font-extrabold leading-7 mb-6'>
              Your email has been verified.
            </p>
            <div className='flex flex-wrap items-center justify-center'>
              <a
                className='inline-block w-full md:w-auto py-4 px-6 mb-4 md:mb-0 md:mr-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200'
                href='assets.html'
              >
                Go to the Store
              </a>
              <a
                className='inline-block w-full md:w-auto py-4 px-6 text-center leading-6 text-lg text-indigo-900 hover:text-white font-extrabold bg-white hover:bg-indigo-800 border-3 border-indigo-900 shadow rounded transition duration-200'
                href='account.html'
              >
                Your Account
              </a>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

