import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


import ContactModal from '../Modal/ContactModal'

const Navigation = () => {
    return (
    <>
    <Navbar bg="dark" variant="dark" expand="md">
        <Navbar.Brand href="/">Jonnyt</Navbar.Brand>
        <Navbar.Toggle aria-controls="main"/>
        <Navbar.Collapse id="main">

          <Nav className="mr-auto">
            {/* <Nav.Link href="/">Portfolio</Nav.Link> */}
            <Nav.Link href="#scroll" disabled ><ContactModal text={"Portfolio"} /></Nav.Link>
            <Nav.Link href="#"><ContactModal text={"Contact"}/></Nav.Link>
          </Nav>
         <Nav className="ml-auto">
          <Nav.Link rel="noreferrer" target="_blank"
                    href="https://github.com/Jogwums">
                    Github
                    </Nav.Link>
      
            <Nav.Link className="text-primary" target="_blank" rel="noreferrer"
                      href="https://www.linkedin.com/in/jonathan-ogwumike012016/">
                        LinkedIn
                      </Nav.Link>
          </Nav>
      </Navbar.Collapse>
  </Navbar>
    </>
  )
}

export default Navigation;
