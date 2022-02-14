import React from 'react'
import { Container,Row } from 'react-bootstrap'
import FAQAccordion from '../components/FAQAccordion'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

function FAQ() {
  return (
    <>
    <NavBar name='faq'/>
        <Container className="mt-5">
        <Row className='d-flex flex-row align-items-center justify-content-around' style={{minHeight:'72vh'}}>
        <center>
            <FAQAccordion q={'How safe is Yathra for kids?'}/>
            <FAQAccordion q={'How and when should I cancel my ride?'}/>
            <FAQAccordion q={'What should I do if I am given a cooked up bad rating?'}/>
            <FAQAccordion q={'How exactly am I benefitted by using Yathra?'}/>
            <FAQAccordion q={'What happens if I miss my ride?'}/>
        </center>   
        </Row>
        </Container>  
    <Footer/>
    </>
  )
}

export default FAQ