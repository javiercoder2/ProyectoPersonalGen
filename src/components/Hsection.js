import React from "react";
import './Boton2.css';
import {Button} from './Boton2';
import './Hsection.css';

function Hsection() {
  return (
    <div className ='hero-container'>
      <video src="/video2.mp4"autoPlay loop muted />

      <h1>Javier Ignacio Matias Sepulveda Ojeda</h1>
      <p>Contact Me and do some amazing things together!</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Starting
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
        Watch an Intro of Me <i className='far fa-play-circle'/>
        </Button>
        ;
      </div>
    </div>
  );
}

export default Hsection;
