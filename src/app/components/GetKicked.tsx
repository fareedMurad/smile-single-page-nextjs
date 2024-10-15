import React from "react";
import Image from "next/image";
import ImageCoursel from "./ImageCoursel";
import iconArrow from "@image/icon-arrow.png";

const GetKicked: React.FC = () => {
  return (
    <div className="get-kicked">
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-sm-3 col-lg-5 col-sm-6 mx-md-0 mx-lg-2"
            style={{ zIndex: 3 }}
          >
            <h1>
              Hecklers <br />
              get Kicked <br />
              Out
            </h1>
            <h2>
              Our platform is built to support{" "}
              <br className="d-none d-2xl-block" /> mental health and
              creativity. No <br className="d-none d-2xl-block" />
              hecklers, no trolls—just pure,{" "}
              <br className="d-none d-2xl-block" /> unadulterated comedy. Enjoy
              a <br className="d-none d-xl-block" /> safe space where you can
              <br className="d-none d-xl-block" /> express yourself and
              <br className="d-none d-xl-block" /> appreciate others' humor
              <br className="d-none d-xl-block" />
              without negativity.
            </h2>
            <div className="d-flex button-wrapper d-none d-sm-block">
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
            </div>
          </div>
          <div className="col-sm-9 col-lg-6 col-sm-6">
            <div className="image-coursel">
              <ImageCoursel />
            </div>
            <p className="mt-3 d-none d-sm-block">
              Your mental health matters more to us than a troll..so
              <br className="d-none d-xl-block" />
              we send 'em packing
            </p>
          </div>
        </div>
        <div className="d-sm-none mt-3">
          <p className="mt-3">
            Your mental health matters more to us than a troll..so we send 'em
            packing
          </p>
          <div className="d-flex button-wrapper">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetKicked;
