import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './HamburgerMenu.css';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';


export default HamburgerMenu => {
  return (
    <Menu right width={400}>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/salads">
        Products
      </a>
      <a className="menu-item" href="/pizzas">
        Order
      </a>
      <a className="menu-item" href="/desserts">
        Technical
      </a>
      <a className="menu-item" href="/desserts">
        About
      </a>
      <a className="menu-item" href="/desserts">
        Contact
      </a>
      <a className="menu-login-item" href="/desserts">
        <LockOpenIcon/>Login
      </a>
      <a className="menu-cart-item" href="/desserts">
        <ShoppingCartIcon/>Cart
      </a>
      <div className="search-box">
        <input type="search" placeholder={"search"} className="search-box-value"/><button className="search-box-button"><SearchIcon/></button>

      </div>
    </Menu>
  );
};