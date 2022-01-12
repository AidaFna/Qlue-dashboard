import { Card, Row, Col } from "react-bootstrap";
import "./home.css";

const Cards = () => {
  return (
    <>
      <Row>
        <Col md={3} sm={12}>
          <Card className="mt-3 card">
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                <h1>40</h1>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={12}>
          <Card className="mt-3 card">
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                <h1>40</h1>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={12}>
          <Card className="mt-3 card">
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                <h1>40</h1>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={12}>
          <Card className="mt-3 card">
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              {/* <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle> */}
              <Card.Text>
                <h1>40</h1>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Cards;
