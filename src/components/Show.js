import React, {Component} from 'react';

class Show extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mix: null
    }
  }
  
  componentWillReceiveProps(nextProps) {
    const {match} = this.props;
    const {mixes} = nextProps;

    const [firstMix = {}] = mixes.filter(mix => mix.slug === match.params.slug)
    this.setState({
      mix: firstMix
    })  
  }

  render () {
    const {match} = this.props;
    return (
      <div>
        <h1>Show Page</h1>
        <p>{match.params.slug}</p>
      </div>
    )
  }

}

export default Show;
