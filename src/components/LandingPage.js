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

    return (
    <div className="compoList">
        {landingPageData.map((compo)=>{
            return (<LandingPageComponent {...compo} key={landingPageData.id} />);
        })}
    </div>
    );
}

export default LandingPage;
