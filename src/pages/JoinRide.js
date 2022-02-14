import React from 'react'
import { Row, Container, Col, Button, InputGroup, FormControl} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import RideCard from '../components/RideCard'
import '../stylesheets/scrollbar.css'

function JoinRide() {
  return (
    <div>
    <Container fluid lg style={{width:'100vw',padding:'0'}}>
        <Row style={{margin:'0'}}>
           <Col md={8} style={{height:'100vh',margin:'0',padding:'0'}} className=''> 
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15547.564996038724!2d80.22989908482033!3d13.042593702948412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526655a5da2371%3A0x4954f49743f04af0!2sT.%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1644601718044!5m2!1sen!2sin" 
             width="100%" height="100%" title="map" style={{border:'0',margin:'0',postion:'relative'}}></iframe>
           </Col>

           <Col md={4} style={{height:'100vh',margin:'0',padding:'0'}} className='d-flex justify-content-center'>  
             <div>
              <div style={{width:'100%'}} className='mt-2'>
                 <Row style={{margin:'0'}}> 
                    <div className="d-flex justify-content-between">
                        <Link to="/"> 
                            <Button style={{backgroundColor:'#C5EFF7',borderColor:'#C5EFF7'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000" class="bi bi-house-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                    <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                </svg>
                            </Button>
                        </Link> 
                        <Link to="/ScheduleRide" style={{width:'90%',textDecoration:'none'}} className="d-flex justify-content-center"> 
                          <Button className="btn-warning" style={{backgroundColor:'#FAE953',borderColor:'#FAE953',color:'#000',width:'98%'}}>Instead Schedule A Ride</Button>
                        </Link>
                    </div>
                    <InputGroup className="mb-2 mt-4" >
                                <FormControl
                                placeholder="Start Location"
                                aria-label="StartLocation"
                                aria-describedby="basic-addon1"
                                />
                        </InputGroup>
                        <InputGroup className="mb-2 mt-2" >
                                <FormControl
                                placeholder="End Location"
                                aria-label="EndLocation"
                                aria-describedby="basic-addon1"
                                />
                        </InputGroup>
                      <div className="d-flex">
                        <InputGroup className="me-1" >
                                <FormControl
                                placeholder="Approximate Departure Time"
                                aria-label="ApproxDeparture"
                                aria-describedby="basic-addon1"
                                type="date" 
                                />
                        </InputGroup>    
                        <InputGroup className="ms-1" >
                                <FormControl
                                placeholder="Approximate Departure Time"
                                aria-label="ApproxDeparture"
                                aria-describedby="basic-addon1"
                                type="time" 
                                />
                        </InputGroup>
                      </div>  
                      <div className="mt-3 mb-3" style={{color: '#5B5252'}}>Available Rides:10</div>
                 </Row>
              </div>
              <Row style={{margin:'0',width:'98%',height:'55%'}} className="d-flex justify-content-center align-items-center scrollablerow">
                <div style={{height:'100%',overflowY:'scroll'}} className=""> 
                   <RideCard name="Tommy" type="SUV" sharep="5"/>
                   <RideCard name="Carl Johnson" type="Sedan" sharep="4"/>
                   <RideCard name="TenPenny" type="Hatch Back" sharep="5"/>
                   <RideCard name="Madison" type="Hatch Back" sharep="5"/>
                   <RideCard name="Jake" type="SUV" sharep="5"/>
                   <RideCard name="Paul" type="Sedan" sharep="4"/>
                   <RideCard name="Logan" type="SUV" sharep="5"/>
                   <RideCard name="John" type="Sedan" sharep="4"/>
                   <RideCard name="David" type="SUV" sharep="5"/>
                   <RideCard name="James" type="HatchBack" sharep="5"/>
                </div>
              </Row>
            </div>  
           </Col>
        </Row>
    </Container>
    </div>      
  )
}

export default JoinRide