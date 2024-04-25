import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Head() {
  return (
    <div>
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Angel One</Navbar.Brand>
      <Nav className="m-auto">
            <Nav.Link href="#home" style={{color:"white"}}>Home</Nav.Link>
            <Nav.Link href="#features" style={{color:"white"}}>About</Nav.Link>
             <Nav.Link href="#pricing" style={{color:"white"}}>Contact</Nav.Link>
            </Nav>~
         </Container>
     </Navbar>
    </div>
  )
}

export default Head