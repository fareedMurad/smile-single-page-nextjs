'use client'
import React from "react";

const VideoGrid = () => {
  // Array indicating whether a cell should contain a video or grey background
  const cells = [
    { isVideo: true, classes: { class: "col-md-1" } },
    {
      isVideo: true,
      videoSrc: "/assets/videos/clip1.mp4",
      classes: { class: "col-md-2" },
      style: {
        width: "280px",
        height: "157px",
        left: "-13%",
        top: "7%",
      },
    },
    { isVideo: true, classes: { class: "col-md-1" } },
    {
      isVideo: true,
      videoSrc: "/assets/videos/clip2.mp4",
      classes: { class: "col-md-2" },
      style: { top: "35%", width: "106px", height: "158px" },
    },
    { isVideo: true, classes: { class: "col-md-2" } },
    {
      isVideo: true,
      videoSrc: "/assets/videos/clip3.mp4",
      classes: { class: "col-md-2" },
      style: { top: "-22%", width: "106px", height: "145px" },
    },
    { isVideo: true, classes: { class: "col-md-2" } },
    { isVideo: true, classes: { class: "col-md-1" } },
    {
      isVideo: true,
      classes: { class: "col-md-2" },
      videoSrc: "/assets/videos/clip4.mp4",
      style: { top: "51%", left: "-38%", width: "127px", height: "200px" },
    },
    { isVideo: true, classes: { class: "col-md-2" } },
    { isVideo: true, classes: { class: "col-md-2" } },
    { isVideo: true, classes: { class: "col-md-2" } },
    { isVideo: true, classes: { class: "col-md-1" } },
    {
      isVideo: true,
      videoSrc: "/assets/videos/clip5.mp4",
      classes: { class: "col-md-2" },
      style: { height: "119px", width: "131px", left: "25%", top: "-24%" },
    },
    { isVideo: true, classes: { class: "col-md-2" } },
    {
      isVideo: true,
      classes: { class: "col-md-2" },
      videoSrc: "/assets/videos/clip6.mp4",
      style: { top: "22%", width: "128px", height: "172px" },
    },
    { isVideo: true, classes: { class: "col-md-2" } },
    { isVideo: true, classes: { class: "col-md-1" } },
    {
      isVideo: true,
      classes: { class: "col-md-2" },
      videoSrc: "/assets/videos/clip7.mp4",
      style: { left: "5%", top: "-54%", height: "235px", width: "170px" },
    },
    {
      isVideo: true,
      videoSrc: "/assets/videos/clip8.mp4",
      classes: { class: "col-md-3" },
      style: {
        width: "260px",
        height: "176px",
        top: "16%",
        left: "unset",
        right: 0,
      },
    }, // Cell 1: Video 1
  ];

  const mobileCells = [
    {
      isVideo: true,
      videoSrc: "/assets/videos/clip1.mp4",
      classes: { class: "col-md-2" },
      style: {
        width: "120px",
        left: "0",
        top: "25%",
      },
    },
    {
      isVideo: true,
      videoSrc: "/assets/videos/clip2.mp4",
      classes: { class: "col-md-2" },
      style: { top: "0%" },
    },
    {
      isVideo: true,
      videoSrc: "/assets/videos/clip3.mp4",
      classes: { class: "col-md-2" },
      style: { width: "120px", right: "0", left: "unset", top: "25%" },
    },
    {
      isVideo: true,
      classes: { class: "col-md-2" },
      videoSrc: "/assets/videos/clip4.mp4",
      style: { top: "11%", left: "0", width: "120px" },
    },
    { isVideo: true, classes: { class: "col-md-2" } },
    {
      isVideo: true,
      videoSrc: "/assets/videos/clip5.mp4",
      classes: { class: "col-md-2" },
      style: { top: "1%", right: "0", left: "unset", width: "120px" },
    },
    {
      isVideo: true,
      classes: { class: "col-md-2" },
      videoSrc: "/assets/videos/clip6.mp4",
      style: { top: "-3%", left: "0", width: "120px" },
    },
    {
      isVideo: true,
      classes: { class: "col-md-2" },
      videoSrc: "/assets/videos/clip7.mp4",
      style: { left: "0", top: "14%" },
    },
    {
      isVideo: true,
      videoSrc: "/assets/videos/clip8.mp4",
      classes: { class: "col-md-3" },
      style: {
        top: "-3%",
        right: "0",
        width: "120px",
        left: "unset",
      },
    }, // Cell 1: Video 1
  ];

  return (
    <div className="video-grid container-fluid">
      <div className="row d-none d-sm-flex">
        {cells.map((cell, index) => (
          <div
            key={index}
            className={`col-4 ${cell?.classes?.class}  video-cell`}
          >
            {cell.isVideo && cell.videoSrc ? (
              <div className="videogridWrapper">
                <video
                  autoPlay
                  muted
                  loop
                  className={`video`}
                  style={cell?.style}
                  playsInline
                  webkit-playsinline
                >
                  <source src={cell.videoSrc} type="video/mp4" />
                </video>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        ))}
      </div>
      <div className="row d-sm-none">
        {mobileCells.map((cell, index) => (
          <div
            key={index}
            className={`col-4 video_grid_item ${cell?.classes?.class}  video-cell`}
          >
            {cell.isVideo && cell.videoSrc ? (
              <div className="videogridWrapper">
                <video
                  autoPlay
                  muted
                  loop
                  className={`video`}
                  style={cell?.style}
                  playsInline
                  webkit-playsinline
                >
                  <source src={cell.videoSrc} type="video/mp4" />
                </video>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;
