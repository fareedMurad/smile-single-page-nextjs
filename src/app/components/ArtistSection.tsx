import React from "react";
import Image from "next/image";
import artistImage from "@image/artist.png";

const ArtistSection: React.FC = () => {
  return (
    <div className="artist-section">
      <div className="container-fluid custom-container">
        <div className="artist-heading">
          <h1>
            Built by
            <br className="d-sm-none" /> artists
            <br className="d-sm-none" />{" "}
            <span className="block d-none d-sm-block"></span> for artists
          </h1>
        </div>
        <div className="artist-img">
          <Image src={artistImage} alt="artist" layout="responsive" /> {/* Using Next.js Image component */}
          <p>*tech bros and nerds not included</p>
        </div>
      </div>
    </div>
  );
};

export default ArtistSection;
