import React, { useEffect } from 'react';
import './ThirdContent.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ThirdContent = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="container">
      <div className="ThirdContent">
        <div className="video-sec" data-aos="fade-right">
          <div className="VideoSec">
            <iframe
              src="https://www.youtube.com/embed/VHmP0J3SR_M"
              frameborder="0"
              alow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              alowfullscreen
            ></iframe>
          </div>
        </div>
        <div data-aos="fade-left" className="text-field">
          <div className="TC-Title">
            <h3>What is PEG and PEGylation?</h3>
            <p>---------</p>
            <p>
              PEGylation is the process of attachment of PEG chains to molecules
              and macrostructures, such as a drug, therapeutic protein or
              vesicle, which is then described as PEGylated. PEGylation is
              routinely achieved by incubation of a reactive derivative of PEG
              with the target molecule. The covalent attachment of PEG of a
              drug...
            </p>
          </div>
          <div className="row">
            <div className="button-1">
              <button>READ MORE</button>
            </div>
            <div className="button-2">
              <button>VIEW ALL BLOGS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdContent;
