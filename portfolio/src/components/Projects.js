import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

import { FaGithub } from "react-icons/fa";

import finder from "../asset/images/finder.jpg";
import ngo from "../asset/images/ngo.jpg";
import onlineTutor from "../asset/images/online-tutor.jpg";

const Projects = () => {
  return (
    <div className="section">
      <Container>
        <Row>
          <Col lg="4" className="mb-5">
            <h1 className="text-muted">Projects</h1>
          </Col>
          <Col lg="8">
            <Row className="py-2">
              <Col lg="4" md="3" className="mb-5 order-last">
                <a href="https://github.com/fosajeff/online-tutoring-app-API">
                  <img className="img" src={onlineTutor} alt="Efosa Jeffrey" />
                </a>
              </Col>
              <Col lg="8" md="9" className="mb-5 order-first">
                <h4>
                  <a
                    className="text-white"
                    href="https://github.com/fosajeff/online-tutoring-app-API"
                  >
                    Online Tutor
                  </a>
                </h4>
                <p className="text-muted">
                  Built an online tutoring application API where tutors can
                  register and deliver lessons to registered students.
                </p>

                <Button
                  tag="a"
                  href="https://github.com/fosajeff/online-tutoring-app-API"
                  outline
                  color="primary"
                  size="sm"
                >
                  <FaGithub />
                  <span className="ml-2">Docs</span>
                </Button>
              </Col>
            </Row>

            <Row className="py-2">
              <Col lg="4" md="3" className="mb-5 order-last">
                <a href="https://github.com/fosajeff/myhelperng">
                  <img className="img" src={ngo} alt="Efosa Jeffrey" />
                </a>
              </Col>
              <Col lg="8" md="9" className="mb-5 order-first">
                <h4>
                  <a
                    className="text-white"
                    href="https://github.com/fosajeff/myhelperng"
                  >
                    MyHelperNg
                  </a>
                </h4>
                <p className="text-muted">
                  Wrote the back-end of a non-profit organization website using
                  nodeJs, expressJs, mongodb and mongoose technology.
                  Implemented features like authentication, CRUD, etc.
                </p>

                <Button
                  tag="a"
                  href="https://github.com/fosajeff/myhelperng"
                  outline
                  color="primary"
                  size="sm"
                >
                  <FaGithub />
                  <span className="ml-2">Docs</span>
                </Button>
              </Col>
            </Row>

            <Row className="py-2">
              <Col lg="4" md="3" className="mb-5 order-last">
                <a href="#projects">
                  <img className="img" src={finder} alt="Efosa Jeffrey" />
                </a>
              </Col>
              <Col lg="8" md="9" className="mb-5 order-first">
                <h4>
                  <a className="text-white" href="#projects">
                    Finder
                  </a>
                </h4>
                <p className="text-muted">
                  A web app that lets you find a person or an organization
                  online with filtered search results and deterministic accuracy
                  and for easy navigation to their social accounts or similar.
                </p>

                <Button
                  disabled
                  tag="a"
                  href="#projects"
                  outline
                  color="primary"
                  size="sm"
                >
                  <FaGithub />
                  <span className="ml-2">Docs</span>
                </Button>

                <div style={{ marginTop: "-1rem" }}></div>
                <span style={{ fontWeight: "bolder", fontSize: "50px" }}>
                  .
                </span>
                <span style={{ fontWeight: "bolder", fontSize: "50px" }}>
                  .
                </span>
                <span style={{ fontWeight: "bolder", fontSize: "50px" }}>
                  .
                </span>
                <br />
                <br />
                <p className="text-muted">
                  Contributed to building the back-end of a Talent hiring
                  website where companies can register and hire talents with
                  desired specification, built e-commerce shops, and other fun
                  projects.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
