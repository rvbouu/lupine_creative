import "../assets/HomePage.css"
import  '../lib/dataset.json'
import "react-alice-carousel/lib/alice-carousel.css"
import React from 'react';
import AliceCarousel from 'react-alice-carousel';

const handleDragStart = (e) => e.preventDefault();

const items = [
	<img className="cimage" src="/earring.images/70smom.jpeg" onDragStart={handleDragStart} role="presentation" />,
	<img className="cimage" src="/earring.images/purpletigerdoublemoon.jpeg" onDragStart={handleDragStart} role="presentation1" />,
	<img className="cimage" src="/model.images/pinkmoontriangle.jpeg" onDragStart={handleDragStart} role="presentation2" />,
    <img className="cimage" src="/earring.images/purpletigerpurple.jpeg" onDragStart={handleDragStart} role="presentation3" />,
    <img className="cimage" src="/earring.images/leathersungrey.jpeg" onDragStart={handleDragStart} role="presentation4" />,
    <img className="cimage" src="/earrings.images/blackbettycollection.jpeg" onDragStart={handleDragStart} role="presentation6" />,
    <img className="cimage" src="/model.images/blueberrydia.JPG" onDragStart={handleDragStart} role="presentation7" />,
    <img className="cimage" src="/earring.images/goldjungle.jpeg" onDragStart={handleDragStart} role="presentation8" />,
    <img className="cimage" src="/model.images/bluemedusa.JPG" onDragStart={handleDragStart} role="presentation9" />,
    <img className="cimage" src="/earrings.images/blackbettyshort.jpeg" onDragStart={handleDragStart} role="presentation5" />,
  ];

  
const Gallery = () => (
        <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
            autoWidth  
            infinite
            autoPlay
            autoPlayControls
            autoPlayStrategy="none"
            autoPlayInterval={1000}
            animationDuration={1000}
            // animationType="fadeout"
            // touchTracking={false}
            disableDotsControls
            disableButtonsControls
        />
    );

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };


export default function HomePage() {


    return (
        <>
        <div id= "homepage">
            <div className='first-view'>
                <div className="box boxL">"My friends love my gifts now that I buy them from Lupine Creative!!!!!"<br></br>-Harper from IA</div>
                <img className="image" src= "/model.images/favs.JPG"/>
                <div className="box boxR">"I love Everything Maggie makes! I am constantly getting complements on her pieces!!!" <br></br>-Sherry from AZ </div>
            </div>
            <div className="banner">Explore Our Artisian Handmade Crafts!!</div>
            
          {/* <div className="gallery"> */}
            <div className="carousel">
             {Gallery()}
            </div>
        </div>
           {/* </div> */}
        </>
    )
}
