import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown-now';
import './css/TimeRemaining.css';
class TimeRemaining extends React.Component{
   render(){
       return (       
         <div id ="Container">
           <h1 id ="text">time remaining</h1>
           <div id="Countdown">
           <Countdown date={'2019-11-09'} />
           </div>
         </div>
       )
    }
}

export default TimeRemaining;

