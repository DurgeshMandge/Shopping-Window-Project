import { landingPageData } from "../constants";
import { arrowURL } from "../constants";
import Canteen from "./Canteen";

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

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this._onButtonClick}>
          <div className="compoList">
            {landingPageData.map((compo)=>{
              return (<LandingPageComponent {...compo} key={landingPageData.id} />);
            })}
          </div>
        </Button>
        {this.state.showComponent ?
           <Canteen /> :
           null
        }
      </div>
    );
  }
}



export default LandingPage;