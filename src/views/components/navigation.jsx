import { Container, Nav } from "react-bootstrap";
import "./style.css";

const navigation = () => {
  return (
    <div border className="navigation">
      <Container>
        <Nav defaultActiveKey="/home" as="ul" className="mt-3">
          <Nav.Item as="li">
            <Nav.Link href="/home" style={{ color: "black" }}>
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/data" style={{ color: "black" }}>
              Data
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="/1" style={{ color: "black" }}>
              Maps
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </div>
  );
};

export default navigation;
