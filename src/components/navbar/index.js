import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import FormControl from 'react-bootstrap/FormControl';

const Navigation = () => {
    return (
    <>
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Jonnyt</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Portfolio</Nav.Link>
      <Nav.Link href="https://github.com/Jogwums">Contact</Nav.Link>
    </Nav>
    <Form inline>
      {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
      <Button variant="outline-dark">
        <Nav.Link class="text-primary" href="https://www.linkedin.com/in/jonathan-ogwumike012016/">LinkedIn</Nav.Link>
      </Button>
    </Form>
  </Navbar>
    </>
  )
}

export default Navigation;
