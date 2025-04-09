import "./Card3.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationDot, faDownLong } from "@fortawesome/free-solid-svg-icons";
import cloudy from "../gifs/cloudy.gif";
import temp from "../gifs/temp2.gif";
import humid from "../gifs/humidity.gif";
import pressure from "../gifs/at2.png";
import { useEffect, useRef, useState } from "react";

export default function Card1() {
  const scrollContainerRef = useRef(null);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      setShowHint(false);
      clearTimeout(timeout);
      timeout = setTimeout(() => setShowHint(true), 3000);
    };

    const scrollEl = scrollContainerRef.current;
    if (scrollEl) {
      scrollEl.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollEl) scrollEl.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        height: "240px",
        marginTop: "20px",
        width: "250px",
      }}
      className="wholeCard3"
    >
      <div className="day">
        <p className="day-day">7 Day's Forcast</p>
      </div>

      {/* Floating Scroll Hint Icon (FontAwesome) */}
      <div className={`floating-scroll-hint ${showHint ? "" : "hidden"}`}>
        <FontAwesomeIcon icon={faDownLong} className="scroll-arrow-icon" />
      </div>

      <div className="days" ref={scrollContainerRef}>
        {/* Forecast Items */}
        
          <div className="day1" >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img className="weather1" src={cloudy} alt="Cloudy Weather" />
              <p style={{ margin: "0", fontSize: "15px", paddingTop: "10px" }}>50<span style={{ fontSize: "15px", paddingTop: "10px" }}>&#8451;</span></p>
            </div>
            <div style={{ fontSize: "15px", paddingTop: "10px" }} className="date">5 mar</div>
            <div style={{ fontSize: "15px", paddingTop: "10px" }} className="weekofday">Friday</div>
          </div>

          <div className="day1" >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img className="weather1" src={cloudy} alt="Cloudy Weather" />
              <p style={{ margin: "0", fontSize: "15px", paddingTop: "10px" }}>50<span style={{ fontSize: "15px", paddingTop: "10px" }}>&#8451;</span></p>
            </div>
            <div style={{ fontSize: "15px", paddingTop: "10px" }} className="date">5 mar</div>
            <div style={{ fontSize: "15px", paddingTop: "10px" }} className="weekofday">Friday</div>
          </div>

          <div className="day1" >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img className="weather1" src={cloudy} alt="Cloudy Weather" />
              <p style={{ margin: "0", fontSize: "15px", paddingTop: "10px" }}>50<span style={{ fontSize: "15px", paddingTop: "10px" }}>&#8451;</span></p>
            </div>
            <div style={{ fontSize: "15px", paddingTop: "10px" }} className="date">5 mar</div>
            <div style={{ fontSize: "15px", paddingTop: "10px" }} className="weekofday">Friday</div>
          </div>

          <div className="day1" >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img className="weather1" src={cloudy} alt="Cloudy Weather" />
              <p style={{ margin: "0", fontSize: "15px", paddingTop: "10px" }}>50<span style={{ fontSize: "15px", paddingTop: "10px" }}>&#8451;</span></p>
            </div>
            <div style={{ fontSize: "15px", paddingTop: "10px" }} className="date">5 mar</div>
            <div style={{ fontSize: "15px", paddingTop: "10px" }} className="weekofday">Friday</div>
          </div>

          <div className="day1" >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img className="weather1" src={cloudy} alt="Cloudy Weather" />
              <p style={{ margin: "0", fontSize: "15px", paddingTop: "10px" }}>50<span style={{ fontSize: "15px", paddingTop: "10px" }}>&#8451;</span></p>
            </div>
            <div style={{ fontSize: "15px", paddingTop: "10px" }} className="date">5 mar</div>
            <div style={{ fontSize: "15px", paddingTop: "10px" }} className="weekofday">Friday</div>
          </div>

          <div className="day1" >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img className="weather1" src={cloudy} alt="Cloudy Weather" />
              <p style={{ margin: "0", fontSize: "15px", paddingTop: "10px" }}>50<span style={{ fontSize: "15px", paddingTop: "10px" }}>&#8451;</span></p>
            </div>
            <div style={{ fontSize: "15px", paddingTop: "10px" }} className="date">5 mar</div>
            <div style={{ fontSize: "15px", paddingTop: "10px" }} className="weekofday">Friday</div>
          </div>

          <div className="day1" >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img className="weather1" src={cloudy} alt="Cloudy Weather" />
              <p style={{ margin: "0", fontSize: "15px", paddingTop: "10px" }}>50<span style={{ fontSize: "15px", paddingTop: "10px" }}>&#8451;</span></p>
            </div>
            <div style={{ fontSize: "15px", paddingTop: "10px" }} className="date">5 mar</div>
            <div style={{ fontSize: "15px", paddingTop: "10px" }} className="weekofday">Friday</div>
          </div>

      </div>
    </div>
  );
}
