import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import avatar from "../images/avatar.jpg";

class About extends Component {
  render() {
    return (
      <MDBContainer id="about" className="about" fluid>
        <MDBRow className="mt-4">
          <MDBCol className="mt-4" md="4">
            <img className="avatar" src={avatar} alt="Avatar" />
            <h3 className="mt-2">
              HEY THERE
            </h3>
            <hr className="avatar-divider" />
          </MDBCol>
          <MDBCol md="7">
            <p className="text-muted" style={{ textAlign: "left" }}>
              I'm Sasha! A passionate CS undergraduate at the University of Toronto (St. George).

            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}

export default About;