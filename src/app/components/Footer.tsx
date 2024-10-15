import React from "react";
import Image from "next/image";
import footerLogo from "@image/logo.png";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="custom-container">
        <h1 className="d-none d-sm-block">
          <span>©</span>2024 A social company
        </h1>
        <h2 className="mr-2">
          <a href="mailto:hello@smilesocialmedia.com">Contact us</a>
        </h2>
        <small className="d-sm-none">
          <span>©</span>2024 A social company
        </small>
        <Image src={footerLogo} className="footer-logo d-none d-sm-block" alt="" />
      </div>
    </div>
  );
};

export default Footer;
