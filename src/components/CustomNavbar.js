import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
const CustomNavbar = ()=>{
    return (
      <div>
    <Navbar className="justify-content-start fixed-top" bg = "dark" variant='dark' expand="lg" style={{width: "100%"}}>
      <Container>
        <Navbar.Brand href="/">NewsMonkey</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/business">Business</Nav.Link>
            <Nav.Link href="/entertainment">Entertainment</Nav.Link>
            {/* <Nav.Link href="/general">General</Nav.Link> */}
            <Nav.Link href="/health">Health</Nav.Link>
            <Nav.Link href="/science">Science</Nav.Link>
            <Nav.Link href="/sports">Sports</Nav.Link>
            <Nav.Link href="/technology">Technology</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    ) 
}
export default CustomNavbar
