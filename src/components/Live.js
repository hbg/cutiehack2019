import React, { Component } from 'react';
import SideNav from './SideNav';
import { Animated } from 'react-animated-css';
import './css/Live.css';

const liveBG = require('./assets/cutiehacklive.svg');

class Live extends Component {

  state = {

  }

  render(){
    return(
      <Animated animationIn="fadeIn" isVisible={true}>
        <div className="liveSec1">
          <div>
          </div>
          <SideNav/>
        </div>
      </Animated>
    )
  }



}

export default Live;
