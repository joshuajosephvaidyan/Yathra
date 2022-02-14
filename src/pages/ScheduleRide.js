import React, { useState } from 'react'
import { Row, Container, Col, Button, InputGroup, FormControl} from 'react-bootstrap'
import ICard from '../components/ICard'
import {Link} from 'react-router-dom';

function ScheduleRide() {
   const [type,settype] = useState('');
   return (
    <div>
        <Container fluid lg style={{width:'100vw',padding:'0'}}>
            <Row style={{margin:'0'}}>
               <Col md={8} style={{height:'100vh',margin:'0',padding:'0'}} className=''> 
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15547.564996038724!2d80.22989908482033!3d13.042593702948412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526655a5da2371%3A0x4954f49743f04af0!2sT.%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1644601718044!5m2!1sen!2sin" 
                 width="100%" height="100%" title="map" style={{border:'0',margin:'0',postion:'relative'}}></iframe>
               </Col>

               <Col md={4} style={{height:'100vh',margin:'0',padding:'0'}} className='d-flex align-items-center justify-content-center'>
               <div className="d-block" style={{width:'90%'}}>
                 <div className="d-flex justify-content-between">
                  <Link to="/"> 
                    <Button style={{backgroundColor:'#C5EFF7',borderColor:'#C5EFF7'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000" class="bi bi-house-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                        </svg>
                    </Button>
                  </Link> 
                  <Link to='/JoinRide' style={{width:'90%',textDecoration:'none'}} className="d-flex justify-content-center"> 
                    <Button className="btn-warning" style={{backgroundColor:'#FAE953',borderColor:'#FAE953',color:'#000',width:'98%'}}>Instead Find A Ride</Button>
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
                 <div className="d-flex justify-content-between align-items-center">
                   <div style={{color: '#5B5252'}} className='mb-3 mt-4'>Select your Vehicle Body Type</div>
                   <div className='mt-2'><ICard/></div>
                 </div>
                 <div className="d-flex flex-row justify-content-between mb-4">
                      <Button variant='warning' onClick={() => {settype('sedan')}} style={{maxWidth:'160px',padding:'5px',backgroundColor:'#FFF',boxShadow: type==='sedan'?'0 0 20px #FAE953':'',borderColor: type==='sedan'?'#FAE953':'#C4C4C4'}}>
                          <Row>
                            <img src={require('../assets/sedan.jpg')} style={{maxWidth:'131px',minHeight:'51px',}} alt="sedan"/>
                          </Row>
                         <div className='d-flex justify-content-center' style={{color:'#5B5252'}}>Sedan</div>
                      </Button>
                      <Button variant='warning' onClick={() => {settype('SUV')}} style={{maxWidth:'160px',padding:'5px',backgroundColor:'#FFF',boxShadow: type==='SUV'? '0 0 20px #FAE953' :'',borderColor: type==='SUV'?'#FAE953':'#C4C4C4'}}>
                          <Row>
                            <img src={require('../assets/SUV.jpg')} style={{maxWidth:'131px',maxHeight:'51px',}} alt="sedan"/>
                          </Row>
                         <div className='d-flex justify-content-center' style={{color:'#5B5252'}}>SUV</div>
                      </Button>
                      <Button variant='warning' onClick={() => {settype('hatch')}} style={{maxWidth:'160px',padding:'5px',backgroundColor:'#FFF',boxShadow: type==='hatch'?'0 0 20px #FAE953':'',borderColor: type==='hatch'?'#FAE953':'#C4C4C4'}} className="px-2" >
                          <Row>
                            <img src={require('../assets/hatchback.jpg')} style={{maxWidth:'131px',maxHeight:'51px',}} alt="sedan"/>
                          </Row>
                         <div className='d-flex justify-content-center' style={{color:'#5B5252'}}>HatchBack</div>
                      </Button>
                 </div>   
                 <div> 
                    <div class="d-flex">      
                        <InputGroup className="me-1" >
                                        <FormControl
                                        placeholder="Vehicle Brand"
                                        aria-label="VehicleBrand"
                                        aria-describedby="basic-addon1"
                                        />
                        </InputGroup>
                        <InputGroup className="ms-1" >
                                        <FormControl
                                        placeholder="Vehicle Model"
                                        aria-label="VehicleModel"
                                        aria-describedby="basic-addon1"
                                        />
                        </InputGroup>
                    </div> 
                    <div className="d-flex mt-2">
                        <InputGroup className="me-1" >
                                        <FormControl
                                        placeholder="Color"
                                        aria-label="Vehicle Color"
                                        aria-describedby="basic-addon1"
                                        />
                        </InputGroup>
                        <InputGroup className="ms-1" >
                                        <FormControl
                                        placeholder="Reg No"
                                        aria-label="RegNo"
                                        aria-describedby="basic-addon1"
                                        />
                        </InputGroup>
                    </div>
                 </div>
                 <div className="d-flex justify-content-between px-1 py-3">
                     <div className="d-flex flex-column align-items-center" style={{color:'#5B5252',fontSize:'large'}}>
                        <div>Total Distance</div>
                        <div style={{fontSize:'medium'}}>4 Km</div>
                     </div>
                     <div className="d-flex flex-column align-items-center" style={{color:'#5B5252',fontSize:'large'}}>
                        <div>Estimated Price</div>
                        <div style={{fontSize:'medium'}}>Rs 5</div>
                     </div>
                 </div>
                 <Button className="btn-warning" style={{backgroundColor:'#FAE953',borderColor:'#FAE953',color:'#000',width:'100%'}}>Schedule A Ride</Button>
               </div>
               </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ScheduleRide