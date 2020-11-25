import React, {useEffect} from 'react';
import './SecondContent.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SecondContent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])
  return (
    <div className="Second-Content">
      <div data-aos="fade-right" className="SecondContent-title">
        <h3 >PEG Applications</h3>
      </div>
      <div data-aos="fade-up" className="animate-items">
        <div className="B1">
          <a href="https://www.broadpharm.com/web/products.php?category1=PEG+Linkers">
            <figure>
              <div className="icon1">
                <img src="https://www.broadpharm.com/public/images/pegylation-icon.png"/>
              </div>
              <figcaption>
              EGylation of Protein, Peptide &
              Oligonucleotide
              </figcaption>
            </figure>
          </a>
        </div>
        <div className="B1">
          <a href="https://www.broadpharm.com/web/products.php?category1=ADC+Linkers">
              <figure>
                <div className="icon1">
                  <img src="https://www.broadpharm.com/public/images/adc-conjugation-icon.png"/>
                </div>
                <figcaption>
                Antibody Drug Conjugation
                </figcaption>
              </figure>
            </a>
        </div>
        <div className="B1">
          <a href="https://www.broadpharm.com/web/products.php?category1=Dye+Labeling">
                <figure>
                  <div className="icon1">
                    <img src="https://www.broadpharm.com/public/images/fluorescent-labeling-icon.png"/>
                  </div>
                  <figcaption>
                  Fluorescent Labeling
                  </figcaption>
                </figure>
              </a>
        </div>
        <div className="B1">
        <a href="https://www.broadpharm.com/web/products.php?category1=PEG+Linkers">
                <figure>
                  <div className="icon1">
                    <img src="https://www.broadpharm.com/public/images/drug-delivery-icon.png"/>
                  </div>
                  <figcaption>
                  Drug Delivery
                  </figcaption>
                </figure>
              </a>
        </div>
        <div className="B1">
        <a href="https://www.broadpharm.com/web/products.php?category1=PEG+Linkers">
                <figure>
                  <div className="icon1">
                    <img src="https://www.broadpharm.com/public/uploads/product_application_one_images/surface-modification-icon-samp-1591313613.png"/>
                  </div>
                  <figcaption>
                  Surface Modification
                  </figcaption>
                </figure>
              </a>
        </div>
        <div className="B1">
        <a href="https://www.broadpharm.com/web/products.php?category1=Biotin+Labeling">
                <figure>
                  <div className="icon1">
                    <img src="https://www.broadpharm.com/public/images/biotinylation-icon.png"/>
                  </div>
                  <figcaption>
                  Biotinylation
                  </figcaption>
                </figure>
              </a>
        </div>
      </div>

      <div data-aos="fade-left" className="SC-Button">
        <p>
          <a href="https://www.broadpharm.com/products">VIEW ALL PRODUCTS</a>
        </p>
      </div>
    </div>
  )
}

export default SecondContent;