import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import HowItWorks from './pages/HowItWorks';
import LandingPage from './pages/LandingPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './main.css';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import ScheduleRide from './pages/ScheduleRide';
import JoinRide from './pages/JoinRide';

function App() {
  return (
    
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = '/'>
               <LandingPage /> 
          </Route>    
          <Route exact path = '/HowItWorks'>    
              <HowItWorks />
          </Route>
          <Route exact path = '/Contact'>    
              <Contact />
          </Route>
          <Route exact path = '/FAQ'>    
              <FAQ />
          </Route> 
          <Route exact path = "/SignIn">   
              <SignIn/>
          </Route>
          <Route exact path = '/SignUp'>    
              <SignUp/>
          </Route>
          <Route exact path="/ScheduleRide">
              <ScheduleRide/>
          </Route>    
          <Route exact path="/JoinRide">
              <JoinRide/>
          </Route>
        </Switch>
      </Router>         
    </div>
    
  );
}

export default App;
