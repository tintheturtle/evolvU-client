import './App.css';

import { 
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import Homepage from "./components/Homepage/index.js";
import Navbar from "./components/Navbar/index.js";
import ErrorPage from "./components/ErrorPage/index.js";
import SearchPage from "./components/SearchPage/index.js";
import PlaceHolderPage from "./components/PlaceHolderPage/index.js";
import Footer from "./components/Footer";
import CoachApplyLanding from "./components/CoachApplyLanding";
import CoachEligibility from "./components/CoachEligibility/index.js";
import CoachApplication from "./components/CoachApplication/index.js";
import About from "./components/About";
import Contact from "./components/Contact";
import Privacy from "./components/Privacy";
import Testimonial from "./components/Testimonial";
import Safety from "./components/Safety";

function App() {
  return (
    
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/"> <Homepage/> </Route>
          <Route path="/home" component={ErrorPage} />
          <Route path="/about" component={About} />
          <Route path="/search" component={SearchPage} />
          <Route path="/apply" component ={CoachApplyLanding} />
          <Route path="/eligibility" component ={CoachEligibility} />
          <Route path="/application" component ={CoachApplication} />
          <Route path="/contact" component ={Contact} />
          <Route path="/privacy" component ={Privacy} />
          <Route path="/testimonial" component ={Testimonial} />
          <Route path="/safety" component ={Safety} />


          <Route path="/sign-in">
              <PlaceHolderPage page="Sign In Page"/>
          </Route>
          <Route path="/sign-up">
              <PlaceHolderPage page="Sign Up Page"/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
