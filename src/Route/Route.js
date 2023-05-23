import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Component/Home/Home";
import React from 'react';
import TabSection from '../Component/Pages/FoodCategory/TabsSection/TabSection';


const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>,
            },
            {
                path:'/foodcategory',
                element:<TabSection/>
            }
        ]
    }

])

export default router;