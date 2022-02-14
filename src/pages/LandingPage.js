import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import {Link} from 'react-router-dom'

function LandingPage() {
  return (
    <div>
        <NavBar />
        <Container lg>
            <Row className="mt-5">      
               <Col md={6} className="d-flex align-items-center p-5">
                   <div style={{color:"#5284B8",marginRight:'50px',fontSize:'25px'}}>
                    It’s simple, quick, cheap
                    and fun way to commute
                    together.
                        <div style={{fontSize:'15px',color:'#5B5252',marginRight:'35px'}}>
                        <br/>    
                        Yatra connects people who need to help
                        contribute for our planets wellbeing by 
                        carpooling with drivers who travel with
                        empty seats.
                        </div>
                      <div className="mt-4">
                         <Link to="/JoinRide">
                           <Button style={{backgroundColor:'#5284B8',borderColor:'#5284B8'}}>Find A Ride</Button>
                         </Link>  
                         &nbsp;
                         <Link to="/ScheduleRide">
                           <Button className="btn-warning" style={{backgroundColor:'#FAE953',borderColor:'#FAE953',color:'#000',}}>Schedule A Ride</Button>
                         </Link>
                      </div>
                   </div>
               </Col>
               
               <Col md={6}>
                   <img className="img-fluid" src={require('../assets/LandingPageImage1.jpg')} alt={"CarPooling"}></img>
               </Col>       
            </Row>

            <Row className="d-flex align-items-center" style={{marginTop:'60px',marginBottom:'60px',}}>
               <Row className="d-flex align-items-center justify-content-center" 
                style={{color:"#5284B8",marginBottom:'50px',fontSize:'25px'}}>
                 Why You Would Love Yatra?
               </Row>
               <Row>     
                    <Col md={6} className="d-flex align-items-center">
                        <img className="img-fluid" src={require('../assets/LandingPageImage2.jpg')} alt={"CarPooling"}></img>
                    </Col>

                    <Col md={6} className="d-flex align-items-center p-5" style={{height:'100%',}}>
                       <div className=""> 
                        <div style={{color:"#5284B8",marginRight:'50px',fontSize:'25px',marginBottom:'8px'}}>
                        Safety
                                <div style={{fontSize:'15px',color:'#5B5252',marginRight:'20px'}}>
                                Yathra is commited towards your safety by providing
                                you features like live tracking, driver rating, co passengers
                                rating etc.
                                </div>
                        </div>
                        <div style={{color:"#5284B8",marginRight:'50px',fontSize:'25px',marginBottom:'8px'}}>
                        Easy to use
                                <div style={{fontSize:'15px',color:'#5B5252',marginRight:'20px'}}>
                                Enjoy our hassle free and easy to use interface that you
                                would fall in love with.
                                </div>
                        </div>
                        <div style={{color:"#5284B8",marginRight:'50px',fontSize:'25px',marginBottom:'8px'}}>
                        Pocket Friendly
                                <div style={{fontSize:'15px',color:'#5B5252',marginRight:'20px'}}>
                                Ge ready to be astound by our cheap prices.
                                </div>
                        </div>
                      </div>  
                    </Col>
               </Row>       
            </Row>
            <Footer />
        </Container>    
    </div>
  )
}

export default LandingPage