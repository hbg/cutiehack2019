import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown-now';
import './css/TimeRemaining.css';
class TimeRemaining extends React.Component{
   render(){
       return (
           //<h1>time remaining</h1>
           <div id="Countdown">
           <Countdown date={'2019-11-09T01:02:03'} />
           </div>
       )
    }
}

export default TimeRemaining;

