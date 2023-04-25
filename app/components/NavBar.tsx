"use client";
import Link from "next/link";
import { useState } from "react";
const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <header className="mx-auto only:sticky top-0  z-10 p-5 flex items-center justify-between flex-wrap border-b-2 border-gray-500 bg-white">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <img src="/images/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          <span className="font-light text-xl tracking-tight">THE PLANNER</span>
        </div>
        <div className="block md:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded border-gray-500 hover:text-gray-500 hover:border-white"
            onClick={() => setToggle(!toggle)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <nav
          className={` w-full ${
            toggle ? "sm:flex" : "hidden md:flex"
          } flex-grow md:items-center md:w-auto`}
        >
          <div className="text-sm md:flex-grow">
            <div data-testid="navbar-links">
              <Link href="/">
                <span className="block mt-4 md:inline-block md:mt-0 mr-4">
                  Home
                </span>
              </Link>
              <Link href="/planner">
                <span className="block mt-4 md:inline-block md:mt-0 mr-4">
                  Planner
                </span>
              </Link>
              <Link href="/about">
                <span className="block mt-4 md:inline-block md:mt-0 mr-4">
                  About
                </span>
              </Link>
              <Link href="/contact">
                <span className="block mt-4 md:inline-block md:mt-0 ">
                  Contact
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
