import React from "react";
import Image from "next/image";
import iconArrow from "@image/icon-arrow.png";

const NewMaterial: React.FC = () => {
  return (
    <div className="new-material">
      <div className="container-fluid">
        <h1 style={{ marginBottom: "-0.5rem" }}>
          Test out new <span>material</span>
        </h1>
        <div className="video-container">
          <video
            className="test-out"
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline
          >
            <source src="/assets/videos/couch.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="material-flex mt-3">
          <div>
            <h3>From the comfort of your couch</h3>
          </div>
          <div>
            <p>
              Working on some new jokes? Get immediate feedback without having
              to hit the road, or even leave the couch. Save time, refine, and
              connect with your fans.
            </p>
          </div>
          <div className="material-flex-btn d-flex col-md-3 col-lg-2">
            <a
              href="https://sidzsolution.com/projects/Smile_Template/"
              className="btn-download"
            >
              Download Now
              <div className="span-wrapper">
                <span className="s1"></span>
                <span className="s2"></span>
                <span className="s3"></span>
              </div>
              <span>
                <Image src={iconArrow} alt="Arrow" /> {/* Using Next.js Image component */}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMaterial;
