import React, { Component } from "react";
import { MDBContainer, MDBJumbotron, MDBRow, MDBCol } from "mdbreact";
import CustomDivider from "./CustomDivider";

class Education extends Component {
  render() {
    return (
      <MDBJumbotron id="education" className="education mb-0" fluid>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12">
              <h3>Education</h3>
              <CustomDivider />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBJumbotron>
    )
  }
}

export default Education;