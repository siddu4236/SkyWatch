import "./Card2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import wind from "../gifs/wind-unscreen.gif";
import humid from "../gifs/humidity.gif";
import pressure from "../gifs/at2.png";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import temp from "../gifs/temp2.gif";
import vision from "../gifs/vision-unscreen.gif";

export default function Card2() {
  return (
    <div className="wholeCard2">
      <div className="today">
        <p className="high">Today's Highlights</p>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {/* Air Quality Section */}
        <div className="air-quality">
          <div className="head">
            <p className="air-qua">Air Quality Index</p>
            <span>Good</span>
          </div>
          <div className="air-del">
            <img className="windly" src={wind} alt="Windy" />
            <div className="del">
              <div className="PM25">
                <span>PM25</span>
                <p>3.90</p>
              </div>
              <div className="PM25">
                <span>SO2</span>
                <p>7.75</p>
              </div>
              <div className="PM25">
                <span>NO2</span>
                <p>33.6</p>
              </div>
              <div className="PM25">
                <span>O3</span>
                <p>38.6</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sunrise & Sunset Section */}
        <div style={{width:"320px"}} className="air-quality sun-moon">
          <p className="air-qua">Sunrise & Sunset</p>
          <div className="air-del">
            <div className="del">
              <div style={{marginRight:"20px"}} className="sunset-block">
                <FontAwesomeIcon icon={faSun} size="2x" color="orange" />
                <div>
                  <span style={{fontSize:"12px"}}>Sunrise</span>
                  <p style={{fontSize:"20px"}}>6:12 AM</p>
                </div>
              </div>
              <div className="sunset-block">
                <FontAwesomeIcon icon={faMoon} size="2x" color="purple" />
                <div>
                  <span style={{fontSize:"12px"}}>Sunrise</span>
                  <p style={{fontSize:"20px"}}>6:12 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div style={{margin:"0",width:"150px"}} className="air-quality sun-moon">
          <p className="air-qua">Humidity</p>
          <div style={{margin:"0"}} className="air-del">
          <img  className="windly" src={humid} alt="Cloudy Weather" />
          <p style={{fontSize:"35px", margin:"auto"}} >80%</p>
          </div>
        </div>


        <div style={{margin:"0",width:"150px"}} className="air-quality sun-moon">
          <p className="air-qua">Pressure</p>
          <div style={{margin:"0"}} className="air-del">
          <img style={{height:"30px",margin:"10px 0px 10px 0px"}} className="windly" src={pressure} alt="Cloudy Weather" />
          <p style={{fontSize:"30px", margin:"auto"}} >1062<span style={{fontSize:"15px"}}>hPa</span></p>
          </div>
        </div>

        <div style={{margin:"0",width:"150px"}} className="air-quality sun-moon">
          <p className="air-qua">Temperature</p>
          <div style={{margin:"0"}} className="air-del">
          <img className="temp" style={{ height: "35px",margin:"7.5px 0px 7.5px 10px" }} src={temp} alt="Temperature" />
          <p style={{fontSize:"35px", margin:"auto"}} >80%</p>
          </div>
        </div>

        <div style={{margin:"0",width:"150px"}} className="air-quality sun-moon">
          <p className="air-qua">Visibility</p>
          <div style={{margin:"0"}} className="air-del">
          <img  className="windly" src={vision} alt="Cloudy Weather" />
          <p style={{fontSize:"35px", margin:"auto"}} >10<span style={{fontSize:"25px"}}>km</span></p>
          </div>
        </div>










      </div>

    </div>
  );
}
