import React from "react";
import Image from "next/image";
import downloadArrow from '@image/icon-arrow.png';

const SmileSection: React.FC = () => {
  return (
    <div className="smile-section-wrapper">
      <div className="smile-section container-fluid position-relative">
        <div className="sticky d-none d-sm-block">
          <h1>
            Hi, we’re <span>SMILE</span>
          </h1>
        </div>

        <div className="postion-relative">
          <div className="iphone-center-wrapper">
            <div className="sticky d-sm-none">
              <h1>
                Hi, we’re
                <br />
                <span>SMILE</span>{" "}
              </h1>
            </div>
            <div className="iphone-center">
              <img src='/assets/images/iphone.png' alt="iPhone" />
              <img
                src='/assets/images/clip9-unscreen.gif'
                alt="loughing gif"
                className="loughing-gif"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-sm-6">
            <img
              src="/assets/images/img1.png"
              alt="Welcome to Smile platform on desktop"
              className="smile-section-img d-none d-sm-block"
            />
            <img
              src="/assets/images/how-it1-mobile.png"
              alt="Welcome to Smile platform on mobile"
              className="smile-section-img d-sm-none"
            />
            <div className="smile-1 d-none d-sm-block">
              <h2>
                Welcome to <span>Smile,</span> the{" "}
                <span className="text-decoration-line-through">social</span> media platform where comedy meets genuine audience engagement.
              </h2>
            </div>
          </div>

          <div className="col-lg-6 col-sm-6 d-none d-sm-block">
            <img src="/assets/images/img2.png" alt="Engaging audience on Smile platform" className="smile-section-img" />
            <div className="smile-1 d-block d-sm-none">
              <h2>
                Welcome to <span>Smile,</span> the{" "}
                <span className="text-decoration-line-through">social</span> media platform where comedy meets genuine audience engagement.
              </h2>
            </div>
            <div className="smile-2">
              <h2>
                Our unique feature allows you to hear real-time laughter and see authentic smiles, creating a truly interactive experience.
              </h2>
              <p>
                Whether you're an aspiring comedian or an established performer, <span>Smile</span> offers a vibrant space to share your humor and connect with fans.
              </p>
              <div className="d-flex">
                <a href="#" className="btn-download">
                  Download Now
                  <div className="span-wrapper">
                    <span className="s1"></span>
                    <span className="s2"></span>
                    <span className="s3"></span>
                  </div>
                  <span>
                    <img src="/assets/images/icon-arrow.png" alt="Download Arrow" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-sm-none px-3 mobile-content">
        <div className="smile-1 d-block d-sm-none">
          <h2 className="pt-0">
            Welcome to <span>Smile,</span> the{" "}
            <span className="text-decoration-line-through">social</span> media platform where comedy meets genuine audience engagement.
          </h2>
        </div>
        <div className="smile-2">
          <h2 className="pt-3">
            Our unique feature allows you to hear real-time laughter and see authentic smiles, creating a truly interactive experience.
          </h2>
          <p>
            Whether you're an aspiring comedian or an established performer, <span>Smile</span> offers a vibrant space to share your humor and connect with fans.
          </p>
          <div className="d-flex">
            <a href="#" className="btn-download">
              Download Now
              <div className="span-wrapper">
                <span className="s1"></span>
                <span className="s2"></span>
                <span className="s3"></span>
              </div>
              <span>
                <img src="/assets/images/icon-arrow.png" alt="Download Arrow" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmileSection;
