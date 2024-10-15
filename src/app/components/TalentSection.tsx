import React from "react";
import Image from "next/image";
import followerImg from "@image/follower.png";
import followerImg2 from "@image/follower2.png";
import heartsImg from "@image/hearts.png";
import IconArrow from "@image/icon-arrow.png";

const TalentSection: React.FC = () => {
  return (
    <div className="talent-section">
      <div className="custom-container">
        <div className="row row0">
          <div className="d-flex justify-content-between talent-section-title-wrapper">
            <div className="talent-section-title">
              <h1>Talent</h1>
            </div>
            <div className="talent-section-title">
              <h1 className="text-end">Matters</h1>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4">
            <div className="text-box">
              <h3>Not numbers</h3>
              <p>
                At Smile, we believe in showcasing genuine talent, not just
                follower counts. Whether you're a rising star or an established
                comedian, your creativity and skill are what truly count here.
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
                    <Image src={IconArrow} alt="Arrow" width={24} height={24} />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-sm-8">
            <div className="inner-row row gap-2 flex-sm-nowrap">
              <div className="col-lg-6 col-sm-6 p-0 position-relative">
                <Image
                  src={followerImg}
                  alt="Follower Count"

                />
                <span className="followers-text">4k followers</span>
                <span className="way-funnier-text">Way Funnier</span>
                <Image src={heartsImg} className="hearts" alt="hearts" />
              </div>
              <div className="col-lg-6 col-sm-6 p-0 position-relative">
                <Image
                  src={followerImg2}
                  alt="Follower Count 2"

                />
                <span className="followers-text">522k followers</span>
              </div>
            </div>
            <div className="dummy-space" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentSection;
