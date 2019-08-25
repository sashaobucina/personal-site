import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBAnimation } from "mdbreact";
import { HashLink as Link } from "react-router-hash-link";
import Particles from "react-particles-js";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Skills from "./Skills";
import Footer from "./Footer";
import resume from "../static/files/SashaObucina-ResumeOctober2018.pdf"

class Landing extends Component {
  render() {
    return (
      <div id="landing" className="landing">
          <div className="content">
            <MDBContainer fluid>
              <MDBRow>
                <MDBCol className="offset-sm-0 offset-md-0" md="12" sm="12">
                  <h1 className="font-weight-bold">
                    Sasha Obucina
                  </h1>
                  <h2 className="mt-1">
                    Software Developer
                  </h2>
                </MDBCol>
              </MDBRow>
              <MDBRow className="landing-btn-group mt-5">
                <MDBCol className="offset-sm-3 offset-md-1" md="3" sm="3">
                  <MDBBtn href="https://github.com/sashaobucina" outline color="white">
                    Github<MDBIcon className="ml-1" fab icon="github"></MDBIcon>
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="4" sm="3">
                  <MDBBtn href="https://www.linkedin.com/in/sasha-obucina/" outline color="white">
                    Linkedin<MDBIcon className="ml-1" fab icon="linkedin"></MDBIcon>
                  </MDBBtn>
                </MDBCol>
                <MDBCol className="offset-sm-4 offset-md-0" md="3" sm="4">
                  <MDBBtn outline color="white" href={resume} target="_blank" rel="noopener noreferrer">
                    Resumé<MDBIcon className="ml-1" icon="download"></MDBIcon>
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mt-5">
                <MDBCol>
                  <Link smooth to="#about">
                    <MDBAnimation type="bounce" duration="2s" infinite>
                      <MDBIcon className="white-text" icon="angle-down" size="2x" />
                    </MDBAnimation>
                  </Link>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            <Particles className="particles"
            params={{
              particles: {
                number: {
                  value: 75,
                  density: {
                    enable: true,
                    value_area: 800
                  }
                },
                color: {
                  value: "#ffffff"
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#000"
                  },
                  image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                  }
                },
                opacity: {
                  value: 0.4,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                  }
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                  }
                },
                line_linked: {
                  enable_auto: true,
                  distance: 200,
                  color: "#fff",
                  opacity: 1,
                  width: 1,
                  condensed_mode: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 600
                  }
                },
                move: {
                  enable: true,
                  speed: 1,
                  direction: "none",
                  random: false,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                  }
                }
              },
              interactivity: {
                detect_on: "window",
                events: {
                  onhover: {
                    enable: true
                  },
                  onclick: {
                    enable: true
                  },
                  resize: true
                }
              },
              retina_detect: true
            }}
          />
        </div>
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Footer />
      </div>
    )
  }
}

export default Landing;