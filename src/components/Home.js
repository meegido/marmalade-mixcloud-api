import React from 'react';
import Mix from './Mix';

const Home = props => 
<div className='flex flex-wrap justify-between mixes ph3 ph4-1'>
 
  <div className='mix mb4'>
    <Mix name="Juan Falibene" {...props}/>
  </div>
</div>

export default Home;
