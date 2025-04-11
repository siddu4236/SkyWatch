import "./Card4.css";
import cloudy from "../gifs/cloudy.gif";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";

export default function Card2() {
  const scrollRef = useRef(null);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      setShowHint(false);
      clearTimeout(timeout);
      timeout = setTimeout(() => setShowHint(true), 3000);
    };

    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", handleScroll);

    return () => {
      if (el) el.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <div className="wholeCard4">
        {/* Floating Scroll Hint Icon (positioned absolutely) */}
        <div className={`scroll-hint-x ${showHint ? "" : "hidden"}`}>
          <FontAwesomeIcon icon={faRightLong} className="scroll-x-icon" />
        </div>

        <div className="heades">
          <div><p style={{ margin: "0", marginBottom: "10px" }}>Today at</p></div>
          <div className="dailyCards" ref={scrollRef}>
            <div className="daily1">
              <p className="timing">2 AM</p>
              <img className="weather1" src={cloudy} alt="Cloudy Weather" />
              <p className="time-temp">20 &#8451;</p>
              <p className="wind-info">↑ 10 km/h</p>
            </div>
            <div className="daily1">
              <p className="timing">5 AM</p>
              <img className="weather1" src={cloudy} alt="Cloudy Weather" />
              <p className="time-temp">20 &#8451;</p>
              <p className="wind-info">↗ 12 km/h</p>
            </div>
            <div className="daily1">
              <p className="timing">8 AM</p>
              <img className="weather1" src={cloudy} alt="Cloudy Weather" />
              <p className="time-temp">20 &#8451;</p>
              <p className="wind-info">→ 15 km/h</p>
            </div>
            <div className="daily1">
              <p className="timing">11 AM</p>
              <img className="weather1" src={cloudy} alt="Cloudy Weather" />
              <p className="time-temp">20 &#8451;</p>
              <p className="wind-info">↘ 8 km/h</p>
            </div>
            <div className="daily1">
              <p className="timing">2 PM</p>
              <img className="weather1" src={cloudy} alt="Cloudy Weather" />
              <p className="time-temp">20 &#8451;</p>
              <p className="wind-info">↓ 10 km/h</p>
            </div>
            <div className="daily1">
              <p className="timing">5 PM</p>
              <img className="weather1" src={cloudy} alt="Cloudy Weather" />
              <p className="time-temp">20 &#8451;</p>
              <p className="wind-info">↙ 9 km/h</p>
            </div>
            <div className="daily1">
              <p className="timing">8 PM</p>
              <img className="weather1" src={cloudy} alt="Cloudy Weather" />
              <p className="time-temp">20 &#8451;</p>
              <p className="wind-info">← 11 km/h</p>
            </div>
            <div className="daily1">
              <p className="timing">11 PM</p>
              <img className="weather1" src={cloudy} alt="Cloudy Weather" />
              <p className="time-temp">20 &#8451;</p>
              <p className="wind-info">↖ 7 km/h</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
