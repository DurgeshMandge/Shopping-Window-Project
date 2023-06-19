import { Link, Outlet} from "react-router-dom";
import Img from "../assets/img/DurgeshPhoto.jpg";
const ContactLayout = ()=>{
    return (
    <div className="card container ">
        <div className="row align-items-center">
            <div className="col-lg-3 col-sm-12 align-items-center">
                <div className="box">
                    <img src= {Img} className="box-in " alt="..." />
                </div>
            </div>
            <div className="col-lg-9 col-sm-12 box2">
                <div className="box-in">
                    <h5 className="card-title">Durgesh Mandge</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="/Contact/portfolio" className="btn btn-primary">View Portfolio</Link>
            </div>
            </div>
        </div>
        <div className="contaier">
            <Outlet className="col-12" />
        </div>
    </div>
    );
}

export default ContactLayout;