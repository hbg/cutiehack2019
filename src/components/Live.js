import React, { Component } from 'react';
import LiveNavbar from './LiveNavbar'
import './css/Live.css'

class Live extends Component {
  state = {

  }


  render(){
    return(
      <div>

        <LiveNavbar></LiveNavbar>
        <div className="display-1">
          <div id = "schedule">THIS IS PAGE 111111111</div>
          <div id = "schedule1">THIS IS PAGE 222222222</div>
          <div id = "schedule2">THIS IS PAGE 333333333</div>
          <div id = "schedule3">THIS IS PAGE 444444444</div>
          <div id = "schedule4">THIS IS PAGE 555555555</div>
      </div>
      </div>

    );
  }



}

export default Live;
