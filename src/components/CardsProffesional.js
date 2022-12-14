import React from "react";
import Card from "./Card";
import background from "../img/background.jpg";
import user from "../img/user.png";
import "./CardsProffesional.css";

const card = [
  {
    id: 1,
    title: "Normet Chile",
    image: background,
    url: "https://www.normet.com/es/sobre-nosotros/",
    text: 'I worked as an International Sales Assistant in this minning company for more than 2 years getting everything ready to import the items according to the international laws and structures. Here, I had to get in contact everyday with customers in different languages, mainly English and Portuguese ',
    
},
  {
    id: 2,
    title: "Poliglota SPA",
    image: background,
    url: "https://www.poliglota.org/cl/",
    text: 'Teaching English was my role where I had to go to certain places to teach a group of students (managers, assistant managers, leads, etc.). Most of the time classes were imparted in Falabella Holding, Davila, Condor Bus, among other companies',
  },
  {
    id: 3,
    title: "Museo Pablo Neruda",
    image: user,
    url: "https://fundacionneruda.org/casas-museo/",
    text: 'Managing people was the fundamental role in this company where I needed to give information to certain tourists who want to take a tour around former Pablo Nerudas` house. The main goal was to communicate everything a person needs to know in his/her own language predominantly. That`s why English, Portuguese and French were neccesary to speak. ',
  },
];

function CardsProfessional() {
    
        
    
  return (
<div id='contain'>
    <div  className="container d-flex justify-content-center align-items-center h-100">
      <div id='carta2' className="row">
        {card.map(({ title, image, url, id, text }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} text = {text} />
          </div>
        ))}
      </div>
    </div>
</div>
  );
}

export default CardsProfessional;