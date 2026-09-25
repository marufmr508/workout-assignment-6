 "use client";

import { useContext, useState } from "react";
import { FiX } from "react-icons/fi";
import { WorkOutContext } from "@/app/Context/WorkOutContext";
import { WorkoutType } from "@/types";
import { toast } from "react-toastify";

const HandleButton = ({
  workout,
  showDone,
}: {
  workout: WorkoutType;
  showDone: boolean;
}) => {
  const context = useContext(WorkOutContext);

  if (!context) {
    throw new Error("HandleButton must be used inside WorkoutProvider");
  }

  const { handleRemoveToday, handleRemoveSaved } = context;

  const [isDone, setIsDone] = useState(false);

  
  const handleDone = () => {
    setIsDone(true);
    toast.success("Workout marked as done!");
  };

   
  const handleRemove = () => {
    if (showDone) {
      handleRemoveToday(workout.id);
      toast.success("Remove from Today's Plan")
    }
   
     else {
      handleRemoveSaved(workout.id);
       toast.success("Remove from saved")
    }
    
  };
   

  return (
    <div className="flex items-center gap-3">
      
      {showDone && (
        <button
          type="button"
          onClick={handleDone}
          disabled={isDone}
          className={`rounded-full px-5 py-2 text-xs font-semibold transition ${
            isDone
              ? "cursor-not-allowed bg-gray-600 text-gray-300"
              : "bg-lime-400 text-black hover:bg-lime-300"
          }`}
        >
          {isDone ? "✓ Completed" : "✓ Mark as Done"}
        </button>
      )}

     
      <button
        type="button"
        onClick={handleRemove}
        className="rounded-full p-2 text-gray-500 transition hover:bg-red-500/10 hover:text-red-400"
        aria-label="Remove workout"
      >
        <FiX size={18} />
      </button>
    </div>
  );
};

export default HandleButton;