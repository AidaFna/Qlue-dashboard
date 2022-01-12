import { Card, ListGroup } from "react-bootstrap";
import "./home.css";
const List = () => {
  return (
    <>
      <Card style={{ textalign: "left" }}>
        <Card.Header>Featured</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};

export default List;
