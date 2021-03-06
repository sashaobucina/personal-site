import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import avatar from "../static/images/avatar.jpg";
import CustomDivider from "./CustomDivider";

class About extends Component {
  render() {
    return (
      <MDBContainer id="about" className="about mb-5" fluid>
        <MDBRow>
          <MDBCol className="mt-5" md="4">
            <img className="avatar" src={avatar} alt="Avatar" />
            <h5 className="mt-2">HEY THERE</h5>
            <CustomDivider />
          </MDBCol>
          <MDBCol className="rounded mt-4" md="7">
            <MDBCard id="about-box">
              <MDBCardBody>
                <p className="text-muted mt-2" style={{ textAlign: "left" }}>
                  I'm Sasha! A passionate CS undergraduate at the{" "}
                  <a href="https://www.utoronto.ca/">
                    University of Toronto (St. George)
                  </a>
                  . My interest in the field of computer science started because
                  of the impact software has on our lives, especially keen on
                  machine learning and cybersecurity. I have a passion for big
                  challenges that require innovative thinking, speed, and
                  creativity to tackle. I would describe myself as a
                  self-starter with experience in natural language processing,
                  cybersecurity, and backend web development, amassed through
                  experiences at school and my internships. Along with my
                  experience in computer science, I am majoring in Economics as
                  well, in which I am constantly searching for software
                  solutions applicable to the financial world. I am also a
                  competitive tennis player, currently a member of the UofT
                  Varsity Men's tennis team and a former member of the national
                  team.
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default About;
