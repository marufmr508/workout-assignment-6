 "use client";

import { WorkOutContext } from "@/app/Context/WorkOutContext";
import { WorkoutType } from "@/types";
import { useContext } from "react";
import { FiCalendar } from "react-icons/fi";
import { toast } from "react-toastify";

export const AddToTodayPlanButton = ({
workout,
}: {
workout: WorkoutType;
}) => {
const context = useContext(WorkOutContext);

if (!context) {
throw new Error(
"AddToTodayPlanButton must be used inside WorkoutProvider"
);
}

const { addToTodayPlan, setAddToTodayPlan } = context;

const alreadyAdded = addToTodayPlan.some(
(item) => item.id === workout.id
);

const planIsFull = addToTodayPlan.length >= 5;

const handleClick = () => {
if (alreadyAdded) {
toast.warning("This workout is already in your plan.");
return;
}


if (planIsFull) {
  toast.warning("Today's plan can contain a maximum of 5 workouts.");
  return;
}

setAddToTodayPlan((previous) => [...previous, workout]);

toast.success("Workout added to today's plan!");


};

const isDisabled = alreadyAdded || planIsFull;

return (
<button
type="button"
onClick={handleClick}
disabled={isDisabled}
className={`flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-xs font-bold transition ${
        isDisabled
          ? "cursor-not-allowed bg-gray-600 text-gray-400"
          : "bg-lime-400 text-black hover:bg-lime-300"
      }`}
> <FiCalendar size={14} />

```
  {alreadyAdded
    ? "Already Added"
    : planIsFull
      ? "Plan Full"
      : "Add to today's plan"}
</button>


);
};

export default AddToTodayPlanButton;
