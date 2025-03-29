import { useState } from 'react';
import './Bg.css';
import cloudly from './cloudly.mp4';
import rain from './rain.mp4';
import sunny from './sunny.mp4';
import windy from './windy.mp4';

export default function Bg() {
    const videos = [cloudly, rain, sunny, windy];
    const [videoIndex, setVideoIndex] = useState(0);

    const toggleVideo = () => {
        setVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    return (
        <div className="bg-container">
            <video autoPlay muted loop playsInline id="myVideo" src={videos[videoIndex]} />
            <div className="video-overlay"></div>
            {/*<button onClick={toggleVideo} className="toggle-btn">Change Background</button> */}
        </div>
    );
}
