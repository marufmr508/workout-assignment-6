 "use client";

import { WorkOutContext } from "@/app/Context/WorkOutContext";
import React, { useContext, useState } from "react";
import PlanCard from "./PlanCard";
import Link from "next/link";

export const PlanList = () => {
  const context = useContext(WorkOutContext);

  if (!context) {
    throw new Error("PlanList must be used inside WorkoutProvider");
  }

  const { addToTodayPlan, saveForLater } = context;

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
  const [sortBy, setSortBy] = useState("duration");

  const activeWorkouts =
    activeTab === "today" ? addToTodayPlan : saveForLater;

  const sortedTodayPlan = [...addToTodayPlan].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sortBy === "rating") {
      return a.rating - b.rating;
    }

    return 0;
  });

  const sortedSaved = [...saveForLater].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sortBy === "rating") {
      return a.rating - b.rating;
    }

    return 0;
  });

  return (
    <section className="w-full px-3 sm:px-5 lg:px-8">
       
      <div className="mt-8 sm:mt-10">
        <h1 className="text-2xl font-bold sm:text-3xl">
          MY PLAN
        </h1>

        <p className="mt-1 max-w-2xl text-sm text-gray-400 sm:text-base">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      
      <div className="mx-auto mt-5 grid w-full grid-cols-1 gap-3 rounded-2xl border border-white/10 bg-[#15181d] p-3 shadow-xl sm:grid-cols-3 sm:gap-4 sm:p-4">

         
        <div className="rounded-xl border border-white/5 bg-[#1c2026] p-4 text-center transition hover:-translate-y-1 hover:border-lime-400/30 sm:p-5">
          <p className="text-xs font-medium text-gray-400 sm:text-sm">
            Exercise
          </p>

          <p className="mt-1 text-2xl font-bold text-white sm:mt-2 sm:text-3xl">
            {activeWorkouts.length}
          </p>

          <p className="mt-1 text-[11px] text-gray-500 sm:text-xs">
            workouts
          </p>
        </div>

       
        <div className="rounded-xl border border-white/5 bg-[#1c2026] p-4 text-center transition hover:-translate-y-1 hover:border-lime-400/30 sm:p-5">
          <p className="text-xs font-medium text-gray-400 sm:text-sm">
            Minutes
          </p>

          <p className="mt-1 text-2xl font-bold text-white sm:mt-2 sm:text-3xl">
            {activeWorkouts.reduce(
              (total, workout) => total + workout.duration,
              0
            )}
          </p>

          <p className="mt-1 text-[11px] text-gray-500 sm:text-xs">
            total duration
          </p>
        </div>

       
        <div className="rounded-xl border border-white/5 bg-[#1c2026] p-4 text-center transition hover:-translate-y-1 hover:border-lime-400/30 sm:p-5">
          <p className="text-xs font-medium text-gray-400 sm:text-sm">
            Calories
          </p>

          <p className="mt-1 text-2xl font-bold text-lime-400 sm:mt-2 sm:text-3xl">
            {activeWorkouts.reduce(
              (total, workout) => total + workout.caloriesBurned,
              0
            )}
          </p>

          <p className="mt-1 text-[11px] text-gray-500 sm:text-xs">
            kcal burned
          </p>
        </div>
      </div>

      
      <div className="mt-4 flex w-full items-center justify-between gap-3 sm:justify-end">
        <p className="text-xs text-gray-500 sm:hidden">
          Organize workouts
        </p>

        <div className="flex items-center gap-2">
          <label
            htmlFor="sort"
            className="hidden text-sm font-medium text-gray-400 sm:block"
          >
            Sort By
          </label>

          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-[140px] rounded-lg border border-white/10 bg-[#15181d] px-3 py-2 text-xs text-white outline-none transition focus:border-lime-400 sm:w-auto sm:px-4 sm:text-sm"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

       
      <div className="tabs tabs-lift mt-3 w-full">

      
        <input
          type="radio"
          name="my_tabs"
          className="tab min-w-0 flex-1 text-xs sm:text-sm"
          aria-label="Today's Plan"
          defaultChecked
          onChange={() => setActiveTab("today")}
        />

        <div className="tab-content w-full overflow-hidden border-base-300 bg-base-100 p-3 sm:p-5 md:p-6">

          {addToTodayPlan.length === 0 ? (
            <div className="flex flex-col items-center justify-center px-3 py-12 text-center sm:py-16">

              <h1 className="text-xl font-bold text-white sm:text-2xl">
                Your plan is empty
              </h1>

              <p className="mt-2 max-w-md text-sm text-gray-400">
                You have not added any workouts to today plan yet.
              </p>

              <Link
                href="/workouts"
                className="mt-5 rounded-lg bg-lime-400 px-5 py-2.5 text-sm font-bold text-black transition hover:bg-lime-300 sm:mt-6 sm:px-6 sm:py-3"
              >
                Browse Workouts
              </Link>

            </div>
          ) : (
            <div className="flex w-full flex-col gap-3 sm:gap-4">
              {sortedTodayPlan.map((workout) => (
                <PlanCard
                  key={workout.id}
                  workout={workout}
                  showDone={true}
                />
              ))}
            </div>
          )}

        </div>

        
        <input
          type="radio"
          name="my_tabs"
          className="tab min-w-0 flex-1 text-xs sm:text-sm"
          aria-label="Saved"
          onChange={() => setActiveTab("saved")}
        />

        <div className="tab-content w-full overflow-hidden border-base-300 bg-base-100 p-3 sm:p-5 md:p-6">

          {saveForLater.length === 0 ? (
            <div className="flex flex-col items-center justify-center px-3 py-12 text-center sm:py-16">

              <h1 className="text-xl font-bold text-white sm:text-2xl">
                No saved workouts
              </h1>

              <p className="mt-2 max-w-md text-sm text-gray-400">
                You have not saved any workouts for later yet.
              </p>

              <Link
                href="/workouts"
                className="mt-5 rounded-lg bg-lime-400 px-5 py-2.5 text-sm font-bold text-black transition hover:bg-lime-300 sm:mt-6 sm:px-6 sm:py-3"
              >
                Browse Workouts
              </Link>

            </div>
          ) : (
            <div className="flex w-full flex-col gap-3 sm:gap-4">
              {sortedSaved.map((workout) => (
                <PlanCard
                  key={workout.id}
                  workout={workout}
                  showDone={false}
                />
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default PlanList;