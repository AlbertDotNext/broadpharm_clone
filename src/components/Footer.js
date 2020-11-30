import React from 'react';
import './Footer.css';
import logo from '../logo.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer_logo">
        <div className="column-info-fotter-contact">
          <img src={logo} className="footer-logo"/>
          <p>
            6625 Top Gun Street, Suite 103 San Diego, CA 92121
          </p>
          <ul>
            <li>P: 858-677-6760</li>
            <li>F: 858-677-6762</li>
            <li>E: sales@broadpharm.com</li>
          </ul>
        </div>
        <div className="column-info">
          <h6>Categories</h6>
          <ul>
            <li>PEG Linkers</li>
            <li>Click Chemistry</li>
            <li>Biotinylation</li>
            <li>Fluorescent Labeling</li>
            <li>General Reagents</li>
            <li>ADC Linkers</li>
          </ul>
        </div>
        <div className="column-info">
          <h6>Applications</h6>
          <ul>
            <li>PEGylation of Protein, Peptide & Oligonucleotide</li>
            <li>Antibody Drug Conjugates</li>
            <li>Fluorescent Labeling</li>
            <li>Drug Delivery</li>
            <li>Surface Modification</li>
            <li>Biotinylation</li>
          </ul>
        </div>
        <div className="column-info">
        <h6>Technical</h6>
          <ul>
            <li>Protocols</li>
            <li>QA/QC</li>

          </ul>
        </div>
        <div className="column-info">
        <h6>About</h6>
          <ul>
            <li>Company Info</li>
            <li>Newsroom</li>
            <li>Blog</li>
            <li>Customer Reviews</li>
            <li>Careers</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
      <div className="bottom-content">
        <div className="copyright">
          <p>2020 © Copyrights BroadPharm. All Rights Reserved.</p>
          <p>Reproduction of any materials from the site is strictly forbidden without permission.</p>
        </div>
        <div className="social-media">
          <ul>
            <li><FacebookIcon/></li>
            <li><TwitterIcon/></li>
            <li><LinkedInIcon/></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;