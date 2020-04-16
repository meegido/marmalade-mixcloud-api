import React, {Component} from 'react';
import FeaturedMix from './FeaturedMix';
import Header from './Header';

class App extends Component {
  render() {
    return(
    <div>
      <div className="flex-l justify-end">
        {/* FeaturedMix */}
        <FeaturedMix />
        <div className="w-50-l relative z-1">
          {/* Header */}
          <Header/>
          {/* Routed Pages */}
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
    )
  }
}

export default App;
