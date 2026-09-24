 "use client";

import Image from "next/image";
import Link from "next/link";
import { WorkoutType } from "@/types";
import { FiClock, FiStar, FiX } from "react-icons/fi";
import { FaFire } from "react-icons/fa";
import  HandleRemove from "@/app/components/Button/handleRemove"
import HandleButton from "@/app/components/Button/handleRemove";
interface PlanCardProps {
  workout: WorkoutType;
  showDone:boolean
}

const PlanCard = ({ workout,showDone }: PlanCardProps) => {
  
  return (
    <div className="flex items-center gap-4 border-b border-gray-700 bg-[#11141a] p-3">

      {/* Image */}
      <div className="relative h-18 w-28 shrink-0 overflow-hidden rounded-lg">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Workout Information */}
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-base font-bold uppercase text-white">
          {workout.name}
        </h3>

        <p className="text-xs text-gray-400">
          {workout. equipment}
        </p>

        <div className="mt-2 flex items-center gap-4 text-xs text-gray-300">

          <span className="flex items-center gap-1">
            <FiClock className="text-lime-400" />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            <FaFire className="text-lime-400" />
            {workout. caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <FiStar className="text-lime-400" />
            {workout.rating}
          </span>

        </div>
      </div>

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-3">

        {/* LINKABLE BUTTON */}
        <Link
          href={`/workouts/${workout.id}`}
          className="rounded-full border border-gray-700 px-4 py-2 text-xs text-white transition hover:bg-gray-800"
        >
          View Details
        </Link>
     
      <HandleButton workout={workout}  showDone={showDone} />
       
     

      </div>
    </div>
  );
};

export default PlanCard;