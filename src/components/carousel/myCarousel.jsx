 import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../images/img/carousel/Slide1.jpg";
import Slide2 from "../../images/img/carousel/Slide2.jpg";
import Slide3 from "../../images/img/carousel/Slide3.jpg";
import ScrollDown from "../scrollDown/scrollDown";
import "./carousel.style.css";

const MyCarousel = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={2500} pause={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 bg-img"
            src={Slide1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 bg-img"
            src={Slide2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 bg-img"
            src={Slide3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  );
};

export default MyCarousel;
