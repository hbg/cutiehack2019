import React, { Component } from 'react';
//import {HashLink as Link} from 'react-router-hash-link';
import Scrollchor from 'react-scrollchor';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Row, Container, Col } from 'react-bootstrap';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './css/LiveNavbar.css';
const cutieIcon = require('./assets/cutieHome.png');
const homeIcon = require('./assets/home.png');
function LiveNavbar() {
        return (
            <div>
                <div className = "NavStructure"></div>
                <div className = "NavContainer">
                    {/* <div className = "IconContainer"> */}
                        <img className = "icon" src={cutieIcon}></img>
                    {/* </div> */}
                    <div className ="title">CUTIE HACK</div>
                    <Router>
                        <div className = "Navigation">
                            <ul>
                                <li><Scrollchor animate={{duration: 700}} to="#schedule">home</Scrollchor></li>
                                <li><Scrollchor animate={{duration: 700}} to="#schedule1">schedule</Scrollchor></li>
                                <li><Scrollchor animate={{duration: 700}} to="#schedule2">map</Scrollchor></li>
                                <li><Scrollchor animate={{duration: 700}} to="#schedule3">resources</Scrollchor></li>
                                <li><Scrollchor animate={{duration: 700}} to="#schedule4">judging</Scrollchor></li>
                            </ul>
                        </div>
                    </Router>
                </div>
                <Container fluid = "true" id = "mobile-nav">
                    <Row className="row text-center">
                        <Router>
                            <Col><Scrollchor animate={{duration: 700}} to="#schedule"><img className="mobile-icon" src = {homeIcon}></img></Scrollchor></Col>
                            <Col><Scrollchor animate={{duration: 700}} to="#schedule1"><img className="mobile-icon" src = {homeIcon}></img></Scrollchor></Col>
                            <Col><Scrollchor animate={{duration: 700}} to="#schedule2"><img className="mobile-icon" src = {homeIcon}></img></Scrollchor></Col>
                            <Col><Scrollchor animate={{duration: 700}} to="#schedule3"><img className="mobile-icon" src = {homeIcon}></img></Scrollchor></Col>
                            <Col><Scrollchor animate={{duration: 700}} to="#schedule4"><img className="mobile-icon" src = {homeIcon}></img></Scrollchor></Col>
                        </Router>
                    </Row>
                </Container>
            </div>
            
        );
    }


export default LiveNavbar;