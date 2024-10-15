import React from "react";
import Image from "next/image";
import iconArrow from "@image/icon-arrow.png";
import iphoneImage1 from "@image/iphone3.png";
import iphoneImage2 from "@image/iphone4.png";
import iphoneImage3 from "@image/iphone2.png";

const LifeSection: React.FC = () => {
  return (
    <div className="your-life">
      <div className="container-fluid">
        <div className="life-flex">
          <div>
            <h1>YOUR LIFE ISn’t A JOKE</h1>
          </div>
          <div>
            <h3>Share more than just your comedy</h3>
            <p>
              Let people in and build stronger relationships. People will come
              to your shows not ONLY because you're funny, but because they know
              and like you.
            </p>
            <div className="d-flex">
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
                  <Image src={iconArrow} alt="Arrow" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="row life-img px-0 px-sm-5">
          <div className="col-lg-4 col-sm-4">
            <Image src={iphoneImage1} alt="" layout="responsive" /> {/* Using Next.js Image component */}
          </div>
          <div className="col-lg-4 col-sm-4">
            <Image src={iphoneImage2} alt="" layout="responsive" /> {/* Using Next.js Image component */}
          </div>
          <div className="col-lg-4 col-sm-4">
            <Image src={iphoneImage3} alt="" layout="responsive" /> {/* Using Next.js Image component */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeSection;
