 import React from 'react';
import WorkoutHero from './components/HeroSection/HeroPage';
import WorkOutList from './components/workoutList/WorkOutList';
import PlanList from './components/myPlanPage/PlanList';
import Footer from './components/footer/FooterPage';
// import { ToastContainer } from 'react-toastify';
 
 const page = () => {
  return (
    <div>
       <WorkoutHero />
       <WorkOutList />
         
        
    </div>
  );
 };
 
 export default page;