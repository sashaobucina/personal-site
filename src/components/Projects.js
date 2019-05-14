import React, { Component } from "react";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBListGroup, MDBListGroupItem, MDBBtn, MDBIcon } from "mdbreact";
import CustomDivider from "./CustomDivider";

class Projects extends Component {
  render() {
    return (
      <MDBJumbotron id="projects" className="projects mb-5" fluid>
        <MDBContainer fluid>
        <MDBRow>
          <MDBCol md="12">
            <h3>Projects</h3>
            <CustomDivider />
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-3">
          <MDBCol className="offset-md-2" md="8">
            <MDBListGroup>
              <MDBListGroupItem>
                <h4 className="mb-3">FinanceAssistant</h4>
                <p className="text-muted">
                  A natural language query engine for financial information. This application is designed
                  to support quick and easy access to financials such as historical stock prices, financial statements, 
                  and company overviews through the use of natural language queries. Using a RESTFUL architecture, the NLP engine
                  is dockerized in an HTTP server through RASA, the the backend microservice classifies intents and aggreagates the necessary 
                  data through the FinancialModelingPrep API, and all shown through a React frontend that dynamically loads content based off of 
                  the user query.
                </p>
                <a href="https://github.com/sashaobucina/FinanceAssistant/" target="_blank" rel="noopener noreferrer">
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