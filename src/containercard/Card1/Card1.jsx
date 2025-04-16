import "./Card1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import cloudy from "../gifs/cloudy.gif";





export default function Card1() {
  return (
    <div className="hloo">
    <div style={{height:"240px"}} className="wholeCard1">
      <div className="now">
        <p className="now-now">Now</p>
        <div className="clouds">
          <p>
            
            20<span>&#8451;</span>
            <img className="cloudy" src={cloudy} alt="Cloudy Weather" />
          </p>
        </div>
      </div>
    
      <div className="Typeofweather">
        <p className="Type-weather">Feels Like Haze</p>
        <div className="calen">
          <FontAwesomeIcon icon={faCalendar} />
          <span className="date">Thursday 2, Mar</span>
        </div>
        <div className="loc">
          <FontAwesomeIcon icon={faLocationDot} />
          <span className="area">New Delhi, IN</span>
        </div>
      </div>
      
    </div>

  


    </div>
    
  );
}

