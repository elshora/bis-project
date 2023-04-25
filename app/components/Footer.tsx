import React from "react";

export default function Footer() {
  return (
    <div className=" bg-lighter">
      <footer className=" mx-auto container p-4 md:px-0  md:py-8 ">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            target="_blank"
            className="flex items-center mb-4 sm:mb-0"
          >
            <img
              src="./images/logo.png"
              className="mr-4 h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-main">
              The Planner
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 sm:mb-0">
            <li>
              <a
                href="#"
                className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
              >
                Licensing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-500 hover:underline dark:text-gray-400"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block  font-semibold text-2l text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()} The Planner . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
}
