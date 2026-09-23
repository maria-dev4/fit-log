import React from 'react';

const Navbar = () => {
    return (
      <div className="navbar bg-[#020B1C] px-4 md:px-8 lg:px-12 border-b border-[#123B70]">

            <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-[#071A36] text-white rounded-box z-10 mt-3 w-52 p-2 shadow-xl border border-[#123B70]"
            >
              <li>
                <a>Workouts</a>
              </li>
              <li>
                <a>My Plan</a>
              </li>
            </ul>
          </div>

          <a className="flex items-center gap-2 text-xl font-bold text-white">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-9 h-9 object-contain"
            />
            <span>FITLOG</span>
          </a>
        </div>


        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2">
            <li>
              <a className="text-gray-300 hover:text-white hover:bg-[#0D2850]">
                Workouts
              </a>
            </li>

            <li>
              <a className="text-gray-300 hover:text-white hover:bg-[#0D2850]">
                My Plan
              </a>
            </li>
          </ul>
        </div>


        <div className="navbar-end gap-2">
          <button className="btn btn-ghost text-white border border-[#3299FF] hover:bg-[#1687FF] hover:border-[#1687FF]">
            Plan
          </button>

          <button className="btn bg-[#1687FF] text-white border-none hover:bg-[#3299FF] rounded-full px-5">
            Saved
          </button>
        </div>
      </div>
    );
};

export default Navbar;