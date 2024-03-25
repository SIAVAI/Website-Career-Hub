import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Applied from './Components/Applied/Applied';
import Blogs from './Components/Blogs/Blogs';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import JobDetails from './Components/FeaturedJobs/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/applied',
        element:<Applied></Applied>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'/job/:id',
        loader:()=>fetch('jobs.json'),
        element:<JobDetails></JobDetails>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
