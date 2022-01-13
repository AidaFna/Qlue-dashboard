import { Card, ListGroup } from "react-bootstrap";
import "./home.css";
const List = () => {
  return (
    <>
      <Card style={{ textalign: "left" }}>
        <Card.Header>Day</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Monday</ListGroup.Item>
          <ListGroup.Item>Tuesday</ListGroup.Item>
          <ListGroup.Item>Wednesday</ListGroup.Item>
          <ListGroup.Item>Thursday</ListGroup.Item>
          <ListGroup.Item>Friday</ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};

export default List;
