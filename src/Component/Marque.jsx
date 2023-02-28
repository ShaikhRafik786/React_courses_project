import React from 'react';
import { Carousel } from 'react-bootstrap';

const Marque = () => {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src=" https://blog.hubspot.com/hubfs/Site%20owners%20building%20carousel%20slider%20in%20Bootstrap%20CSS.jpg"
              alt="First slide"
              onTimeUpdate="2000second"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://mdbcdn.b-cdn.net/img/Marketing/mdb-press-pack/mdb-main.webp "
              alt="Second slide"
              onTimeUpdate="2second"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://tailwindcomponents.com/storage/cUFUHpSoR6akDEswCHSoTVsEoCE8a1iSWZ4dQ3MS.jpg"
              alt="Third slide"
              onTimeUpdate="2second"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
};

export default Marque;