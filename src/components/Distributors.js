import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Distributors.css';

const Distributors = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])
  return (
    <div className="Distributors">
      <div data-aos="fade-left" className="Distributors-Title">
        <h3>Distributors</h3>
      </div>
      <div data-aos="fade-up" className="logos">
        <div className="logo1">
          <div className="item">
            <img src="https://www.broadpharm.com/public/images/distributors/truongbio_logo.png" />
          </div>
          <p>Vietnam</p>
        </div>
        <div className="logo1">
          <div className="item">
            <img src="https://www.broadpharm.com/public/images/distributors/shigematsucoltd_logo.png" />
          </div>
          <p>Japan</p>
        </div>
        <div className="logo1">
          <div className="item">
            <img src="https://www.broadpharm.com/public/images/distributors/sambo_logo.png" />
          </div>
          <p>South Korea</p>
        </div>
        <div className="logo1">
          <div className="item">
            <img src="https://www.broadpharm.com/public/images/distributors/china_qwbio_logo.png" />
          </div>
          <p>China</p>
        </div>
        <div className="logo1">
          <div className="item">
            <img src="https://www.broadpharm.com/public/images/distributors/australia_assaymatrix_logo.png" />
          </div>
          <p>Australia</p>
        </div>
      </div>


      <div data-aos="fade-right" className="logo-button">
        <a href="https://www.broadpharm.com/distributors">VIEW ALL DISTRIBUTORS</a>
      </div>
    </div>
  )
}

export default Distributors;