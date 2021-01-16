import React, { useState } from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="Navbar-dark" style={navbarStyle} light expand="md">
      <Container>
        <NavbarBrand className="Navbar-brand" href="/">
          <code style={{ fontWeight: "bold", fontSize: "1.3rem" }}>
            E.jeff()
          </code>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse style={{ color: "white" }} isOpen={isOpen} navbar>
          <Nav className="Navbar-nav ml-auto" navbar>
            <NavItem>
              <NavLink
                style={{ fontWeight: "bold" }}
                className="text-white Nav-link"
                href="#"
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="Nav-link" href="#experience">
                Experience
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="Nav-link" href="#projects">
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="Nav-link" href="#contact">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

const navbarStyle = {
  backgroundColor: "#141622",
  padding: "0.8rem 1rem",
  boxShadow: "0 0 0 0.2rem #373844",
  fontSize: "1rem",
};
export default Header;
