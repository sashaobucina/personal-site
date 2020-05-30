import React, { Component } from "react";
import { MDBNavbarNav, MDBNavItem, MDBNavbar } from "mdbreact";
import { HashLink as Link } from "react-router-hash-link";

class HeaderNoToggle extends Component {
  render() {
    return (
      <MDBNavbar className="mt-2" transparent expand="sm">
        <MDBNavbarNav className="header-items" right>
          <MDBNavItem className="mr-3">
            <Link smooth to="#about" className="header-link">
              <p>About</p>
            </Link>
          </MDBNavItem>
          <MDBNavItem className="mr-3">
            <Link smooth to="#experience" className="header-link">
              <p>Experience</p>
            </Link>
          </MDBNavItem>
          <MDBNavItem className="mr-3">
            <Link smooth to="#projects" className="header-link">
              <p>Projects</p>
            </Link>
          </MDBNavItem>
          <MDBNavItem className="mr-3">
            <Link smooth to="#education" className="header-link">
              <p>Education</p>
            </Link>
          </MDBNavItem>
          <MDBNavItem className="mr-3">
            <Link smooth to="#skills" className="header-link">
              <p>Skills</p>
            </Link>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBNavbar>
    );
  }
}

export default HeaderNoToggle;
