import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayout from '../layout/RootLayout';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import JobDetails from '../pages/JobDetails';
import PrivateRoute from '../routes/PrivateRoute';
import JobApply from '../pages/JobApply';
import MyApplication from '../pages/MyApplication/MyApplication';
import AddJob from '../pages/AddJob/AddJob';
import MyPostedJob from '../pages/MyPostedJob/MyPostedJob';

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
           path:'/jobs/:id',
           Component:JobDetails,
           loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
           path:'/jopApply/:id',
           element:<PrivateRoute><JobApply></JobApply></PrivateRoute>
        },
        {
          path:'/myApplications',
          element:<PrivateRoute><MyApplication></MyApplication></PrivateRoute>
        },
        {
          path:'/addJob',
          element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        {
          path:'myPostedJobs',
          element:<PrivateRoute><MyPostedJob></MyPostedJob></PrivateRoute>
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