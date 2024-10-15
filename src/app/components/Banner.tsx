'use client'
import React, { useState, useEffect, MouseEvent } from "react";
import VideoGrid from "./VideoGrid";



const Banner: React.FC = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  // const [isMobileView, setIsMobileView] = useState(false);

  // useEffect(() => {
  //   const checkMobileView = () => {
  //     // setIsMobileView(window.innerWidth <= 768);
  //   };

  //   // checkMobileView();
  //   // window.addEventListener("resize", checkMobileView);

  //   // return () => {
  //   //   window.removeEventListener("resize", checkMobileView);
  //   // };
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window?.scrollY === 0) {
        setIsAnimated(false);
      } else {
        setIsAnimated(true);
      }
    };
    window?.addEventListener("scroll", handleScroll);
    return () => window?.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDivClick: React.MouseEventHandler<HTMLDivElement> = (
    event: MouseEvent<HTMLDivElement>
  ) => {
    // if (!isMobileView) {
    setIsAnimated(!isAnimated);
    // } else {
    //   event.preventDefault(); // Prevents the default action on mobile view
    // }
  };

  const handleAnchorClick: React.MouseEventHandler<HTMLAnchorElement> = (
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div
      className={`banner ${isAnimated ? "animate" : ""}`}
      onClick={handleDivClick}
    >
      <div className="video-grid-container">
        <VideoGrid />
        <div className="row m-0 text-center video-container-div">
          <h1 className={`text ${isAnimated ? "grow" : ""}`}>
            You hear people laugh and <br className="d-none d-xl-block" />
            see them smile.
          </h1>
        </div>
      </div>
      <div className="content-container">
        <div className="videoIcon">
          <div
            style={{
              width: isAnimated ? "280px" : "160px",
              margin: "auto",
              display: "inline-block",
              transition: "1s linear",
            }}
          >
            <a href="/" onClick={handleAnchorClick}>
              <video
                autoPlay
                muted
                loop
                style={{ borderRadius: "25%" }}
                playsInline
                webkit-playsinline={true}
              >
                <source src='/assets/videos/bannerVideo.mp4' type="video/mp4" />
              </video>

            </a>
          </div>
          <h1>
            At Smile, when you
            <br className="d-sm-none" /> tell a joke...
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
