import "./Card1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import cloudy from "../gifs/cloudy.gif";
import temp from "../gifs/temp2.gif";
import humid from "../gifs/humidity.gif";
import pressure from "../gifs/at2.png";

export default function Card1() {
  return (
    <div className="wholeCard1">
      <div className="now">
        <p className="now-now">Now</p>
        <div className="clouds">
          <p>
            <img className="temp" style={{ height: "50px" }} src={temp} alt="Temperature" />
            20<span>&#8451;</span>
            <img className="cloudy" src={cloudy} alt="Cloudy Weather" />
          </p>
        </div>
      </div>
      
      <div className="hum-press">
      <div className="heading">
        <span className="humidd">Humidity</span>
        <span className="presss">Pressure</span>
      </div>
      <div className="humid"> 
      
      <img className="humidimg" src={humid} alt="Cloudy Weather" />
      <span>82 %</span>
      </div>
      
      <div className="press"> 
        
      <img className="pressure" src={pressure} alt="Cloudy Weather" />
      <span>82 %</span>
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
  );
}

