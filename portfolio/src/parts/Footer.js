import React from "react";

import { Container, Row, Col } from "reactstrap";
import SocialIcons from "./SocialIcons";

import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="section">
        <Container style={footerStyle} className="text-center mt-5">
          <Row>
            <Col>
              <h1 className="text-muted">Github Contribution Chart</h1>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <img
                width="100%"
                src="https://ghchart.rshah.org/23252f/fosajeff"
                alt="fosajeff's Github chart"
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="section text-center">
        <Container>
          <Row>
            <Col>
              <h3>
                <a
                  style={{ fontWeight: "bold" }}
                  className=" Link"
                  href="mailto:okoobohefosa@gmail.com"
                >
                  <code className="text-bold">{" <GetInTouch /> "}</code>
                </a>
              </h3>
            </Col>
          </Row>
        </Container>
      </div>

      <IconContext.Provider value={{ size: "1.5rem" }}>
        <div className="section">
          <Container style={footerStyle} className="text-center">
            <Row>
              <Col>
                <p>&copy; Efosa Jeffrey {new Date().getFullYear()}</p>

                {/* Social media handle */}
                <SocialIcons />
              </Col>
            </Row>
          </Container>
        </div>
      </IconContext.Provider>
    </React.Fragment>
  );
};

const footerStyle = {
  fontFamily: "monospace",
};

export default Footer;
