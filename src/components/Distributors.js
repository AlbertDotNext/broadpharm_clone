import React, { useEffect } from 'react';
import Viet from '../assets/viet.png';
import SouthKorea from '../assets/southkorea.jpeg';
import China from '../assets/China.jpeg';
import Aus from '../assets/aus.jpeg';
import JPN from '../assets/Japan.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Distributors.css';

const Distributors = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="Distributors">
      <div data-aos="fade-left" className="Distributors-Title">
        <h3>Distributors</h3>
      </div>
      <div data-aos="fade-up" className="logos">
        <div className="logo1">
          <div className="item">
            <img src={Viet} alt="" />
          </div>
          <p>Vietnam</p>
        </div>
        <div className="logo1">
          <div className="item">
            <img src={JPN} alt="" />
          </div>
          <p>Japan</p>
        </div>
        <div className="logo1">
          <div className="item">
            <img src={SouthKorea} alt="" />
          </div>
          <p>South Korea</p>
        </div>
        <div className="logo1">
          <div className="item">
            <img src={China} alt="" />
          </div>
          <p>China</p>
        </div>
        <div className="logo1">
          <div className="item">
            <img src={Aus} alt="" />
          </div>
          <p>Australia</p>
        </div>
      </div>

      <div data-aos="fade-right" className="logo-button">
        <a href="#">VIEW ALL DISTRIBUTORS</a>
      </div>
    </div>
  );
};

export default Distributors;
