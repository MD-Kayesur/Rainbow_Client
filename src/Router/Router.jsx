import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Get_Support from "../Pages/Get_Support/Get_Support";
import Updates from "../Pages/Updates/Updates";
import Learn from "../Pages/Learn/Learn";
 import Download from "../Pages/Download/Download";
import Frequently_more from "../Pages/Home/Frequently/Frequently_more";

 
export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path:'/',
            element:<Home></Home>,
           
        },
        {
            path:'/getsupport',
            element:<Get_Support></Get_Support>,
           
        },
        {
            path:'/updates',
            element:<Updates></Updates>,
           
        },
        {
            path:'/learn',
            element:<Learn></Learn>,
           
        },
        {
            path:'/download',
            element:<Download></Download>,
           
        },
        {
            path:'/frequently',
            element:<Frequently_more></Frequently_more>,
           
        },
      ]
    },
  ]);