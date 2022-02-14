import React from 'react'
import NavBar from '../components/NavBar'
import { Row,Container } from 'react-bootstrap'
import Step from '../components/Step'
import Footer from '../components/Footer'
function HowItWorks() {
  return (
    <div>
    <NavBar name='hiw'/>     
    <Container lg className="mt-5">
        <Row style={{marginTop:'100px',marginBottom:'100px'}}>
          <center>  
            <div className="h4" style={{color:'#5284B8'}}>Monologue</div>
            <div>
                Yathra is commited to a mission of saving the earth by encouraging people to participate
                in Carpooling. We provide a platform and connect people who are like minded like us. Or if
                you are looking for pocket friendly methods to commute or are tired of public transport or
                want a day off driving Yathra is here for you. Want to know how Yathra works for you?
                Hang On.
            </div>
            <div className="d-flex align-items-center justify-content-center">
               <img src={require('../assets/happyearth.png')} className="img-fluid" alt="earth" style={{maxHeight:'300px'}}></img>
            </div>
            <div className="h4" style={{color:'#5284B8',marginTop:'40px'}}>How Yathra works for you?</div>
            <div className="h4" style={{color:'#5284B8',marginTop:'40px',marginBottom:'20px'}}>Joining a car party</div>
          </center>
          <div className="d-flex justify-content-between">
            <div className='ms-5 me-5' style={{}}>
                <Step number={1} step='Sign up if you are a new user or Login with us. We assure you that 
                we are collecting the least amount data required by us to serve and
                no data collected from us will never be sold by us or exposed to 
                any other third party. '/>
                <Step number={2} step='Go to Find Ride section. Type in your starting and destination locations
                and starting time in the input fields and click on search button. '/>
                <Step number={3} step='Compare all the listings available for your query. Refer all ratings with
                regards to the driver and your copassengers then select a suitable ride 
                for yourself which also suits your budget.'/>
                 <Step number={4} step='Click on join and that’s it enjoy your ride.'/>
            </div>
          </div>
          <center>
             <div className="h4" style={{color:'#5284B8',marginTop:'40px',marginBottom:'20px'}}>Hosting a car party</div>
          </center>
          <div className="d-flex justify-content-between">
            <div className='ms-5 me-5' style={{}}>
                <Step number={1} step='Sign up if you are a new user or Login with us. We assure you that 
                we are collecting the least amount data required by us to serve and
                no data collected from us will never be sold by us or exposed to 
                any other third party.'/>
                <Step number={2} step='Go to Schedule Ride section. Type in your starting and destination 
                locations, starting time and car body type in the input fields and 
                click on search button. '/>
                <Step number={3} step='Yathra will automatically calculate a fair price based on the body type
                and the travel distance. If you are Ok with the price proceed.'/>
                <Step number={4} step='When it is time to start your journey, find the scheduled journey from
                your profile and click on ‘Started’ button. Your pickup locations enroute will be marked on the map please find them and pick up your 
                co-yathrites.'/>
            </div>
          </div>
        </Row>
        <Footer />
    </Container>
    </div>
  )
}

export default HowItWorks