import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Canteen from "./components/Canteen";
import Cloths from "./components/Cloths";
import { ShimmerLoad } from "./components/Shimmer";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Portfolio from "./components/Portfolio";

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
            element:<LandingPage />
        },
        {
            path:"/about",
            element:<About />
        },
        {
          path:"/Contact",
          element:<Contact />,
          children:[
            {
            path:"/Contact/portfolio",
            element:<Portfolio />
          }
        ]
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