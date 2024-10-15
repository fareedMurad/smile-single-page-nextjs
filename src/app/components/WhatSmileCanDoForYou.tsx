import React from "react";
import Image from "next/image";
import emoji from "@image/smilewordwhitw.svg";
import image11 from "@image/image 11.png";

const WhatSmileCanDoForYou: React.FC = () => {
  const list = [
    {
      title: "GET MORE FANS",
      desc: "We front load the funniest and most active people ",
    },
    {
      title: "GET MORE LAUGHS",
      desc: "When you tell a joke you get to hear people’s real laughs and see their smiles ",
    },
    {
      title: "GET MORE MONEY",
      desc: "Our early partners are the first to get monetized and paid ",
    },
    {
      title: "GET DISCOVERED",
      desc: "It’s not about who you can see, it’s about who can see you",
    },
    {
      title: "GET CONNECTED",
      desc: "Be invited to exclusive and fun events",
    },
    {
      title: "MOST IMPORTANTLY...",
      desc: "Feel fucking great, your mental health thanks you",
    },
  ];

  const mobList = [
    {
      title: "GET MORE FANS",
      desc: "We frontload the funniest and most active people ",
    },
    {
      title: "GET MORE LAUGHS",
      desc: "When you tell a joke you get to hear people’s real laughs and see their smiles ",
    },
    {
      title: "GET MORE MONEY",
      desc: "Our early partners are the first to get monetized and paid ",
    },
    {
      title: "GET DISCOVERED",
      desc: "It’s not about who you can see, it’s about who can see you",
    },
    {
      title: "GET CONNECTED",
      desc: "Be invited to exclusive and fun events",
    },
    {
      title: "FEEL FUCKING GREAT",
      desc: "Your mental health thanks you.",
    },
  ];
  return (
    <>
    <div className="what-smile-can-do d-none d-sm-block">
      <div className="container-fluid">
        <div className="content-box">
          <h1>
            WHAT <div className="text-with-emoji d-inline">{" "}<Image src={emoji} alt="emoji" layout="responsive" />{" "}</div> CAN DO FOR YOU
          </h1>
          <div className="items">
            {list.map((li) => (
              <div className="item" key={li.title}>
                <h3>{li.title}</h3>
                <p>{li.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    {/* <Image src={image11} alt="image11" layout="responsive" className="d-sm-none" /> */}
    <div className="d-sm-none mob-what-smile-can-do">
      <div className="title-wrapper">
        <h1>
            WHAT <div className="text-with-emoji d-inline">{" "}<span>SMILE</span>{" "}</div> CAN DO FOR YOU
          </h1>
      </div>
      {mobList.map((li, i) => (
        <div className={`mob-item mob-item-${i+1}`} key={li.title}>
            <h3>{li.title}</h3>
            <p>{li.desc}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default WhatSmileCanDoForYou;
