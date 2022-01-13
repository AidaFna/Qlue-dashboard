import { Card, Row, Col } from "react-bootstrap";
import "./home.css";

const Cards = () => {
  return (
    <>
      <Row>
        <Col md={3} sm={12}>
          <Card className="mt-3 card">
            <Card.Body>
              <Card.Title>Total Movie</Card.Title>
              <Card.Text>
                <h1>20</h1>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={12}>
          <Card className="mt-3 card">
            <Card.Body>
              <Card.Title>New Release</Card.Title>
              <Card.Text>
                <h1>5</h1>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={12}>
          <Card className="mt-3 card">
            <Card.Body>
              <Card.Title>Total Vote</Card.Title>
              <Card.Text>
                <h1>100.000</h1>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={12}>
          <Card className="mt-3 card">
            <Card.Body>
              <Card.Title>Trending Movie</Card.Title>
              {/* <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle> */}
              <Card.Text>
                <h1>10</h1>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Cards;
