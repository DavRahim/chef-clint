import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login/Login'
import Register from './components/Login/Register'
import FullHome from './layout/FullHome'
import Main from './layout/Main'
import Chef from './contanier/Chef/Chef'
import ErrorPage from './components/ErrorPage/ErrorPage'
import AuthProvider from './AuthProvider/AuthProvider'
import PrivetRoute from './PrivetRoute/PrivetRoute'
import Question from './Question/Question'


const router = createBrowserRouter([
  {
    path: "/",
    element: <FullHome></FullHome>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Main></Main>,
        loader: () => fetch("http://localhost:5000/allChef"),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "allChef/:id",
        element: (
          <PrivetRoute>
            <Chef></Chef>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allChef/${params.id}`),
      },
      {
        path:'question',
        element:<Question></Question>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
