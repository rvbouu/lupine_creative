import "../assets/HomePage.css"
import '../lib/dataset.json'
import "react-alice-carousel/lib/alice-carousel.css"
import React from 'react';
import AliceCarousel from 'react-alice-carousel';

const Gallery = () => (
    <div className="app">
        <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
            autoWidth
            infinite
            autoPlay
            autoPlayControls ={false}
            autoPlayStrategy="none"
            autoPlayInterval={1500}
            animationDuration={1500}
            animationType="fadeout"
            touchTracking={false}
            disableDotsControls
            disableButtonsControls
            swipeDelta={10}
            swipeExtraPadding={500}
        />
    </div>
);

const handleDragStart = (e) => e.preventDefault();

const items = [
    <img className="cimage" src="/earring.images/70smom.jpeg" onDragStart={handleDragStart} role="presentation" />,
    <img className="cimage" src="/earring.images/purpletigerdoublemoon.jpeg" onDragStart={handleDragStart} role="presentation" />,
    <img className="cimage" src="/model.images/pinkmoontriangle.jpeg" onDragStart={handleDragStart} role="presentation" />,
    <img className="cimage" src="/earring.images/purpletigerpurple.jpeg" onDragStart={handleDragStart} role="presentation" />,
    <img className="cimage" src="/earring.images/leathersungrey.jpeg" onDragStart={handleDragStart} role="presentation" />,
    <img className="cimage" src="/model.images/blueberrydia.JPG" onDragStart={handleDragStart} role="presentation" />,
    <img className="cimage" src="/earring.images/goldjungle.jpeg" onDragStart={handleDragStart} role="presentation" />,
    <img className="cimage" src="/model.images/bluemedusa.JPG" onDragStart={handleDragStart} role="presentation" />,
    <img className="cimage" src="/earring.images/70smom.jpeg" onDragStart={handleDragStart} role="presentation" />,
    <img className="cimage" src="/earring.images/purpletigerdoublemoon.jpeg" onDragStart={handleDragStart} role="presentation" />,
    <img className="cimage" src="/model.images/pinkmoontriangle.jpeg" onDragStart={handleDragStart} role="presentation" />,
    <img className="cimage" src="/earring.images/purpletigerpurple.jpeg" onDragStart={handleDragStart} role="presentation" />,
    <img className="cimage" src="/earring.images/leathersungrey.jpeg" onDragStart={handleDragStart} role="presentation" />,
    <img className="cimage" src="/model.images/blueberrydia.JPG" onDragStart={handleDragStart} role="presentation" />,
    <img className="cimage" src="/earring.images/goldjungle.jpeg" onDragStart={handleDragStart} role="presentation" />,
    <img className="cimage" src="/model.images/bluemedusa.JPG" onDragStart={handleDragStart} role="presentation" />,
];

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 5 },
    1600: { items: 10 },
};

export default function HomePage() {

    return (
        <>
            <div id="homepage">
                <div className='first-view'>
                    <div className="box boxL">"My friends love my gifts now that I buy them from Lupine Creative!!!!!"<br></br>-Harper from IA</div>
                    <img className="image" src="/model.images/favs.v2.JPG" />
                    <div className="box boxR">"I love Everything Maggie makes! I am constantly getting compliments on her pieces!!!" <br></br>-Sherry from AZ </div>
                </div>
                <div className="banner">Explore Our Artisan Handmade Crafts!!</div>
                <div className="carousel">
                    {Gallery()}
                </div>
            </div>
        </>
    )
}
