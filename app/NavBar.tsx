import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6 border-b-4">
      <div className="flex items-center flex-shrink-0 text-gray-800 mr-6">
        <img src="/images/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
        <span className="font-semibold text-xl tracking-tight">
          The planner
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-800 border-gray-400 hover:text-blue-500 hover:border-white">
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
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <div data-testid="navbar-links">
            <Link href="/" prefetch>
              <span className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-blue-500 mr-4">
                Home
              </span>
            </Link>
            <Link href="/planner" prefetch>
              <span className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-blue-500 mr-4">
                Planner
              </span>
            </Link>
            <Link href="/about" prefetch>
              <span className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-blue-500 mr-4">
                About
              </span>
            </Link>
            <Link href="/contact" prefetch>
              <span className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-blue-500">
                Contact
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
