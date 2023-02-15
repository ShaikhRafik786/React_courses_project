import React from "react";
import { Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";
const MyCarousel = () => {
  const carouselSelector = useSelector(
    (state) => state.carouselSelector.carouselData
  );
  return (
    <div>
      <Carousel fade>
        {carouselSelector.map((item) => {
          return (
            <Carousel.Item key={item.id}>
              <img
                className="d-block w-100"
                src={item.carouselImg}
                alt="First slide"
                height="500px"
              />
              <Carousel.Caption>
                <h4>{item.id}</h4>
                <h3>{item.carouselTitle}</h3>
                <p>{item.carouselDesc}</p>
                <img src={item.image} alt="" />
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};
export default MyCarousel;