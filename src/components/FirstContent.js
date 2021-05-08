import React from 'react';
import PEG from '../assets/PEG-Linkers.png';
import Fluor from '../assets/fluorescent.png';
import Biotiny from '../assets/biotinylation.png';
import './FirstContent.css';

function FirstContent() {
  return (
    <div className="Main-content">
      <div classNmae="text">
        <h5>
          BroadPharm is a leading customer-focused biotech company. We are
          dedicated to manufacturing and supplyuing high purity PEG Linkers,
          Click Chemistry Tools, ADC Linkers, and biolabeling reagents to our
          clients worldwide.
        </h5>
      </div>
      <div className="block-items">
        <div className="Box1">
          <a href="#">
            <figure>
              <figcaption>
                <h6>PEG Linkers</h6>
                <div className="image-background">
                  <img src={PEG} width="200" />
                </div>

                <p>
                  Over 4,000 high purity PEG reagents kept in stock to empower
                  your PEGylation, bioconjugation, crosslinking, ADC drug
                  development, biolabeling for pharmaceutical and biotech R&D.
                </p>
              </figcaption>
            </figure>
          </a>
        </div>

        <div className="Box1">
          <a href="#">
            <figure>
              <figcaption>
                <h6>Click Chemistry</h6>
                <div className="image-background">
                  <img src={Fluor} width="200" />
                </div>

                <p>
                  Over 500 high purity Click Chemistry tools kept in stock with
                  a broad range of functional groups, including DBCO, Azide,
                  Alkyne, BCN, TCO and Tetrazine.
                </p>
              </figcaption>
            </figure>
          </a>
        </div>
        <div className="Box1">
          <a href="#">
            <figure>
              <figcaption>
                <h6>Fluorescent Labeling</h6>
                <div className="image-background">
                  <img src={Biotiny} width="250" height="130" />
                </div>

                <p>
                  Fluorescent dyes containing a large variety of functional
                  groups and different length of PEG spacer for increased water
                  solubility. Enable efficient biolabeling in imaging and
                  diagnostic R&D.
                </p>
              </figcaption>
            </figure>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FirstContent;
