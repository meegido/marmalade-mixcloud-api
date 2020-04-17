import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import FeaturedMix from './FeaturedMix';
import Header from './Header';

const Home = () => <h1>Home</h1>
const Archive = () => <h1>Archive</h1>
const About = () => <h1>About</h1>
class App extends Component {
  render() {
    return(
    <Router>
      <div>
        <div className="flex-l justify-end">
          {/* FeaturedMix */}
          <FeaturedMix />
          <div className="w-50-l relative z-1">
            {/* Header */}
            <Header/>
            {/* Routed Pages */}
            <Route exact path="/">
              <Home />
            </Route>
             <Route path="/archive">
              <Archive />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </div>
        </div>
        <div>
          {/* AudioPlayer */}
            <iframe 
              width="100%" 
              height="60" 
              src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Fjuanfalibene%2Fsounds-healing-mixtape-2%2F" 
              frameBorder="0" 
              className="db fixed bottom-0 z-5" 
              />
        </div>
      </div>
    </Router>
    )
  }
}

export default App;
