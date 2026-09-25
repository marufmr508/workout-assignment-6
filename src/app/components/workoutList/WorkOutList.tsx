import React from 'react';
import WorkOutCard from '../workoutCard/WorkOutCard';

// import  workoutData from "@/datas/data.json"
import { WorkoutType } from '@/types';
import Link from 'next/link';
// import { Link } from 'lucide-react';
import data from "@/datas/data.json"

const workouts=data as WorkoutType[]  ;

const WorkOutList = () => {
    
    return (
        <section > 
            <div>
        <h1 className=' mt-20 font-extrabold text-2xl mx-auto container'>THE LIBRARY</h1> 
             <p className=' font-semibold mx-auto container'>Twelve lifts covering every major muscle group.</p>
             </div>
        <div className=" container mx-auto mb-20 mt-5   grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {
                 workouts.map((workout)=> (
                 <Link  key={workout.id} href={`/workouts/${workout.id}`}>
                    <WorkOutCard workout={workout} />
                  </Link>))
            }
        </div>
        </section>
    );
};

export default WorkOutList;