import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import SpreadImageOnClick from '../Components/MouseBurst';

const MainLayout = () => {
    return (
        <div className=''>
           <div><Navbar></Navbar> </div>
         
         <div className='md:pt-0 pt-10   overflow-hidden' >
         <Outlet></Outlet>
         </div>
        </div>
    );
};

export default MainLayout;