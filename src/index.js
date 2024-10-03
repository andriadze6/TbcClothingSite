import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import ErroPage  from './pages/ErroPage';
import Blog from './pages/BlogPage';
import MyAccount from './pages/MyAccount';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path:'/',
    element:<HomePage></HomePage>,
    errorElement:<ErroPage></ErroPage>
  },
  {
    path:'/aboutUs',
    element: <AboutUs></AboutUs>,
    errorElement:<ErroPage></ErroPage>
  },
  {
    path:'/contact',
    element: <Contact></Contact>,
    errorElement:<ErroPage></ErroPage>
  },
  {
    path:'/blog',
    element: <Blog></Blog>,
    errorElement:<ErroPage></ErroPage>
  },
  {
    path:'/myAcount',
    element: <MyAccount></MyAccount>,
    errorElement:<ErroPage></ErroPage>
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
