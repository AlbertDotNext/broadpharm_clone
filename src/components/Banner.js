import React from 'react';
import Img1 from '../assets/img1.png';
import Img2 from '../assets/img2.png';
import Img3 from '../assets/img3.png';
import Linkers from '../assets/hp-peg-linkers.png';
import Shipping from '../assets/shipping.png';
import Stock from '../assets/stock.png';
import Vial from '../assets/vial.png';
import './Banner.css';
import Carousel from 'react-bootstrap/Carousel';

function Banner() {
  return (
    <div className="Banner">
      <div className="Banner-Major">
        <Carousel
          nextIcon={<span aria-hidden="true" className="" />}
          prevIcon={<span aria-hidden="true" className="" />}
        >
          <Carousel.Item>
            <img className="d-block w-100" src={Img1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Img2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Img3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="Banner-Secondary">
        <div className="Banner-item">
          <p>
            <img src={Linkers} />
            4,000+ High Purity PEG Linkers
          </p>
        </div>
        <div className="Banner-item">
          <p>
            <img src={Stock} />
            In Stock
          </p>
        </div>
        <div className="Banner-item">
          <p>
            <img src={Shipping} />
            Overnight Shipping
          </p>
        </div>
        <div className="Banner-item">
          <p>
            <img src={Vial} width="40" height="30" />
            New Products
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
