import React from 'react';
import './ContactInfo.css';
import Phone from "@material-ui/icons/Phone";
import EmailIcon from '@material-ui/icons/Email';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HamburgerMenu from './HamburgerMenu';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

function ContactInfo(){
  return (
    <StickyHeader
    header={
      <div className="Contact">

        <div className="mobile-view-hamburger">
          <HamburgerMenu pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
        </div>

        <ul className="nav-contact">
          <li>

            <a className="nav-link" href="tel: 858-677-6760"><Phone/>858-677-6760</a>
          </li>
          <li>
            <a className="nav-link" href="mailto:sales@broadpharm.com"><EmailIcon/>sales@broadpharm.com</a>
          </li>
          <li>
            <a className="nav-link" href="https://www.broadpharm.com/web/signin.php"><LockOpenIcon/>Login</a>
          </li>
          <li className="nav-link">
            <a className="" href="https://www.broadpharm.com/carts"><ShoppingCartIcon/></a>
          </li>
        </ul>

      </div>
    }
    >

      <div className="Contact">

      <div className="mobile-view-hamburger">
        <HamburgerMenu pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
      </div>

        <ul className="nav-contact">
          <li>

            <a className="nav-link" href="tel: 858-677-6760"><Phone/>858-677-6760</a>
          </li>
          <li>
            <a className="nav-link" href="mailto:sales@broadpharm.com"><EmailIcon/>sales@broadpharm.com</a>
          </li>
          <li>
            <a className="nav-link" href="https://www.broadpharm.com/web/signin.php"><LockOpenIcon/>Login</a>
          </li>
          <li className="nav-link">
            <a className="" href="https://www.broadpharm.com/carts"><ShoppingCartIcon/></a>
          </li>
        </ul>

      </div>
    </StickyHeader>
  )

}

export default ContactInfo;