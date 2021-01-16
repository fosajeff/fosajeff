import React from "react";
import { Container, Row, Col } from "reactstrap";

import {
  FaPython,
  FaCloud,
  FaJs,
  FaDatabase,
  FaGit,
  FaWordpress,
} from "react-icons/fa";
import { IconContext } from "react-icons";

const Skills = () => {
  return (
    <div className="section">
      <Container className="text-center mb-5">
        <h1 className="text-muted">Skills</h1>

        <IconContext.Provider value={{ size: "4rem", color: "#03afff" }}>
          <Row className="mt-5">
            <Col sm="4" className="mb-5 py-2-5">
              <div className="mb-3">
                <FaPython />
              </div>
              <h3>Python</h3>
              <p>Django</p>
            </Col>
            <Col sm="4" className="mb-5 py-2-5">
              <div className="mb-3">
                <FaCloud />
              </div>
              <h3>DevOps</h3>
              <p>Heroku</p>
            </Col>
            <Col sm="4" className="mb-5 py-2-5">
              <div className="mb-3">
                <FaJs />
              </div>
              <h3>Javascript</h3>
              <p>Node, Express, React</p>
            </Col>
            <Col sm="4" className="mb-5 py-2-5">
              <div className="mb-3">
                <FaDatabase />
              </div>
              <h3>Databases</h3>
              <p>SQL (MySQL, sequelize ORM), noSQL (mongodb, mongoose ODM)</p>
            </Col>
            <Col sm="4" className="mb-5 py-2-5">
              <div className="mb-3">
                <FaGit />
              </div>
              <h3>Version Control</h3>
              <p>Git (GitHub, BitBucket)</p>
            </Col>
            <Col sm="4" className="mb-5 py-2-5">
              <div className="mb-3">
                <FaWordpress />
              </div>
              <h3>CMS</h3>
              <p>Wordpress</p>
            </Col>
          </Row>
        </IconContext.Provider>
      </Container>
    </div>
  );
};

export default Skills;
