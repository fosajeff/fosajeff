import React from "react";
import { Container, Row, Col, List } from "reactstrap";
import SocialIcons from "../parts/SocialIcons";

import { FaCheckSquare, FaGraduationCap } from "react-icons/fa";

import { IconContext } from "react-icons";

import fosajeff from "../asset/images/fosajeff.jpg";

const Biography = () => {
  return (
    <div className="section mt-2 pt-5">
      <Container style={bioStyle}>
        <Row>
          <Col lg="4" className="mb-5 text-center">
            <img className="img mb-2" src={fosajeff} alt="Efosa Jeffrey" />
            <h3>Okooboh Efosa Jeffrey</h3>
            <span className="text-muted">Backend Developer</span>
            <p className="text-muted">CS/Eng Student</p>
            <a href="https://uniben.edu">
              <p>University of Benin, Nigeria</p>
            </a>
            <IconContext.Provider value={{ size: "2.2rem" }}>
              {/* Social media handles */}
              <SocialIcons />
            </IconContext.Provider>
          </Col>

          <Col lg="8">
            <h1 className="text-muted mb-5">Biography</h1>
            <p>
              I am an undergraduate student in the Department of Computer
              Engineering at the University of Benin in Edo State, Nigeria,
              graduating in 2022.
            </p>
            <p>
              {" "}
              Recently, I had interned at{" "}
              <a href="https://start.ng">start.ng</a> and{" "}
              <a href="https://hotels.ng">hotels.ng</a>, Nigeria as a Software
              Developer, where I was trained and worked with a variety of web
              technologies. As a backend intern, I had acquired amazing skills
              that enabled me write robust authentication systems, build a web
              backend from scratch and implement best practices in the software
              engineering world.
            </p>

            <Row className="mt-5">
              <Col md="5">
                <h4 className="text-grey text-bold">Interests</h4>

                <List type="unstyled ml-4">
                  <li>
                    <FaCheckSquare />
                    <span className="ml-2">Software Engineering</span>
                  </li>
                  <li>
                    <FaCheckSquare />
                    <span className="ml-2">System administration</span>
                  </li>
                  <li>
                    <FaCheckSquare />
                    <span className="ml-2">Network management</span>
                  </li>
                  <li>
                    <FaCheckSquare />
                    <span className="ml-2">Cloud Computing</span>
                  </li>
                </List>
              </Col>

              <Col md="7">
                <h4 className="text-grey text-bold">Education</h4>
                <List type="unstyled ml-4">
                  <li>
                    <FaGraduationCap />
                    <span className="ml-2">B.Eng Computer Engineering '22</span>
                  </li>
                  <li
                    style={{ marginLeft: "2rem", fontSize: "0.9rem" }}
                    className="text-muted"
                  >
                    The University of Benin, Nigeria
                  </li>
                </List>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const bioStyle = {
  paddingTop: "2rem",
};

export default Biography;
