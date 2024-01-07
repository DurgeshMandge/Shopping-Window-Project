import { useState, useEffect } from "react";
import Shhimmer from "./Shimmer.js";
import Card from "./Card.js";
        
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