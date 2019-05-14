import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBAnimation } from "mdbreact";
import Particles from "react-particles-js";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Skills from "./Skills";

class Landing extends Component {
  render() {
    return (
      <MDBContainer id="landing" className="landing" fluid>
          <div className="content">
            <h1 className="font-weight-bold">
              Sasha Obucina
            </h1>
            <h2 className="mt-1">
              Software Developer
            </h2>
            <MDBRow className="landing-btn-group mt-5">
              <MDBCol className="offset-sm-1 offset-md-0 hoverable" md="4" sm="5">
                <MDBBtn href="https://github.com/sashaobucina" outline color="white">
                  Github<MDBIcon className="ml-2" fab icon="github"></MDBIcon>
                </MDBBtn>
              </MDBCol>
              <MDBCol className="hoverable" md="4" sm="5">
                <MDBBtn href="https://www.linkedin.com/in/sasha-obucina-0b51a2173/" outline color="white">
                  Linkedin<MDBIcon className="ml-2" fab icon="linkedin"></MDBIcon>
                </MDBBtn>
              </MDBCol>
              <MDBCol className="offset-sm-3 offset-md-0 hoverable" md="4" sm="6">
                <MDBBtn outline color="white">
                  Resumé<MDBIcon className="ml-2" icon="download"></MDBIcon>
                </MDBBtn>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mt-5">
              <MDBCol>
                <MDBAnimation type="bounce" count={10} duration="2s" >
                  <MDBIcon icon="angle-down" size="2x" />
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </div>
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
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true
                },
                onclick: {
                  enable: false
                },
                resize: true
              }
            },
            retina_detect: true
          }}
        />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
      </MDBContainer>
    )
  }
}

export default Landing;