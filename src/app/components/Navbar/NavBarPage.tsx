 
"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { useContext } from "react";
import { WorkOutContext } from "@/app/Context/WorkOutContext";

export default function Navbar() {
  const context = useContext(WorkOutContext);

  if (!context) {
    throw new Error("Navbar must be used inside WorkoutProvider");
  }

  const { addToTodayPlan, saveForLater } = context;

  return (
    <nav className="mx-auto mt-1 flex min-h-[72px] w-full items-center justify-between gap-2 rounded-md border border-gray-400 bg-[#0b0c0f] px-3 text-white sm:px-5 md:px-6">

       
      <Link href="/" className="flex shrink-0 items-center gap-2 sm:gap-3">
        <Image
          src={logo}
          alt="FITLOG logo"
          className="h-9 w-9 sm:h-10 sm:w-10"
        />

        <span className="hidden text-lg font-bold tracking-wide sm:inline">
          FITLOG
        </span>
      </Link>

       
      <div className="flex items-center gap-1 sm:gap-2">
        <Link
          href="/workouts"
          className="rounded-full bg-lime-400 px-3 py-2 text-xs font-semibold text-black transition hover:bg-lime-300 sm:px-5 sm:text-sm"
        >
          Workouts
        </Link>

        <Link
          href="/my-plan"
          className="rounded-full px-3 py-2 text-xs text-gray-400 transition hover:text-white sm:px-5 sm:text-sm"
        >
          My Plan
        </Link>
      </div>

      
      <div className="flex shrink-0 items-center gap-2 sm:gap-4 md:gap-7">

         
        <Link
          href="/my-plan"
          className="flex items-center gap-1 text-gray-300 transition hover:text-white sm:gap-2"
        >
          <span className="hidden text-sm sm:inline">
            Plan
          </span>

          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lime-400 text-[10px] font-bold text-black sm:h-6 sm:w-6 sm:text-xs">
            {addToTodayPlan.length}
          </span>
        </Link>

         
        <Link
          href="/my-plan"
          className="flex items-center gap-1 text-gray-400 transition hover:text-white sm:gap-2"
        >
          <span className="hidden text-sm sm:inline">
            Saved
          </span>

          <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-600 text-[10px] sm:h-6 sm:w-6 sm:text-xs">
            {saveForLater.length}
          </span>
        </Link>

      </div>
    </nav>
  );
}

