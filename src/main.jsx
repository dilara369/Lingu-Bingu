import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MianLayout from './layout/MainLayout';
import Login from './pages/Login';

import Ragister from './pages/Ragister';
import AuthProvider from './AuthProvider';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MianLayout/>,
    children:[

      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/login',
        element:<Login/>,
      },
      {
        path:'/ragister',
        element:<Ragister/>,
      },

      
    ] 
  },

  


]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
       </AuthProvider>
      
  </StrictMode>,
)
