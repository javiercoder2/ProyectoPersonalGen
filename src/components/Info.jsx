import React from "react";
import "./Me.css";
import AboutImg1 from "../img/profesional.jpeg";
import AboutImg2 from "../img/profesional.jpeg";
import AboutImg3 from "../img/profesional.jpeg";

function Info() {
  return (
    <div className="about__info grid">
      <div className="about__box">
<img src={AboutImg1} alt="" className="about__img" />

      <h3 classname="about__title">VideoGames</h3>
        <span className="about__subtitle">Gaming Consoles and PC</span>
        <p className="InfoHobbie">
          I play videogames since I have memory. I know a lot about them and the way they've evolved through the years. They give me the an interaction with computer in a user level. I learned English and a little bit of French from them. Also, deeveloping strategies and critical thinking.
        </p>
        </div>

        <div className="about__box">
        <img src={AboutImg2} alt="" className="about__img" />

        <h3 classname="about__title">Technology</h3>
        <span className="about__subtitle">Communication, science and Ethics</span>
        <p className="InfoHobbie">
        Cultural, perseverant and detailed-oriented are part of what I've become due to learning about Technology (in all its perspectives) such as repairing computers, manage one's computer, gaming consoles, etc. Besides, I love getting the knowledge of the new advanced-stuff which can make our lives easier which I usually read and watch some videos about that.
        </p>
        </div>

        <div className="about__box">
        <img src={AboutImg3} alt="" className="about__img" />

        <h3 classname="about__title">Saint Seiya</h3>
        <span className="about__subtitle">Collector and Fans</span>
        <p className="InfoHobbie">
        Since I was a little boy I'm in love with Saint Seiya (Los Caballeros del Zodiaco in Spanish) because of the story, armor, strategies applied into the plot and the battles. And through the years I've made of myself a Saint Seiya figure's Collector. I developed time-efficiency, effort, responsability among other personal features in order to maintain them, buy them, and of course, to appreciate them.
        </p>
        </div>
    </div>

  );
}

export default Info;
