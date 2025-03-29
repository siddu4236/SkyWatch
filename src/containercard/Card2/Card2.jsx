import "./Card2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cloudy from "../gifs/cloudy.gif";

export default function Card1() {
  return (
    <div className="wholeCard1">
      <div className="now">
        <p className="now-now">Now</p>
        <div className="clouds">
          <p>
            20<span>&#8451;</span>
            <img src={cloudy} alt="Cloudy Weather" />
          </p>
        </div>
      </div>
      <div className="Typeofweather">
        <p className="Type-weather">Haze</p>
        <div className="calen">
          <i class="fa-regular fa-calendar"></i>
          <span className="date">Thurday 2, Mar</span>
        </div>
        <div className="loc">
        <i class="fa-solid fa-location-dot"></i>
          <span className="area">New Delhi IN</span>
        </div>
      </div>
      
      
    </div>
  );
}
<p className="Type-weather">Haze</p>;
