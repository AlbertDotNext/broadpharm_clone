import React, { useEffect } from 'react';
import PegylationIcon from '../assets/pegylation-icon.png';
import AdcIcon from '../assets/adc-linkers-icon.png';
import DrugIcon from '../assets/drug-delivery-icon.png';
import FluorescentIcon from '../assets/fluorescent-dye-icon.png';
import ProtacIcon from '../assets/protac-icon.png';
import Kitsion from '../assets/kits-icon.png';
import './SecondContent.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SecondContent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="Second-Content">
      <div data-aos="fade-right" className="SecondContent-title">
        <h3>PEG Applications</h3>
      </div>
      <div data-aos="fade-up" className="animate-items">
        <div className="B1">
          <a href="#">
            <figure>
              <div className="icon1">
                <img src={PegylationIcon} alt="" />
              </div>
              <figcaption>
                EGylation of Protein, Peptide & Oligonucleotide
              </figcaption>
            </figure>
          </a>
        </div>
        <div className="B1">
          <a href="#">
            <figure>
              <div className="icon1">
                <img src={AdcIcon} alt="" />
              </div>
              <figcaption>Antibody Drug Conjugation</figcaption>
            </figure>
          </a>
        </div>
        <div className="B1">
          <a href="#">
            <figure>
              <div className="icon1">
                <img src={FluorescentIcon} alt="" />
              </div>
              <figcaption>Fluorescent Labeling</figcaption>
            </figure>
          </a>
        </div>
        <div className="B1">
          <a href="#">
            <figure>
              <div className="icon1">
                <img src={DrugIcon} alt="" />
              </div>
              <figcaption>Drug Delivery</figcaption>
            </figure>
          </a>
        </div>
        <div className="B1">
          <a href="#">
            <figure>
              <div className="icon1">
                <img src={ProtacIcon} alt="" width="80" />
              </div>
              <figcaption>PROTAC</figcaption>
            </figure>
          </a>
        </div>
        <div className="B1">
          <a href="#">
            <figure>
              <div className="icon1">
                <img src={Kitsion} alt="" height="80" />
              </div>
              <figcaption>Conjugation and Crosslinking Kits</figcaption>
            </figure>
          </a>
        </div>
      </div>

      <div data-aos="fade-left" className="SC-Button">
        <p>
          <a href="#">VIEW ALL PRODUCTS</a>
        </p>
      </div>
    </div>
  );
};

export default SecondContent;
