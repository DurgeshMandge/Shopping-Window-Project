import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Canteen from "./components/Canteen";
import Cloths from "./components/Cloths";
import { ShimmerLoad } from "./components/Shimmer";
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";

const AppLayout = ()=>{
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

const AppRout = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout />,
      errorElement:<ShimmerLoad />,
      children:[
        {
            path:"/",
            element:<Body />
        },
        {
            path:"/canteen",
            element:<Canteen />
        },
        {
          path:"/cloths",
          element:<Cloths />,
        }
      ]
    }
  ]);

  
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRout} />)