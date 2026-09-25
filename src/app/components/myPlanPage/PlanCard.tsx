 
"use client";

import Image from "next/image";
import Link from "next/link";
import { WorkoutType } from "@/types";
import { FiClock, FiStar } from "react-icons/fi";
import { FaFire } from "react-icons/fa";
import HandleButton from "@/app/components/Button/handleRemove";

interface PlanCardProps {
  workout: WorkoutType;
  showDone: boolean;
}

const PlanCard = ({ workout, showDone }: PlanCardProps) => {
   
  return (
    <div className="flex flex-col gap-4 border-b border-gray-700 bg-[#11141a] p-3 sm:flex-row sm:items-center sm:p-4">

       
      <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-lg sm:h-20 sm:w-28">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>

       
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-base font-bold uppercase text-white">
          {workout.name}
        </h3>

        <p className="mt-1 text-xs text-gray-400">
          {workout.equipment}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-300">

          <span className="flex items-center gap-1">
            <FiClock className="text-lime-400" />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            <FaFire className="text-lime-400" />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <FiStar className="text-lime-400" />
            {workout.rating}
          </span>

        </div>
      </div>

      
      <div className="flex w-full shrink-0 items-center justify-between gap-2 sm:w-auto sm:justify-end">

        
        <Link
          href={`/workouts/${workout.id}`}
          className="rounded-full border border-gray-700 px-3 py-2 text-xs text-white transition hover:bg-gray-800 sm:px-4"
        >
          View Details
        </Link>
 
        <HandleButton
          workout={workout}
          showDone={showDone}
        />

      </div>
    </div>
  );
};

export default PlanCard;

