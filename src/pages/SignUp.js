import React from 'react'
import NavBarSign from '../components/NavBarSign'
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'

function SignUp() { 
  return (
        <>
        <NavBarSign />
        <Container>
        <Row className='d-flex flex-row align-items-center justify-content-around' style={{minHeight:'72vh'}}>
            <Col md={6} className="">
                <div>
                    <center>
                    <div className="h4 mb-3" style={{color:'#5284B8',}}>Join Us and Save the World</div>
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Name"
                        aria-label="UserName"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Email"
                        aria-label="UserEmail"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Password"
                        aria-label="UserPassword"
                        aria-describedby="basic-addon1"
                        type='password'
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Confirm Password"
                        aria-label="UserConfirmPassword"
                        aria-describedby="basic-addon1"
                        type='password'
                        />
                    </InputGroup>
                    <Button style={{backgroundColor:'#5284B8',borderColor:'#5284B8'}} className='ps-4 pe-4 mt-2 mb-2'>Sign Up</Button>
                    <div style={{color:'#726767',fontSize:'small'}} className='mt-3'>Or if you already have an account <Link to="/SignIn" style={{color:'inherit',textDecoration:'none',fontStyle:'italic'}}>SignIn</Link></div>
                    </center>
                </div>
            </Col>

            <Col md={6} className='d-flex align-items-center justify-content-center'>
                <img src={require('../assets/SignUpImg.jpg')} alt='SignInImg' 
                class='img-fluid' 
                style={{maxHeight:'450px'}}/>
            </Col>   
        </Row>
        </Container>  
        <Footer/>
    </>
  )
}

export default SignUp