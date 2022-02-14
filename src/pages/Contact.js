import React from 'react'
import NavBar from '../components/NavBar'
import { Container, Row } from 'react-bootstrap'
import Footer from '../components/Footer'

function Contact() {
  return (
    <>
       <NavBar name='cu'/>
       <Container className="mt-5">
         <Row className='d-flex flex-row align-items-center justify-content-around' style={{minHeight:'72vh'}}>
          <center>
            <div> 
                <div className="h4" style={{color:'#5284B8'}}>Mail Us At</div>
                <div>contactus@yathra.com</div>
            </div>
            <br/>
            <div> 
                <div className="h4" style={{color:'#5284B8'}}>Or Talk to Us</div>
                <div>+91 12345 67890</div>
            </div>
          </center>   
         </Row>
       </Container>  
       <Footer/>
    </>
  )
}

export default Contact