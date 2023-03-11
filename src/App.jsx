
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Navbar } from "./Components/NavbarPages/Navbar"
import { Home } from "./Components/HomePage/Home";
import { ChoseCountry } from "./Components/ChosePage/ChoseCountry";
import React, { useEffect, useRef, useState } from "react";
import { AllGolbal } from './Components/GlobalVirable/Global';
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/chosePage",
          element: <ChoseCountry />
        }
      ]
    },

  ])



  // console.log(dataServer);


  return (
    <>
      <AllGolbal>
        <RouterProvider router={router} />
      </AllGolbal>
    </>
  );
}
export default App

