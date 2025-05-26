import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayout from '../layout/RootLayout';
import Home from '../pages/Home/Home';
import Register from '../pages/Register';

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
        }
    ]
  },
]);

export default router;