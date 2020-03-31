import React, { Component } from "react";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBListGroup, MDBListGroupItem, MDBBtn, MDBIcon, MDBBtnGroup, MDBCard, MDBCardBody } from "mdbreact";
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
            <MDBCard id="projects-list">
              <MDBCardBody>
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
                      <MDBBtn color="primary">
                        View Project<MDBIcon className="ml-2" icon="clone" />
                      </MDBBtn>
                    </a>
                  </MDBListGroupItem>
                  <MDBListGroupItem>
                    <h3 className="mb-3">CoronaTracker</h3>
                    <p className="text-muted">
                      A web application that tracks the movements and trends of the COVID-19 virus on a per-country or global basis. It is designed to not only
                      gain a overall view of the activity of the virus, but also track and predict future trends of the virus growth.
                      The application is powered by a React.js frontend that queries a Python Flask microservice, hosted on Heroku as a Docker container, when a user inputs a country of choice.
                      The RESTful microservice in turn transforms the data extracted from the John Hopkins CSSE repository and returns it as formatted JSON, updating it's view on the data every 3 hours.
                    </p>
                    <MDBBtnGroup>
                      <a href="https://github.com/sashaobucina/coronatracker" target="_blank" rel="noopener noreferrer">
                        <MDBBtn color="primary">
                          View Project<MDBIcon className="ml-2" icon="clone" />
                        </MDBBtn>
                      </a>
                      <a href="https://sashaobucina.github.io/coronatracker/" target="_blank" rel="noopener noreferrer">
                        <MDBBtn color="primary">
                          Visit Site<MDBIcon className="ml-2" icon="link" />
                        </MDBBtn>
                      </a>
                    </MDBBtnGroup>
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
                      <MDBBtn color="primary">
                        View Project<MDBIcon className="ml-2" icon="clone" />
                      </MDBBtn>
                    </a>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        </MDBContainer>
      </MDBJumbotron>
    )
  }
}

export default Projects;