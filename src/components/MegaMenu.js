import React from 'react';
import logo from '../logo.png';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import './MegaMenu.css'
function MegaMenu() {
  return (
    <div className="mega">


        <Navbar expand="lg">
          <a className="logo" href="https://www.broadpharm.com">
            <img src={logo} alt="BroadPharm"/>
          </a>

          <Navbar.Collapse className="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">HOME</Nav.Link>

              <NavDropdown title="PRODUCTS" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">BY CATEGORY</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">BY APPLICATION</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">ORDER</Nav.Link>
              <NavDropdown title="TECHNICAL" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">PROTOCOLS</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">QA/QC</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="ABOUT" id="basic-nav-dropdown">

              </NavDropdown>
              <NavDropdown title="CONTACT" id="basic-nav-dropdown">

              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

    </div>
  )
}

export default MegaMenu;