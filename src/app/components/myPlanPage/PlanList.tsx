 
"use client";

import { WorkOutContext } from "@/app/Context/WorkOutContext";
import React, { useContext } from "react";
import PlanCard from "./PlanCard";
import Link from "next/link";
import WorkOutList from "../workoutList/WorkOutList";

export const PlanList = () => {
  const context = useContext(WorkOutContext);

  if (!context) {
    throw new Error("PlanList must be used inside WorkoutProvider");
  }

  const { addToTodayPlan, saveForLater } = context;

  return (
    <section className="w-full">

      {/* <div className="bg-amber-900 w-full flex justify-evenly mx-auto  ">
         <div>
<p>Excercise:</p>
<div>

  {addToTodayPlan.length === 0 ? (
    <p>0</p>
  ): (
     addToTodayPlan.length
  )}

</div>
         </div>
         <div>
<p>Minutes:</p>
<div>

  {addToTodayPlan.length === 0 ? (
    <p>0</p>
  ): (
    <p>
      {  addToTodayPlan.reduce((total, workout) => total+ workout.duration,0)}
      </p>
  )}

</div>
         </div>
         <div>
<p>Calories:</p>
<div>

  {addToTodayPlan.length === 0 ? (
    <p>0</p>
  ): (
    <p>
      {  addToTodayPlan.reduce((total, workout) => total+ workout.caloriesBurned,0)}
      </p>
  )}

</div>
         </div>
      </div> */}
    
<div className="mx-auto grid w-full grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-[#15181d] p-4 shadow-xl sm:grid-cols-3">

  
  <div className="rounded-xl border border-white/5 bg-[#1c2026] p-5 text-center transition hover:-translate-y-1 hover:border-lime-400/30">
    <p className="text-sm font-medium text-gray-400">
      Exercise
    </p>

    <p className="mt-2 text-3xl font-bold text-white">
      {addToTodayPlan.length}
    </p>

    <p className="mt-1 text-xs text-gray-500">
      workouts
    </p>
  </div>


  
  <div className="rounded-xl border border-white/5 bg-[#1c2026] p-5 text-center transition hover:-translate-y-1 hover:border-lime-400/30">
    <p className="text-sm font-medium text-gray-400">
      Minutes
    </p>

    <p className="mt-2 text-3xl font-bold text-white">
      {addToTodayPlan.reduce(
        (total, workout) => total + workout.duration,
        0
      )}
    </p>

    <p className="mt-1 text-xs text-gray-500">
      total duration
    </p>
  </div>


   
  <div className="rounded-xl border border-white/5 bg-[#1c2026] p-5 text-center transition hover:-translate-y-1 hover:border-lime-400/30">
    <p className="text-sm font-medium text-gray-400">
      Calories
    </p>

    <p className="mt-2 text-3xl font-bold text-lime-400">
      {addToTodayPlan.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
      )}
    </p>

    <p className="mt-1 text-xs text-gray-500">
      kcal burned
    </p>
  </div>

</div>



      <div className="tabs tabs-lift">

          <input
  type="radio"
  name="my_tabs"
  className="tab"
  aria-label="Today's Plan"
  defaultChecked
/>

        <div className="tab-content bg-base-100 border-base-300 p-6">

          {addToTodayPlan.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">

              <h1 className="text-2xl font-bold text-white">
                Your plan is empty
              </h1>

              <p className="mt-2 text-gray-400">
                You have not added any workouts to today plan yet.
              </p>

              <Link
                href="/workouts"
                className="mt-6 rounded-lg bg-lime-400 px-6 py-3 text-sm font-bold text-black transition hover:bg-lime-300"
              >
                Browse Workouts
              </Link>

            </div>
          ) : (
            <div>
              {addToTodayPlan.map((workout) => (
                <PlanCard
                  key={workout.id}
                  workout={workout} showDone={true}
                />
              ))}
            </div>
          )}

        </div>

        {/* SAVED TAB */}
            <input
  type="radio"
  name="my_tabs"
  className="tab"
  aria-label="Saved"
/>

        <div className="tab-content bg-base-100 border-base-300 p-6">

          {saveForLater.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">

              <h1 className="text-2xl font-bold text-white">
                No saved workouts
              </h1>

              <p className="mt-2 text-gray-400">
                You have not saved any workouts for later yet.
              </p>

              <Link
                href="/workouts"
                className="mt-6 rounded-lg bg-lime-400 px-6 py-3 text-sm font-bold text-black transition hover:bg-lime-300"
              >
                Browse Workouts
              </Link>

            </div>
          ) : (
            <div>
              {saveForLater.map((workout) => (
                <PlanCard
                  key={workout.id}
                  workout={workout}  showDone={false} /> 
                
              ))}
            </div>
          )}

        </div>

      </div>

    </section>
  );
};

export default PlanList;

