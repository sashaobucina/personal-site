import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { MDBNavbarToggler, MDBCollapse, MDBNavbarNav, MDBNavItem, MDBNavbar } from "mdbreact";
import hamburgerImg from "../static/images/hamburger-svg.png";

class HeaderWithToggle extends Component {
  render() {
    const { collapseID, toggleHandler } = this.props;
    return (
      <MDBNavbar className="mt-2" transparent>
        <MDBNavbarToggler image={hamburgerImg} className="mr-2" id="hamburger1" onClick={toggleHandler('navbarCollapse1')} />
        <MDBCollapse id="navbarCollapse1" isOpen={collapseID} navbar>
          <MDBNavbarNav className="header-items mt-2">
            <MDBNavItem>
              <Link smooth to="#about" className="header-link">
                <p>About</p>
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link smooth to="#experience" className="header-link">
                <p>Experience</p>
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link smooth to="#projects" className="header-link">
                <p>Projects</p>
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link smooth to="#education" className="header-link">
                <p>Education</p>
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link smooth to="#skills" className="header-link">
                <p>Skills</p>
              </Link>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    )
  }
}

export default HeaderWithToggle;