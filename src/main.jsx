import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MianLayout from "./layout/MainLayout";
import Login from "./pages/Login";

import Ragister from "./pages/Ragister";
import AuthProvider from "./AuthProvider";
import Home from "./pages/Home";
import StartLearning from "./pages/StartLearning";
import Lesson from "./component/Lesson";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import NotFound from "./component/NotFound";
import Tutorials from "./pages/Tutorials";
import MyProfile from "./pages/MyProfile";
import UpdateProfile from "./component/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MianLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/ragister",
        element: <Ragister />,
      },
      {
        path: "/StartLearning",
        element: <StartLearning />,
      },
      {
        path: "/Tutorials",
        element: (
          <PrivateRoute>
            <Tutorials />
          </PrivateRoute>
        ),
      },
      {
        path:'/Profile',
        element:<MyProfile/>,
      },
      {
        path:'/UpdateProfile',
        element:<UpdateProfile/>,
      },
      {
        path: "/Lesson/:Lesson_no",
        element: (
          <PrivateRoute>
            <Lesson />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch("/vocabulary.json");
          const data = await res.json();
          // console.log(data)
          const singleData = data.filter(
            (newData) => newData.Lesson_no == params.Lesson_no
          );
          // console.log(singleData)
          return singleData;
        },
      },

      {
        path: "/404",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
