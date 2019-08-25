import React, { Component } from "react";
import { MDBContainer, MDBJumbotron, MDBRow, MDBCol, MDBListGroup, MDBListGroupItem } from "mdbreact";
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
          <MDBRow className="mt-3">
            <MDBCol className="offset-md-1" md="10">
              <MDBListGroup>
                <MDBListGroupItem style={{ textAlign: "left" }}>
                  <div className="d-flex w-100 justify-content-between">
                    <h4 className="mb-2 font-weight-bolder">University of Toronto</h4>
                    <p className="text-muted mb-2">September 2015 - Present</p>
                  </div>
                  <p className="text-muted mb-1 font-weight-bolder" style={{ fontSize: "16px" }}>Computer Science and Economics</p>
                  <p className="text-muted mb-3" style={{ fontSize: "16px" }}>Toronto, Canada</p>
                  <p className="text-muted">
                    Currently pursuing a double degree program at the University of Toronto at the St. George Campus for Computer Science and Economics. 
                    I took a professional experience year to gain work experience through technical internships and therefore will be 
                    graduating in five years instead of four.
                  </p>
                  <p className="text-muted mb-2"><b>Notable Courses:</b></p>
                  <ul className="text-muted mb-2" style={{listStyleType: "square"}}>
                    <li>CSC311 - Introduction to Machine Learning</li>
                    <li>CSC373 - Algorithm Design and Analysis</li>
                    <li>CSC369 - Operating Systems</li>
                    <li>CSC401 - Natural Language Computing</li>
                    <li>CSC458 - Computer Networking Systems</li>
                  </ul>
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBJumbotron>
    )
  }
}

export default Education;