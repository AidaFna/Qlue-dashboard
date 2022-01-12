import {
  Container,
  Row,
  Col,
  // Spinner
} from "react-bootstrap";
import Login from "./login";
import "./landing.css";
const Landing = () => {
  return (
    <div className="landing">
      <Container>
        <Row>
          <Col md={8} sm={12}></Col>
          <Col md={4} sm={12}>
            <Row></Row>
            <Row>
              <Col>
                <Login />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;
