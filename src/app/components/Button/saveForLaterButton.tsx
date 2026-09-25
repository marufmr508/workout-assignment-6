"use client"
import { WorkOutContext } from '@/app/Context/WorkOutContext';
import { WorkoutType } from '@/types';
import React, { useContext } from 'react';
import { FiCalendar } from 'react-icons/fi';
import { toast } from 'react-toastify';

export const SaveForLaterButton = ({ workout}:{ workout:WorkoutType}) => {
     const context=useContext(WorkOutContext);
        if(!context){
             throw new Error("AddToTodayPlanButton must be used inside WorkoutProvider");
        }
        const { saveForLater , setSaveForLater  }=context;
    
        const  handleSaveButton=()=>{

            const already= saveForLater.some((item)=>item.id===workout.id)
            if(already){
                toast.warning("This workout is already saved for later.");
                return;
    
            }
              setSaveForLater((previous)=> [...previous,workout])
              toast.success("Workout added successfully!");
            }
                 
                

             
    return (
          <button
               type="button"
               onClick={ handleSaveButton}
               className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-lime-400 text-black text-xs font-bold hover:bg-lime-300 transition"
             >
               <FiCalendar size={14} />
                saveForLater
             </button>
           
                
    );
};

export default SaveForLaterButton ;