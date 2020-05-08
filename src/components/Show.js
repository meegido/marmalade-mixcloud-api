import React, {Component} from 'react';
import Stat from './Stat';
class Show extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mix: {}
    }
  }
  
  componentWillReceiveProps(nextProps) {
    const {match} = this.props;
    const {mixes} = nextProps;
    console.log({mixes})

    const [firstMix = {}] = mixes.filter(mix => mix.slug === match.params.slug);
    console.log(firstMix)
    this.setState({
      mix: firstMix
    }) 
  }

  render () {
    const {match} = this.props;
    const {mix} = this.state;
    
    return (
      <div className="ph3 ph4-l pad-bottom">
        <div className="measure center lh-copy">
          <p>{mix.description}</p>
        </div>
        <div>
          <Stat statName="Plays" statNumber={54654} statWord="times"/>
          <Stat statName="Uploaded" statNumber={mix.created_time} statWord="days ago"/>
          <Stat statName="Lasting for" statNumber={mix.audio_length / 60} statWord="minutes"/>
        </div>
      </div>
    )
  }
}

export default Show;
