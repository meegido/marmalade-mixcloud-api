import React from 'react';
import Mix from './Mix';

const Home = ({...props}) => (
  <div className='flex flex-wrap justify-between mixes ph3 ph4-1'>
    <div className='mix mb4'>
      <Mix name="Live Joakim" id='/TheVinylFactory/vf-live-joakim/' {...props}/>
    </div>
      <div className='mix mb4'>
      <Mix name="Squeeze" id='/FreshlySqueezedMusic/may-2020-unreleased-electro-swing/' {...props}/>
    </div>
      <div className='mix mb4'>
      <Mix name="Club edition" id='/stefanonoferini/club-edition-396-stefano-noferini/' {...props}/>
    </div>
      <div className='mix mb4'>
      <Mix name="Live Zudrangma" id='/TheVinylFactory/vf-live-zudrangma-records-2/' {...props}/>
    </div>
  </div>
);

export default Home;
