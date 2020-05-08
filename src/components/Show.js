import React, {Component} from 'react';
import differenceInDays from 'date-fns/differenceInDays';
import parseISO from 'date-fns/parseISO'
import Stat from './Stat';
class Show extends Component {
  render () {
    // const {match} = this.props;
    const {match, mixes} = this.props;
    const [mix = {}] = mixes.filter(mix => mix.slug === match.params.slug);
    
    return (
      <div className="ph3 ph4-l pad-bottom">
        <div className="measure center lh-copy">
          <p>{mix.description}</p>
        </div>
        <div>
          <Stat statName="Plays" statNumber={mix.play_count || 0} statWord="times"/>

          <Stat statName="Uploaded" statNumber={differenceInDays(new Date(), parseISO(mix.created_time))} statWord="days ago"/>

          <Stat statName="Lasting for" statNumber={mix.audio_length / 60} statWord="minutes"/>
        </div>
      </div>
    )
  }
}

export default Show;
