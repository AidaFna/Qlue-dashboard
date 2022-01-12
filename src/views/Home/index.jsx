import { Container, Col, Row } from "react-bootstrap";
import Navbar from "../components/navbar";
import Navigation from "../components/navigation";
import Cards from "./card";
import List from "./listGroup";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Container>
        <Navigation />
        <h1 className="mt-5">Home</h1>
        <Cards />
        <Row className="mt-5">
          <Col md={8} sm={12}></Col>
          <Col md={4} sm={12}>
            <List />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
