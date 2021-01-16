import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  List,
} from "reactstrap";

const Experience = () => {
  return (
    <div className="section">
      <Container>
        <Row>
          <Col lg="4" className="mb-5">
            <h1 className="text-muted">Experience</h1>
          </Col>
          <Col lg="8">
            <Row>
              <Col className="py-2">
                <Card style={cardStyle}>
                  <CardBody>
                    <CardTitle tag="h4">Computer Operator</CardTitle>
                    <h5 tag="a" href="#experience" className="Link">
                      Intelligent Computer Services
                    </h5>
                    <p className="mt-2 text-muted">Aug 2015 – Dec 2015</p>
                    <List type="unstyled">
                      <li>
                        <ul>
                          <li>
                            Managed company computer systems like printers,
                            photocopiers, laptops/desktops, CPUs.
                          </li>
                          <li>Typed, edited and proofread student projects.</li>
                          <li>
                            Assisted computer trainees in developing good typing
                            skills and use of MS Word, Excel and PowerPoint.
                          </li>
                        </ul>
                      </li>
                    </List>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <div class="py-2"></div>
            <Row className="py-2">
              <Col className="py-2">
                <Card style={cardStyle}>
                  <CardBody>
                    <CardTitle tag="h4">Backend Intern</CardTitle>
                    <h5 tag="a" href="https://hotels.ng" className="Link">
                      Hotels NG
                    </h5>
                    <p className="mt-2 text-muted">April 2020 – June 2020</p>
                    <List type="unstyled">
                      <li>
                        <ul>
                          <li>Learnt new technologies and implemented them.</li>
                          <li>
                            Worked with different teams of talented engineers
                            and contributed to building a web application for
                            hiring talents.
                          </li>
                          <li>
                            Gained real-life experience in following best
                            practices, meetingdeadlines and making weekly
                            deliverables.
                          </li>
                        </ul>
                      </li>
                    </List>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const cardStyle = {
  backgroundColor: "#373e42",
};

export default Experience;
