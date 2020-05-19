/* global Mixcloud*/
import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { connect } from 'react-redux';


import FeaturedMix from './FeaturedMix';
import Header from './Header';
import Home from './Home';
import Archive from './Archive';
import About from './About';
import Show from './Show';

import mixesData from '../data/mixes';
import actions from '../store/actions';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        playing: false,
        currentMix: '',
        mix: null
      }

    this.player = React.createRef();
  }

  fetchMixes = async () => {
    const {addMix} = this.props;
    mixesData.map(async id => {
      try {
        const response = await fetch(`https://api.mixcloud.com${id}`);
        const data = await response.json();
        addMix(data);

      } catch (error) {
        console.log(error)
      }
    });
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
    const [firstMix = {}] = this.props.mixes;
    return(
    <Router>
      <div>
        <div className="flex-l justify-end">
          {/* FeaturedMix */}
          <FeaturedMix {...this.state} {...this.actions} {...firstMix} id={firstMix.key}/>
          <div className="w-50-l relative z-1">
            {/* Header */}
            <Header/>
            {/* Routed Pages */}
            <Route exact path="/" >
              <Home />
            </Route>
             <Route path="/archive">
              <Archive />
            </Route>
            <Route path="/about">
              <About {...this.state}/>
            </Route>
             <Route path="/show/:slug" render={routeParams => (
               <Show {...this.state} {...routeParams}/>
             )} />
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

export default connect(state => state, actions)(App);
