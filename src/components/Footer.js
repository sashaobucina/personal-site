import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBIcon } from "mdbreact";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <MDBNavbar expand="md">
          <MDBNavbarBrand>
            <p className="mt-3 ml-3" style={{ fontSize: "13px" }}>
              Made with <span role="img" aria-label="heart">❤️</span> by Sasha Obucina
            </p>
          </MDBNavbarBrand>
          <MDBNavbarNav right>
            <MDBNavItem className="mr-3">
              <a href="mailto:sasha.obucina@gmail.com">
                <MDBIcon className="red-text hoverable" fab icon="google" size="lg" />
              </a>
            </MDBNavItem>
            <MDBNavItem className="mr-3">
              <a target="_blank" rel="noopener noreferrer" href="https://bitbucket.org/obucinas/">
                <MDBIcon className="blue-text hoverable" fab icon="bitbucket" size="lg" />
              </a>
            </MDBNavItem>
            <MDBNavItem className="mr-3">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/sashaobucina">
                <MDBIcon className="black-text hoverable" fab icon="github" size="lg"/>
              </a>
            </MDBNavItem>
            <MDBNavItem className="mr-3">
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sasha-obucina/">
                <MDBIcon className="light-blue-text hoverable" fab icon="linkedin-in" size="lg"/>
              </a>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBNavbar>
      </div>
    )
  }
}

export default Footer;