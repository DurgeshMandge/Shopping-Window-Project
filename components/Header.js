import { logoURL } from "../constants";
import { Link } from "react-router-dom";

const Header2 =()=>{
    return (
        <>
    <div className="container">
    <header className="d-flex align-items-center flex-wrap justify-content-center  border-bottom">
      <a href="/" className="d-flex align-items-center   me-md-auto text-dark text-decoration-none">
        <img src={logoURL} alt="Shopify" />
      </a>

      <ul className="nav nav-pills ">
        <li className="nav-item "><Link to="/" className="nav-link navOpt link-black" aria-current="page">Home</Link></li>
        <li className="nav-item"><Link to="/about" className="nav-link navOpt link-black">About</Link></li>
        <li className="nav-item"><Link to="/contact" className="nav-link navOpt link-black">Contact</Link></li>
      </ul>
    </header>
  </div>
  </>
  );
}

export default Header2;