import React, { Component } from "react";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBListGroup, MDBListGroupItem, MDBBtn, MDBIcon } from "mdbreact";
import CustomDivider from "./CustomDivider";

class Projects extends Component {
  render() {
    return (
      <MDBJumbotron id="projects" className="projects mb-0" fluid>
        <MDBContainer fluid>
        <MDBRow>
          <MDBCol md="12">
            <h3>Projects</h3>
            <CustomDivider />
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-4">
          <MDBCol className="offset-md-2" md="8">
            <MDBListGroup>
              <MDBListGroupItem>
                <h4 className="mb-3">Finance Assistant</h4>
                <p className="text-muted">
                  A natural language query engine for financial information. This application is designed
                  to support quick and easy access to financials such as historical stock prices, financial statements, 
                  and company overviews through the use of natural language queries. Powered by a React.js frontend, 
                  user queries are interpreted by the NLP model through the Node.js backend microservice, which in turn classifies 
                  the intent of the query to dynamically load content of interest to the user.
                </p>
                <a href="https://github.com/sashaobucina/FinanceAssistant/" target="_blank" rel="noopener noreferrer">
                  <MDBBtn outline color="blue">
                    View Project<MDBIcon className="ml-2" icon="clone" />
                  </MDBBtn>
                </a>
              </MDBListGroupItem>
              <MDBListGroupItem>
                <h4 className="mb-3">Quiet Mode</h4>
                <p className="text-muted">
                  An Android app that sets your phone into "Do not disturb mode" when placed face down. Using Android's built-in 
                  system proximity sensor and accelerometer, when the app is active, a background service is launched that tracks the phone's
                  relative positioning. When placed face down on a surface, the app filters any notifications as in the "Do not disturb" mode. QuietMode is perfect when in meetings 
                  to mute all notifications by simply setting your phone on the table.
                </p>
                <a href="https://github.com/sashaobucina/QuietMode/" target="_blank" rel="noopener noreferrer">
                  <MDBBtn outline color="blue">
                    View Project<MDBIcon className="ml-2" icon="clone" />
                  </MDBBtn>
                </a>
              </MDBListGroupItem>
              <MDBListGroupItem>
                <h4 className="mb-3">PhotoTagger</h4>
                <p className="text-muted">
                  A Java application that renames image files on a local file system by adding tags and keeps track of modified versions of the image.
                  The application is written using the Java standard library and follows a strict OOD approach, utilizing common OO design concepts when applicable. A user-friendly GUI is 
                  provided through the Java Swing toolkit for the user can interact with. The project was done as part of a software design course in university.
                </p>
                <a href="https://github.com/sashaobucina/PhotoTagger/" target="_blank" rel="noopener noreferrer">
                  <MDBBtn outline color="blue">
                    View Project<MDBIcon className="ml-2" icon="clone" />
                  </MDBBtn>
                </a>
              </MDBListGroupItem>
            </MDBListGroup>
          </MDBCol>
        </MDBRow>
        </MDBContainer>
      </MDBJumbotron>
    )
  }
}

export default Projects;