import React from "react";
import Image from "next/image";
import iconArrow from "@image/icon-arrow.png";

const ProcessSteps: React.FC = () => {
  return (
    <div className="how-itwork">
      <div className="custom-container">
        <div className="row row0">
          <div className="col-lg-4 col-sm-4">
            <h1>How It Works</h1>
            <div className="our-work">
              <video
                autoPlay
                muted
                loop
                playsInline
                webkit-playsinline
                className="our-work-img"
              >
                <source src="/assets/videos/howitworks1.mp4" type="video/mp4" />
              </video>
              <div className="text-letter">
                <h3>1</h3>
              </div>
            </div>
            <div className="caption">
              <h2>Tell a Joke</h2>
              <p>
                Posting a joke on SMILE is simple - just record a video on the go
                or pick one from your camera roll.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4">
            <h1 style={{ opacity: 0 }}>How It Works</h1>
            <div className="our-work">
              <video
                autoPlay
                muted
                loop
                playsInline
                webkit-playsinline
                className="our-work-img"
              >
                <source src="/assets/videos/howitworks2.mp4" type="video/mp4" />
              </video>
              <div className="text-letter">
                <h3>2</h3>
              </div>
            </div>
            <div className="caption">
              <h2>Get Smiles</h2>
              <p>
                Get more than just likes. Get real-time reactions to your jokes.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4">
            <h1 className="d-none d-sm-block">How It Works</h1>
            <h1 className="d-sm-none only-show-on-mobile">How It Works</h1>
            <div className="our-work">
              <video
                autoPlay
                muted
                loop
                playsInline
                webkit-playsinline
                className="our-work-img"
              >
                <source src="/assets/videos/howitworks3.mp4" type="video/mp4" />
              </video>
              <div className="text-letter">
                <h3>3</h3>
              </div>
            </div>
            <div className="caption">
              <h2>Feel Great</h2>
              <p>
                You can’t help but smile when you see people smiling and
                laughing at your jokes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid d-none d-sm-block">
        <div className="bottom-btn d-md-flex d-sm-block">
          <a href="#" className="btn-download">
            Download Now
            <div className="span-wrapper">
              <span className="s1"></span>
              <span className="s2"></span>
              <span className="s3"></span>
            </div>
            <span>
              <Image src={iconArrow} alt="Arrow" /> {/* Using Next.js Image component for the icon */}
            </span>
          </a>
          <div className="text-bottom">
            {/* Decide how you want to play it. Share your reactions to let others
            know what cracked you up, or keep it to yourself. It’s all up to
            you. */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;
