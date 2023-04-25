import React from "react";

export default function Prices() {
  return (
    <section className="bg-light w-full">
      <div className=" flex flex-col items-center justify-center min-h-screen p-10 text-main  md:p-20">
        <h2 className="text-4xl font-medium">Pick Membership</h2>

        <div className="flex flex-wrap items-center justify-center w-full max-w-4xl mt-8">
          <div className="flex flex-col flex-grow mt-8 overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="flex flex-col items-center p-10 bg-lighter">
              <span className="font-semibold text-3xl">Bronze</span>
              <div className="flex items-center">
                <span className="text-3xl">$</span>
                <span className="text-5xl font-bold">20</span>
                <span className="text-2xl ">/mo</span>
              </div>
            </div>
            <div className="p-10">
              <ul>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2">Lightsaber</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2">Robe</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2">Insurance</span>
                </li>
              </ul>
            </div>
            <div className="flex px-10 pb-10 justfy-center">
              <button className="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-light hover:bg-lighter rounded-lg">
                Join now
              </button>
            </div>
          </div>

          <div className="z-10 flex flex-col flex-grow mt-8 overflow-hidden transform bg-white rounded-lg shadow-lg md:scale-110">
            <div className="flex flex-col items-center p-10 bg-lighter">
              <span className="font-semibold text-3xl">Gold</span>
              <div className="flex items-center">
                <span className="text-3xl">$</span>
                <span className="text-6xl font-bold">50</span>
                <span className="text-2xl">/mo</span>
              </div>
            </div>
            <div className="p-10">
              <ul>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 italic">Padawan +</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2">Solo missions</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2">Utility belt</span>
                </li>
              </ul>
            </div>
            <div className="flex px-10 pb-10 justfy-center">
              <button className="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-light hover:bg-lighter rounded-lg">
                Join now
              </button>
            </div>
          </div>

          <div className="flex flex-col flex-grow overflow-hidden bg-white rounded-lg shadow-lg mt-10">
            <div className="flex flex-col items-center p-10 bg-lighter">
              <span className="font-semibold text-3xl">Silver</span>
              <div className="flex items-center">
                <span className="text-3xl">$</span>
                <span className="text-5xl font-bold">99</span>
                <span className="text-2xl">/mo</span>
              </div>
            </div>
            <div className="p-10">
              <ul>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 italic">Jedi Knight +</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2">Sit on council</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2">Stock options</span>
                </li>
              </ul>
            </div>
            <div className="flex px-10 pb-10 justfy-center">
              <button className="flex items-center justify-center w-full h-12 px-6 text-sm uppercase rounded-lg bg-light hover:bg-lighter">
                Join now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
