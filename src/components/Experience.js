import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBJumbotron, MDBCard, MDBCardTitle, MDBCardImage } from "mdbreact";
import CustomDivider from "./CustomDivider";
import scotiaImg from "../static/images/scotia.png";
import blackberryImg from "../static/images/blackberry.png";

class Experience extends Component {
  render() {
    return (
      <MDBJumbotron id="experience" className="experience mb-5" fluid>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12">
              <h3>Experience</h3>
              <CustomDivider />
            </MDBCol>
          </MDBRow>
          <MDBRow className="mt-3">
            <MDBCol className="offset-md-1" md="5">
              <MDBCard>
                <MDBCardImage className="card-img" src={scotiaImg} waves />
                <MDBCardTitle>Velocity Software Developer</MDBCardTitle>
                <ul className="text-muted mt-2" style={{ textAlign: "left", fontSize: "14px" }}>
                  <li>Developed Wi-Fi features on the Android OS to comply with security requirements for use in national security systems</li>
                  <li>Integrated a hardware abstraction layer that facilitates inter-process communication between the Android framework and WPA Supplicant</li>
                  <li>Designed a mechanism in Java and C to enable external certificate validation for enterprise Wi-Fi networks</li>
                </ul>
              </MDBCard>
            </MDBCol>
            <MDBCol md="5">
              <MDBCard>
                <MDBCardImage className="card-img" src={blackberryImg} waves />
                <MDBCardTitle>Security Software Developer</MDBCardTitle>
                <ul className="text-muted mt-2" style={{ textAlign: "left", fontSize: "14px" }}>
                  <li>Developed and maintained a production-ready chatbot designed for in-field use by equity traders using a RESTFUL server architecture</li>
                  <li>Led research of improving NLP model performance and fully integrated the NLU pipeline through SpaCy and Scikit-Learn</li>
                  <li>Responsible for full-stack developement of backend microservice using Node.js, TypeScript, and Docker</li>
                </ul>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBJumbotron>
    )
  }
}

export default Experience;