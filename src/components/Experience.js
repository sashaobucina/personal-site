import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBJumbotron,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBListGroup,
  MDBListGroupItem,
} from "mdbreact";
import CustomDivider from "./CustomDivider";
import scotiaImg from "../static/images/scotia.png";
import blackberryImg from "../static/images/blackberry.png";

class Experience extends Component {
  render() {
    return (
      <MDBJumbotron id="experience" className="experience mb-0" fluid>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12">
              <h3>Experience</h3>
              <CustomDivider />
            </MDBCol>
          </MDBRow>
          <MDBRow className="mt-4">
            <MDBCol className="offset-md-1" md="5">
              <MDBCard>
                <MDBCardImage className="card-img" src={scotiaImg} />
                <MDBCardTitle>Velocity Software Developer</MDBCardTitle>
                <MDBListGroup className="p-2">
                  <MDBListGroupItem>
                    <p
                      className="text-muted"
                      style={{ textAlign: "center", fontSize: "14px" }}
                    >
                      January 2019 - April 2019
                      <br />
                      (4 mos.)
                    </p>
                    <ul
                      className="text-muted mt-2"
                      style={{
                        textAlign: "left",
                        fontSize: "14px",
                        listStyleType: "square",
                      }}
                    >
                      <li>
                        Developed and maintained a production-ready chatbot
                        designed for in-field use by equity traders using a
                        RESTFUL server architecture
                      </li>
                      <li>
                        Led the research of improving NLP model performance and
                        fully integrated the NLU pipeline through SpaCy and
                        Scikit-Learn
                      </li>
                      <li>
                        Responsible for full-stack developement of backend
                        microservices using Node.js, TypeScript, and JQuery
                      </li>
                      <li>
                        Assisted in building a fully automated deployment
                        pipeline using Jenkins, Artifactory, and Docker
                      </li>
                    </ul>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCard>
            </MDBCol>
            <MDBCol md="5">
              <MDBCard>
                <MDBCardImage className="card-img" src={blackberryImg} />
                <MDBCardTitle>Security Software Developer</MDBCardTitle>
                <MDBListGroup className="p-2">
                  <MDBListGroupItem>
                    <p className="text-muted" style={{ fontSize: "14px" }}>
                      May 2018 - January 2019
                      <br />
                      (8 mos.)
                    </p>
                    <ul
                      className="text-muted mt-2"
                      style={{
                        textAlign: "left",
                        fontSize: "14px",
                        listStyleType: "square",
                      }}
                    >
                      <li>
                        Developed Wi-Fi features on the Android OS to comply
                        with security requirements for use in national security
                        systems
                      </li>
                      <li>
                        Integrated a hardware abstraction layer that facilitates
                        inter-process communication between the Android
                        framework and WPA Supplicant
                      </li>
                      <li>
                        Designed a mechanism in Java and C to enable external
                        certificate validation for enterprise Wi-Fi networks
                      </li>
                      <li>
                        Extended the functionality of Android applications to
                        support the customization of enterprise Wi-Fi profiles
                      </li>
                    </ul>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBJumbotron>
    );
  }
}

export default Experience;
