import React, { Component } from "react";
import { MDBNavbarNav, MDBNavItem, MDBNavbar } from "mdbreact";
import { HashLink as Link } from "react-router-hash-link";

class HeaderNoToggle extends Component {
  render() {
    return (
      <MDBNavbar className="mt-2" transparent expand="sm">
        <MDBNavbarNav className="header-items" right>
          <MDBNavItem className="mr-3">
            {/* <Link to="#about"> */}
              <p>About</p>
            {/* </Link> */}
          </MDBNavItem>
          <MDBNavItem className="mr-3">
            <p>Experience</p>
          </MDBNavItem>
          <MDBNavItem className="mr-3"> 
            <p>Projects</p>
          </MDBNavItem>
          <MDBNavItem className="mr-3">
            <p>Education</p>
          </MDBNavItem>
          <MDBNavItem className="mr-3">
            <p>Skills</p>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBNavbar> 
    )
  }
}

export default HeaderNoToggle;