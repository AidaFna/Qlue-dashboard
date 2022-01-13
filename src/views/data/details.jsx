import { Container, Col, Row } from "react-bootstrap";
import Navbar from "../components/navbar";
import Navigation from "../components/navigation";
import Tables from "./table";
import "./data.css";

const Details = () => {
  return (
    <div className="home">
      <Navbar />
      <Container>
        <Navigation />
        <h1 className="mt-5">Data</h1>
        <Row className="mt-5">
          <Col md={12} sm={12}>
            <Tables />
          </Col>
          <Col md={12} sm={12}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Data;
