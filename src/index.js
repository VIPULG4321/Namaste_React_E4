import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from "./components/pages/About";
import Header from "./components/Header";
import Contact from "./components/pages/Contact"; 
import Error from "./components/pages/Error";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";

const Applayout = () => {
  return (
    <div id='header_container'>
      <Header />
      <Outlet></Outlet>
    </div> 
  )
}

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <Applayout></Applayout>,
    children : [
      {
        path : "/",
        element : <App></App>
      },
      {
        path : "/about",
        element : <About></About>
      },
      {
        path:"/contact",
        element: <Contact></Contact>
      }
    ], 
    errorElement : <Error></Error> 
  },
  
])


const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
