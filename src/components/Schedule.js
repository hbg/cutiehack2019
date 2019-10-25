import React, { Component } from 'react';
import SideNav from './SideNav';
import { Animated } from 'react-animated-css';
import './css/Schedule.css'


class Schedule extends Component {
  state = {
  }

  render() {
    return(
      <Animated animationIn="fadeIn" isVisible={true}>
        <div className="scheduleBG">
          <div className="scheduleLeft">
            <div className="container innerSchedule">
              <div className="row">
                <div className="col-3 scheduleSec1">
                  hello
                </div>
                <div className="col-6 scheduleSec2">
                  hello
                </div>
                <div className="col-3 scheduleSec3">
                  hello
                </div>
              </div>
            </div>
          </div>
          <SideNav/>
        </div>
      </Animated>
    )
  }



}

export default Schedule;
