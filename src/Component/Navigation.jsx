import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  
} from "react-bootstrap";
// import Button from "react-bootstrap/Button";

export const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg"> 
        <Container fluid>
          <Navbar.Brand href="#"> </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              style={{ padding: "20px", margin: "50px" }}
              className="me-auto  my-2 my-lg-0"
            >
              <Button style={{ margin: "50px" }} variant="warning">
                Home
              </Button>{" "}
              
              <Button style={{ margin: "50px" }} variant="secondry">
                Services
              </Button>
              <Button style={{ margin: "50px" }} variant="primary">
                Products
              </Button>
              <Button style={{ margin: "50px" }} variant="success">
                ContacUs{" "}
              </Button>
              <Button style={{ margin: "50px" }} variant="info">
                Courses{" "}
              </Button>
              
            </Nav>
            
            <Form className="d-flex">
              <Form.Control
                type="search"
                plceholder="search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-sucess">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Navigation;
