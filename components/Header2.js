import { logoURL } from "../constants";

const Header2 =()=>{
    return (
        <>
    <div className="container">
    <header className="d-flex align-items-center flex-wrap justify-content-center py-3 mb-1 border-bottom">
      <a href="/" className="d-flex align-items-center mb-1 mb-md-0 me-md-auto text-dark text-decoration-none">
        <img src={logoURL} alt="Shopify" />
      </a>

      <ul className="nav nav-pills ">
        <li className="nav-item "><a href="#" className="nav-link navOpt" aria-current="page">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link navOpt">About</a></li>
        <li className="nav-item"><a href="#" className="nav-link navOpt">Contact</a></li>
      </ul>
    </header>
  </div>
  </>
  );
}

export default Header2;