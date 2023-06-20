import { landingPageData , arrowURL } from "../constants";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const LandingPageComponent = ({name,availability,status})=>{
    const rout="/"+name;
    return (
    <Link to={rout} className="text-decoration-none link-black">
    <div className="container mt-3 border-dark border rounded p-1 link-black">
        <div className="row align-items-center landImgComp">   
            <div className="col-2 ">
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
    );
}


const LandingPage = ()=>{

    useEffect(()=>{
        getSwiggyAPI()
    },[]);

    async function getSwiggyAPI(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5602455&lng=73.8338196&page_type=DESKTOP_WEB_LISTING");
        const dataJSON = await data.json();
        console.log(dataJSON?.data?.cards[2]?.data?.data?.cards);
    }

    return (
    <div className="compoList">
        {landingPageData.map((compo)=>{
            return (<LandingPageComponent {...compo} key={landingPageData.id} />);
        })}
    </div>
    );
}

export default LandingPage;