
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

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
              <Link
                href="/workouts"
                className={
                  pathname === "/workouts"
                    ? "bg-yellow-400/10 border border-yellow-400/40 text-yellow-400"
                    : "text-gray-300"
                }
              >
                Workouts
              </Link>
            </li>

            <li>
              <Link
                href="/my-plan"
                className={
                  pathname === "/my-plan"
                    ? "bg-yellow-400/10 border border-yellow-400/40 text-yellow-400"
                    : "text-gray-300"
                }
              >
                My Plan
              </Link>
            </li>
          </ul>
        </div>


        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-white"
        >
          <Image
            src="/logo.png"
            alt="FITLOG Logo"
            width={36}
            height={36}
            className="object-contain"
          />

          <span>FITLOG</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">

          <li>
            <Link
              href="/workouts"
              className={`rounded-lg px-4 py-2 transition ${
                pathname === "/workouts"
                  ? "border border-yellow-400/40 bg-yellow-400/10 text-yellow-400"
                  : "text-gray-300 hover:text-yellow-400"
              }`}
            >
              Workouts
            </Link>
          </li>

          <li>
            <Link
              href="/my-plan"
              className={`rounded-lg px-4 py-2 transition ${
                pathname === "/my-plan"
                  ? "border border-yellow-400/40 bg-yellow-400/10 text-yellow-400"
                  : "text-gray-300 hover:text-yellow-400"
              }`}
            >
              My Plan
            </Link>
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