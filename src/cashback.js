import UserContext from "./context";
import { useContext, useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import "./styles.css"; 

export default function Deposit() {
  let users = useContext(UserContext);
  let n = users.users.length;
  let [bal, setBal] = useState(users.users[n - 1].amount);
  let [dep, setDep] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    let deposit = Number(dep);
    setBal(bal - deposit);
  }
  users.users[n - 1].amount = bal;

  return (
    <>
      <video autoPlay loop muted className="background-video">
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Container className="content-container">
        <h1 className="text-center text-white">WITHDRAW</h1>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <Form onSubmit={handleSubmit} className="p-4 border rounded shadow bg-dark text-white">
              <Form.Group controlId="formDeposit">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter amount..."
                  onChange={(e) => setDep(e.target.value)}
                  required
                  className="form-control-lg"
                />
              </Form.Group>
              <Button type="submit" variant="success" className="w-100 mt-3">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <h2 className="text-center text-white mt-4">Balance: {bal}</h2>
      </Container>
    </>
  );
}
