import {
  Container,
  Col,
  Row,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import Navbar from "../components/navbar";
import Navigation from "../components/navigation";
import Maps from "./maps";
// import "./data.css";

const Profile = () => {
  return (
    <div className="home">
      <Navbar />
      <Container className="mt-5 mb-5">
        <Navigation />
        <h1 className="mt-5">Profile</h1>
        <Row className="mt-5">
          <Col md={4} sm={12}>
            <Card>
              <Card.Img
                variant="top"
                src="https://assets.jalantikus.com/assets/cache/40/40/apps/2015/09/04/qlue-jakarta-smart-city-icon.png"
              />
              <Card.Body>
                <Card.Title>Qlue Dashboard</Card.Title>
                <Card.Text>this is Qlue Dashboard</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Logged in as : Admin</ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
          <Col md={8} sm={12}>
            <Maps />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
