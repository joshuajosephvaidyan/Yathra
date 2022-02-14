import React from 'react'
import '../stylesheets/navbar.css'
import { Button, Container,Navbar,Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'
function NavBar(props) {
  return (
    <div>
    <Navbar bg="white" expand="lg" fixed="top">
    <Container fluid>
      <Navbar.Brand href="#" style={{color:"#5284B8",}}>Yathra</Navbar.Brand>
      <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end align-items-center">
            <Nav.Link className="navlink" style={{color: props.name === 'hiw'?'#4D7299':'#5B5252'}}>
              <Link to="/HowItWorks" style={{textDecoration:'none',color:'inherit'}}>How It Works</Link>
            </Nav.Link>
            <Nav.Link className="navlink" style={{color:props.name === 'faq'?'#4D7299':'#5B5252'}}>
              <Link to="/FAQ" style={{textDecoration:'none',color:'inherit'}}>FAQ</Link>
            </Nav.Link>
            <Nav.Link className="navlink" style={{color:props.name === 'cu'?'#4D7299':'#5B5252'}}>
              <Link to="/Contact" style={{textDecoration:'none',color:'inherit'}}>Contact Us</Link>
            </Nav.Link>
            <Link to='/SignIn'>
            <Button style={{backgroundColor:'#C5EFF7',borderColor:'#C5EFF7',fontSize: '14px',marginLeft: '10px',color:'#5B5252'}}>
                Sign In
            </Button>
            </Link>
        </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  )
}

export default NavBar