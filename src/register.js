import UserContext from "./context";
import { useContext, useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import "./styles.css"; 

export default function Register() {
  let users = useContext(UserContext);

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, email, pass);
    users.users.push({ name, email, password: pass, amount: 1000 });
  }

  return (
    <>
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Container */}
        <Container className="content-container">
        <h1 className="text-center text-white mb-4">REGISTER</h1>
          <Row className="justify-content-center">
            <Col xs={12} sm={10} md={8} lg={6}>
            <Form onSubmit={handleSubmit} className="p-4 border rounded shadow bg-dark text-white">
                <Form.Group controlId="formName">
                  <Form.Control
                    type="text"
                    placeholder="Enter your full name..."
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mt-3">
                  <Form.Control
                    type="email"
                    placeholder="Enter your email..."
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mt-3">
                  <Form.Control
                    type="password"
                    placeholder="Enter your password..."
                    onChange={(e) => setPass(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button type="submit" variant="success" className="w-100 mt-4">
                  Register
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
    </>
  );
}
