import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Canteen from "./components/Canteen";
import { ShimmerLoad } from "./components/Shimmer";


const AppLayout = ()=>{
    return (
        <div>
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

const AppRout = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout />,
      errorElement:<ShimmerLoad />
    },
    {
      path:"/canteen",
      element:<Canteen />,
    }
  ]);

  
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRout} />)