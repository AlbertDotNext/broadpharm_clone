import React from 'react';
import {Carousel } from 'react-bootstrap';
import Img1 from '../img1.png'
import Img2 from '../img2.png'
import Img3 from '../img3.png'
import './Banner.css';

function Banner() {
  return (
    <div className="Banner">
      <div className="Banner-Major">

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Img1}
              alt="First slide"
            />

          </Carousel.Item>
          <Carousel.Item>
           <img
            className="d-block w-100"
            src={Img2}
            alt="Second slide"
          />


        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img3}
            alt="Third slide"

          />


        </Carousel.Item>
      </Carousel>
      </div>
      <div className="Banner-Secondary">
        <div className="Banner-item">
          <p>

            <img src="https://www.broadpharm.com/public/images/hp-peg-linkers.png"/>
            4,000+ High Purity PEG Linkers
          </p>

        </div>
        <div className="Banner-item">
          <p>

            <img src="https://www.broadpharm.com/public/images/stock.png"/>
            In Stock
          </p>

        </div>
        <div className="Banner-item">
          <p>

            <img src="https://www.broadpharm.com/public/images/shipping.png"/>
            Overnight Shipping
          </p>

        </div>
        <div className="Banner-item">
          <p>

            <img src="https://www.broadpharm.com/public/uploads/page_section_images/vial-solid-grey-1580511879.png" width="40" height="30"/>
            New Products
          </p>

        </div>

      </div>
    </div>
  )
}

export default Banner;