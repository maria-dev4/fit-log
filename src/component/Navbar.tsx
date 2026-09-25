"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePlan } from "../context/PlanContext";

const Navbar = () => {
  const pathname = usePathname();
  const { plan, saved } = usePlan();

  return (
    <div className="navbar bg-[#020B1C] border-b border-[#123B70] px-4">
      <div className="navbar-start mx-auto w-full max-w-5xl">
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
            className="menu menu-sm dropdown-content z-10 mt-3 w-52 rounded-xl border border-[#123B70] bg-[#071A36] p-2 text-white shadow-xl"
          >
            <li>
              <Link
                href="/"
                className={
                  pathname === "/"
                    ? "bg-[#1687FF]/10 text-[#4AA8FF]"
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
                    ? "bg-[#1687FF]/10 text-[#4AA8FF]"
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
          className="flex items-center gap-2 text-xl font-bold tracking-wide text-white"
        >
          <Image
            src="/logo_blue.png"
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
              href="/"
              className={`rounded-lg px-4 py-2 transition ${
                pathname === "/"
                  ? "border border-[#1687FF]/40 bg-[#1687FF]/10 text-[#4AA8FF]"
                  : "text-gray-300 hover:text-[#4AA8FF]"
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
                  ? "border border-[#1687FF]/40 bg-[#1687FF]/10 text-[#4AA8FF]"
                  : "text-gray-300 hover:text-[#4AA8FF]"
              }`}
            >
              My Plan
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end mx-auto w-full max-w-5xl gap-2">
        <Link
          href="/my-plan"
          className="flex items-center gap-2 rounded-full bg-[#1687FF] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#3299FF]"
        >
          <span>Plan</span>
          <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-white/15 px-1.5 text-xs font-bold text-white">
            {plan.length}
          </span>
        </Link>

        <Link
          href="/my-plan"
          className="flex items-center gap-2 rounded-full border border-[#3299FF] bg-transparent px-4 py-2 text-sm font-semibold text-white transition hover:border-[#4AA8FF] hover:bg-[#071A36]"
        >
          <span>Saved</span>
          <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-[#3299FF] px-1.5 text-xs font-bold text-[#4AA8FF]">
            {saved.length}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
