import { landingPageData , arrowURL } from "../constants";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const LandingPageComponent = ({name,availability,status})=>{

    const rout="/"+name;

    return (
    <div className="container compoList">
        <Link to={rout} className="text-decoration-none link-black link-land ">
        <div className=" border-dark border rounded p-1 link-black">
            <div className="row align-items-center landImgComp">   
                <div className="col-2 text-center">
                    <img src={arrowURL} placeholder="img.jpg" className="landImg" />
                </div>
                <div className="col-10">
                        <h2 title="click here">{name}</h2>
                        <h4>{availability}</h4>
                        <h6>{status}</h6> 
                </div>
            </div>
        </div>
        </Link>
    </div>
    );
}


const LandingPage = ()=>{

    useEffect(()=>{
        fetchData()
    },[]);

    // async function getSwiggyAPI(){
    //     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5602455&lng=73.8338196&page_type=DESKTOP_WEB_LISTING");
    //     const dataJSON = await data.json();
    //     console.log(dataJSON?.data?.cards[2]?.data?.data?.cards);
    // }

    async function fetchData () {
        try {
          const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5602455&lng=73.8338196&page_type=DESKTOP_WEB_LISTING");
          const json = await response.json();
          
          // Extract restaurant data from each card
        //   const restaurants = json.data.cards.map(card => card?.card?.card?.info);
          const restaurants = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          const restNames = restaurants.map(res=>{
            return res?.info;
          })
      
          // Update state with the new restaurant data
        //   setListOfRestraurent(restaurants);
        console.log(restNames);
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      };

    return (
    <div className="compoList">
        {landingPageData.map((compo)=>{
            return (<LandingPageComponent {...compo} key={landingPageData.id} />);
        })}
    </div>
    );
}

export default LandingPage;
