import { Container, Col, Row } from "react-bootstrap";
import Navbar from "../components/navbar";
import Navigation from "../components/navigation";
import Cards from "./card";
import List from "./listGroup";
import "./home.css";
import { MDBContainer } from "mdbreact";
import { Pie, Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { useState } from "react";

const Home = () => {
  const [data, setData] = useState({
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets: [
      {
        label: "Hours Studied in Geeksforgeeks",
        data: [2, 5, 6, 7, 3],
        backgroundColor: ["blue", "green", "yellow", "pink", "orange"],
      },
    ],
  });
  return (
    <div className="home">
      <Navbar />
      <Container className="mt-5 mb-5">
        <Navigation />
        <h1 className="mt-5">Home</h1>
        <Cards />
        <Row className="mt-5">
          <Col md={4} sm={12}>
            <MDBContainer>
              <Pie data={data} />
            </MDBContainer>
          </Col>
          <Col md={4} sm={12}>
            <MDBContainer>
              <Doughnut data={data} />
            </MDBContainer>
          </Col>
          <Col md={4} sm={12}>
            <List />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
