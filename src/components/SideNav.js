import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const cbIcon = require('./assets/bIcon.png');

class SideNav extends Component {

  redirectHome = () => {
    window.location.assign('#/live')
  }

  redirectSchedule = () => {
    window.location.assign('#/schedule')
  }

  render(){
    return(
      <div>
        <div className="liveSec2">
          <div className="liveNav">
            <img className="liveIcon" src={cbIcon}></img>
            <h1 className="liveTitle">Cutie Hack</h1>
            <div className="liveTitleCont">
              <div>
                <h1 className="liveSubTitle" onClick={this.redirectHome}>Home</h1>
              </div>
              <div>
                <h1 className="liveSubTitle" onClick={this.redirectSchedule}>Schedule</h1>
              </div>
              <div>
                <h1 className="liveSubTitle">Map</h1>
              </div>
              <div>
                <h1 className="liveSubTitle">Resources</h1>
              </div>
              <div>
                <h1 className="liveSubTitle">Judging</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SideNav;
