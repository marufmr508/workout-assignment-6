"use client"
import { WorkoutType } from '@/types';
import { Chilanka } from 'next/font/google';
import React, { Children, useState,createContext } from 'react';
// import { createContext } from 'vm';sss

export interface WorkOutContextType{
addToTodayPlan:WorkoutType[];
setAddToTodayPlan:React.Dispatch<React.SetStateAction<WorkoutType[]>>
saveForLater:WorkoutType[];
setSaveForLater:React.Dispatch<React.SetStateAction<WorkoutType[]>>
  handleRemoveToday: (id: number) => void;
  handleRemoveSaved: (id: number) => void;
}


export const WorkOutContext=createContext<WorkOutContextType| null >(null);

export const WorkoutProvider=({children}:{children:React.ReactNode})=>{
    const [addToTodayPlan ,setAddToTodayPlan]=useState<WorkoutType[]>([]);
    const [saveForLater , setSaveForLater]=useState<WorkoutType[]>([]);

     const handleRemoveToday = (id: number) => {
  setAddToTodayPlan((previous) =>
    previous.filter((workout) => workout.id !== id)
  );
};

const handleRemoveSaved = (id: number) => {
  setSaveForLater((previous) =>
    previous.filter((workout) => workout.id !== id)
  );
};

    const shareData={
addToTodayPlan,
setAddToTodayPlan,
saveForLater,
setSaveForLater,
 handleRemoveToday,
handleRemoveSaved

    }
    return (
        <div>
            <WorkOutContext.Provider value={shareData} >
                {children}
            </WorkOutContext.Provider>
        </div>
    );
};

export default WorkoutProvider  ;