import React from "react";
import "./Me.css";
import AboutImg from "../img/profesional.jpeg";

function Info() {
  return (
    <div className="about__info grid">
      <div className="about__box">
<img src={AboutImg} alt="" className="about__img" />

      <h3 classname="about__title">VideoGames</h3>
        <span className="about__subtitle">Gaming Consoles and PC</span>
        </div>

        <div className="about__box">
        <img src={AboutImg} alt="" className="about__img" />

        <h3 classname="about__title">Technology</h3>
        <span className="about__subtitle">Communication, science and Ethics</span>
        </div>

        <div className="about__box">
        <img src={AboutImg} alt="" className="about__img" />

        <h3 classname="about__title">Saint Seiya</h3>
        <span className="about__subtitle">Collector and Fans</span>
        </div>
    </div>

  );
}

export default Info;
