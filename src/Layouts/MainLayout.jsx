import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className=''>
           <div><Navbar></Navbar> </div>
         <div className='md:pt-0 pt-10'>
         <Outlet></Outlet>
         </div>
        </div>
    );
};

export default MainLayout;