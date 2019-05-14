import React, { Component } from "react";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import CustomDivider from "./CustomDivider";

class Skills extends Component {
  render() {
    return (
      <MDBJumbotron id="skills" className="skills mb-0" fluid>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12">
              <h3>Skills</h3>
              <CustomDivider />
            </MDBCol>
          </MDBRow>
          <MDBContainer className="mt-4" fluid>
            <MDBRow>
              <MDBCol md="4">
                <MDBContainer fluid>
                  {showSkillRow('Typescript', 4)}
                  {showSkillRow('SQL', 3)}
                  {showSkillRow('Python', 3)}
                  {showSkillRow('Docker', 2)}
                </MDBContainer>
              </MDBCol>
              <MDBCol md="4">
                <MDBContainer fluid>
                  {showSkillRow('Java', 4)}
                  {showSkillRow('Javascript', 3)}
                  {showSkillRow('React', 4)}
                  {showSkillRow('C/C++', 2)}
                </MDBContainer>
              </MDBCol>
              <MDBCol md="4">
                <MDBContainer fluid>
                  {showSkillRow('Git', 4)}
                  {showSkillRow('Android', 3)}
                  {showSkillRow('HTML/CSS', 2)}
                  {showSkillRow('MatLab', 1)}
                </MDBContainer>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBContainer>
      </MDBJumbotron>
    )
  }
}

const showSkillRow = (skill, rating) => {
  return (
    <MDBRow>
      <MDBCol md="12">
        <h5 className="text-muted">
          {skill}
          <span className="ml-1">{showStars(rating)}</span>
        </h5>
      </MDBCol>
    </MDBRow>
  )
}

const showStars = (rating) => {
  return [...Array(5)].map((_e, i) => {
    const className = i < rating ? "amber-text" : "grey-text";
    return <MDBIcon key={i} className={className} icon="star" size="sm" />
  });
}

export default Skills;