import { restImageURL} from "../constants.js";

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

export default Card;