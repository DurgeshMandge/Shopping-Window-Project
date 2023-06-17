import { landingPageData } from "../constants";
import { arrowURL } from "../constants";

const LandingPageComponent = ({name,availability,status})=>{
    return (
    <div className="container border-dark" 
        onClick={()=>{
            displayCompo(name);
        }}
        >
        <div className="row align-items-center landImgComp">   
            <div className="col-2 ">
                <img src={arrowURL} placeholder="img.jpg" className="landImg" />
            </div>
            <div className="col-10">
                <h2>{name}</h2>
                <h4>{availability}</h4>
                <h6>{status}</h6> 
            </div>
        </div>
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