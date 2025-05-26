import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayout from '../layout/RootLayout';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,

    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:'/register',
            Component:Register
        },
        {
            path:'/login',
            Component:Login
        }
    ]
  },
]);

export default router;