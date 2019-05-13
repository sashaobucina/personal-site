import React, { Component } from "react";
import { MDBNavbarToggler, MDBCollapse, MDBNavbarNav, MDBNavItem, MDBNavbar } from "mdbreact";
import hamburgerImg from "../images/hamburger-svg.png";

class HeaderWithToggle extends Component {
  render() {
    const { collapseID, toggleHandler } = this.props;
    return (
      <MDBNavbar className="mt-2" transparent>
        <MDBNavbarToggler image={hamburgerImg} className="mr-2" id="hamburger1" onClick={toggleHandler('navbarCollapse1')} />
        <MDBCollapse id="navbarCollapse1" isOpen={collapseID} navbar>
          <MDBNavbarNav className="header-items mt-2">
            <MDBNavItem>
              <p>About</p>
            </MDBNavItem>
            <MDBNavItem>
              <p>Experience</p>
            </MDBNavItem>
            <MDBNavItem>
              <p>Projects</p>
            </MDBNavItem>
            <MDBNavItem>
              <p>Education</p>
            </MDBNavItem>
            <MDBNavItem>
              <p>Skills</p>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    )
  }
}

export default HeaderWithToggle;