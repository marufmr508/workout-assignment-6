 import React from "react";
import workoutData from "@/datas/data.json";
import { WorkoutType } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { FiCalendar, FiBookmark } from "react-icons/fi";
import AddToTodayPlanButton from "@/app/components/Button/addToTodayPlanButton";
import { SaveForLaterButton } from "@/app/components/Button/saveForLaterButton";
import WorkOutList from "@/app/components/workoutList/WorkOutList";
import data from "@/datas/data.json"

 const workouts=data as WorkoutType[]  ;

const DetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const workout = workouts.find(
    (item) => item.id.toString() === id
  );

  if (!workout) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0d0f13] px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-500">
            Workout Not Found
          </h1>

          <Link
            href="/workouts"
            className="inline-block mt-5 px-5 py-2 rounded-lg bg-lime-400 text-black font-semibold hover:bg-lime-300 transition"
          >
            Back to Workouts
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0d0f13] px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
      <div className="max-w-[1200px] mx-auto">

         
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6">

           
          <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[480px] rounded-xl overflow-hidden">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          
          <div className="text-white">

          
            <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
              {workout.name}
            </h1>

            
            <p className="mt-2 text-sm leading-5 text-gray-400 max-w-2xl">
              {workout.description}
            </p>

          
            <div className="flex flex-wrap gap-2 mt-4">
              {Array.isArray(workout.muscleGroups) ? (
                workout.muscleGroups.map((muscle, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-lime-400 text-black text-xs font-bold"
                  >
                    {muscle}
                  </span>
                ))
              ) : (
                <span className="px-3 py-1 rounded-full bg-lime-400 text-black text-xs font-bold">
                  {workout.muscleGroups}
                </span>
              )}
            </div>

            
            <div className="mt-5 rounded-xl border border-gray-800 bg-[#15181e] overflow-hidden">

              
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Equipment
                </span>

                <span className="text-xs text-gray-200 text-right">
                  {Array.isArray(workout.equipment)
                    ? workout.equipment.join(", ")
                    : workout.equipment}
                </span>
              </div>

              
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Difficulty
                </span>

                <span className="text-xs text-gray-200">
                  {workout.difficulty}
                </span>
              </div>

              
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Sets
                </span>

                <span className="text-xs text-gray-200">
                  {workout.sets}
                </span>
              </div>

               
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Reps
                </span>

                <span className="text-xs text-gray-200">
                  {workout.reps}
                </span>
              </div>

               
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Duration
                </span>

                <span className="text-xs text-gray-200">
                  {workout.duration} min
                </span>
              </div>

              
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Calories
                </span>

                <span className="text-xs text-gray-200">
                  {workout.caloriesBurned} kcal
                </span>
              </div>

              
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Rating
                </span>

                <span className="text-xs text-gray-200">
                  {workout.rating}
                </span>
              </div>

            </div>

            
            <div className="mt-5">
              <h2 className="text-xs font-bold uppercase tracking-wide text-white mb-3">
                Instructions
              </h2>

              <ol className="space-y-3 text-xs leading-5 text-gray-400 list-decimal pl-5">
                {workout.instructions.map(
                  (instruction, index) => (
                    <li key={index}>
                      {instruction}
                    </li>
                  )
                )}
              </ol>
            </div>

             
  
<div className="flex flex-col sm:flex-row gap-3 mt-6">

  <AddToTodayPlanButton workout={workout} />

  <SaveForLaterButton workout={workout} />

</div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailsPage;