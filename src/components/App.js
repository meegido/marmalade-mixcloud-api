/* global Mixcloud*/
import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import FeaturedMix from './FeaturedMix';
import Header from './Header';
import Home from './Home';


const Archive = () => <h1>Archive</h1>
const About = () => <h1>About</h1>
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        playing: false,
        currentMix: '',
        mix: null,
      }

    this.player = React.createRef();
  }

  fetchMixes = async () => {
    try {
      const response = await fetch('https://api.mixcloud.com/TheVinylFactory/vf-live-zudrangma-records-2/');
      const data = await response.json();
      this.setState({
        mix: data
      })
    } catch (error) {
      console.log(error)
    }
  }

  mountAudio = async () => {
    this.widget = Mixcloud.PlayerWidget(this.player.current);
    await this.widget.ready;

    this.widget.events.pause.on(() =>
      this.setState({
        playing: false,
      })
    );

    this.widget.events.play.on(() =>
      this.setState({
        playing: true,
      })
    );
    console.log(this.widget)
  }

  componentDidMount() {
    this.mountAudio();  
    this.fetchMixes();
  }

  actions = {
    togglePlay: () => {
      this.widget.togglePlay();
    },
    playMix: mixName => {
      const {currentMix} = this.state;
      if (mixName === currentMix) {
        return this.widget.togglePlay();
      } 
      this.setState({
        currentMix: mixName,
      });
      this.widget.load(mixName, true);
    }
  };

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
            <Route exact path="/" >
              <Home {...this.state} {...this.actions}/>
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
            ref={this.player} 
            enablejsapi="1"
          />
        </div>
      </div>
    </Router>
    )
  }
}

export default App;
