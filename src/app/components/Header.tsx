'use client'
import React from "react";
import Image from "next/image";
import iconArrow from "@image/icon-arrow.png";

const Header: React.FC = () => {
  return (
    <div className="header-top navbar-fixed-top pt-4">
      <div className="container-fluid header-wrapper">
        <div className="header-flex">
          <div className="logo">
            <a href="/">
              <img src='/assets/images/logo.png' alt="Smile Logo" />
            </a>
          </div>
          <div className="d-flex">
            <a href="mailto:hello@smilesocialmedia.com" className="header-btn">
              Team Up
              <div className="span-wrapper">
                <span className="s1"></span>
                <span className="s2"></span>
                <span className="s3"></span>
              </div>
              <span>
                <img
                  src="/assets/images/icon-arrow.png"
                  alt="Arrow"
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
