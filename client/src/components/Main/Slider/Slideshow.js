import React from 'react';
import { Zoom } from 'react-slideshow-image';

const images = [
    'http://localhost:3000/images/scuba_diving.jpg',
    'http://localhost:3000/images/zip.jpg',
    'http://localhost:3000/images/rafting.jpg'
];

const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
}

const Slideshow = () => {
    return (
        <Zoom {...zoomOutProperties}>
            {
                images.map((each, index) => <img key={index} style={{ width: "100%" }} src={each} alt="" />)
            }
        </Zoom>
    )
}

export default Slideshow;