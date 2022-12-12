import React from "react";
import video from "./../Assets/video.mp4";
import "./Boton.css";


const BackgroundComponent = ()=> {
    return(
    <><div className='main'>
            <div class="overlay"></div>
            <video src={video} autoPlay loop muted />
            <div className="content">
                <h1>Welcome to CarLand</h1>
                <h4>The place where no car goes</h4>
                <br></br>
            <h5>In this WebPage you will be able to check everything related to your own</h5>
            
            </div>

        </div><div className="botonback" class="d-grid gap-2 d-md-block">
                <button class="botonback" type="button">
                    Haz Click Aqui para Ingresar
                </button>
            </div></>
    )
}
export default BackgroundComponent;