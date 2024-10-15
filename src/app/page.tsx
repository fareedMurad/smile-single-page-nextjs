'use client'
import { useEffect, useRef, useState } from "react";
import "./home-page.css";

function HomePage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);

      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.pause(); // Pause the video
      videoRef.current.currentTime = videoRef.current.duration; // Move to the last frame
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.addEventListener("ended", handleVideoEnd);
    }

    // Cleanup event listener on component unmount
    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, []);

  return (
    <div className="homepage-container">
      <video
        ref={videoRef}
        preload="metadata"
        className="splash-video"
        src="/assets/videos/splash.mp4#t=0.001"
        muted={isMuted}
        onClick={handleVideoClick}
        playsInline
      ></video>
    </div>
  );
}

export default HomePage;
