import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./style.css";

const navbar = () => {
  return (
    <>
      <Navbar bg="light" variant="light" className="nav-top">
        <Container>
          <Navbar.Brand href="/home">Dashboard</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <NavDropdown
                id="dropdown-menu-align-end"
                title="Admin"
                align="end"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default navbar;
