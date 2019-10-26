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
                <div className="col-4 scheduleSec1">
                  <h4 className="scheduleHeaders">LOGISTICS</h4>
                    <div className="scheduleSlot">
                      <div className="scheduleSection">
                        <div className="innerLeftSchedule">Registration</div>
                        <div className="innerRightSchedule">7:00AM-8:00AM</div>
                      </div>
                      <div className="scheduleLoc">Bytes</div>
                    </div>
                    <div className="scheduleSlot">
                      <div className="scheduleSection">
                        <div className="innerLeftSchedule">Opening Ceremony</div>
                        <div className="innerRightSchedule">8:00AM-9:00AM</div>
                      </div>
                      <div className="scheduleLoc">MSE 104</div>
                    </div>
                    <div className="scheduleSlot">
                      <div className="scheduleSection">
                        <div className="innerLeftSchedule">Hacking Starts</div>
                        <div className="innerRightSchedule">9:00AM-9:00PM</div>
                      </div>
                      <div className="scheduleLoc">MSE 104</div>
                    </div>
                    <div className="scheduleSlot">
                      <div className="scheduleSection">
                        <div className="innerLeftSchedule">Demos</div>
                        <div className="innerRightSchedule">9:00PM-9:30PM</div>
                      </div>
                      <div className="scheduleLoc">WCH 205/206</div>
                    </div>
                    <div className="scheduleSlot">
                      <div className="scheduleSection">
                        <div className="innerLeftSchedule">Closing Ceremony</div>
                        <div className="innerRightSchedule">10:30PM-11:00PM</div>
                      </div>
                      <div className="scheduleLoc">WCH 205/206</div>
                    </div>
                </div>
                <div className="col-4 scheduleSec2">
                  WORKSHOPS
                </div>
                <div className="col-4 scheduleSec3">
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
