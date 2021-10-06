import React from 'react'
import "../App.css"
import {FaSearch,FaBell} from 'react-icons/fa'
import {HiCode} from 'react-icons/hi'
import {CgProfile} from 'react-icons/cg'
import {Navbar,Container,NavDropdown,Nav} from 'react-bootstrap'
const Navigationbar = () => {
    return (
        <div>
            <Navbar style={{backgroundColor:'black'}} variant='dark' expand='lg'>
            <Container >
            <Navbar.Brand href="#home"><HiCode/>&nbsp;Hackathon</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse  id="basic-navbar-nav" className="justify-content-center">
      <Nav >
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Challenges</Nav.Link>
        <Nav.Link href="#link">Projects</Nav.Link>
        <Nav.Link href="#link">About</Nav.Link>
        <Nav.Link className="details"><FaSearch></FaSearch></Nav.Link>
        <Nav.Link className="details"><FaBell></FaBell></Nav.Link>
        <Nav.Link className="details"><CgProfile></CgProfile></Nav.Link>
      </Nav>
    </Navbar.Collapse>        
        </Container>
            </Navbar>
            
        </div>
    )
}

export default Navigationbar
