import { useState, useEffect } from "react";
import {RestList, restImageURL} from "../constants.js";
import Shhimmer from "./Shimmer.js";

const Card = ({cloudinaryImageId,name,cuisines,city}) =>{
    return (
        <div className="container card cloth-card">
            <div className="row">
                <div className="col-8">
                    <h2 className="cloth-card-title">{name}</h2>
                    {/* <h4 className="cloth-card-price">{city}</h4> */}
                    <h6 className="cloth-card-desc">{cuisines.join(", ")}</h6>
                </div>
                <div className="col-4">
                    <img className="cloth-card-image" src= {restImageURL + cloudinaryImageId} />
                </div>
            </div>
        </div>
    );
}
        
const Canteen = () =>{

    const [searchText,setSearchText]=useState("");
    const [Restaurants,setRestList]=useState([]);
    const [filteredRestaurants,setFilteredRestList]=useState([]);
    
    useEffect(()=>{
        fetchData()
    },[]);


    async function fetchData () {
        try {
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5602455&lng=73.8338196&page_type=DESKTOP_WEB_LISTING");
            const json = await response.json();
            
            const restaurants = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

            const HotelList = restaurants.map(res=>{
                return res?.info;
            })
      
        setRestList(HotelList);
        setFilteredRestList(HotelList);

        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    console.log(Restaurants.length===0)

    function filterData(Restaurent,searchText){
        return (Restaurent.filter((rest)=>rest?.name?.toLowerCase().includes(searchText.toLowerCase())));
    }

    if(filteredRestaurants.length===0){
        return <Shhimmer/>;
    }

    return (
    <div className="container">

        <div className="search">
            <input 
                type="text"
                className="search-input"
                placeholder="eg.KFC"
                value={searchText}
                onChange={(e)=>{
                    setSearchText(e.target.value);
                }}
            />
            <button type="submit"
                onClick={
                    ()=>{setFilteredRestList(filterData(Restaurants,searchText));
                }}
                className="search-button"
                >Search
            </button>
        </div>
        
        <div className="card-list">                              
            {filteredRestaurants.map((rest)=>{
                return (<Card {...rest}  key={rest?.data?.id}/>);
            })}
        </div>  

      </div>
    );
}

export default Canteen;