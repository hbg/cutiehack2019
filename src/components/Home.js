import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Hamburger from './Hamburger';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Icon } from 'antd';
import { Redirect } from 'react-router-dom';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Row, Container, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Animated } from 'react-animated-css';
import { Pulse } from 'react-motions';
import AOS from 'aos';
import './css/Home.css';

const cutieIcon = require('./assets/cutieHome.png');
const cutieFooter = require('./assets/cutieFooter.png');
const acm = require('./assets/acm.png');
const ieee = require('./assets/ieee.png');
const volunteer = require('./assets/CUTIE_volunteers.png');
const mentor = require('./assets/CUTIE_mentors.png');
const antIcon = <Icon type="loading" className="spinner" spin />;

class Arrow extends Component {
  constructor(props, context) {
    super(props, context);
    AOS.init();
    this.state = {
      collapse: false
    };
  }

  toggle = () => {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render(){
    return(
      <div>
        <div className="flex">
          <div className="faqTitle">{this.props.title}</div>
          <Icon onClick={this.toggle} className="arrowIcon" type="down" />
        </div>
        <Collapse isOpen={this.state.collapse}>
          <Card className="cardStyling">
            <CardBody className="faqText">{this.props.body}</CardBody>
          </Card>
        </Collapse>
      </div>
    )
  }
}

class Home extends Component {
  constructor(props, context) {
    super(props, context);
    AOS.init({
        once: true,
    });
    this.state = {
      auth: false,
      redirectRegister: false,
      redirectLogin: false,
      loading: false
    };
  }

  componentWillReceiveProps (){
    AOS.refresh();
  }

  loader = () => {
    return (
      <div>
        <div className="alignMiddle">
          {antIcon}
        </div>
      </div>
    )
  }

  handleClick = () => {
    this.setState({
      redirectRegister: true
    })
  }

  HomeRedirect = () => {
    window.location.assign('/')
  }

  LoginRedirect = () => {
    this.setState({
      redirectLogin: true,
    })
  }

  handleReceive = () => {
    this.setState({
      loading: true
    })
  }

  handleLogout = () => {
    localStorage.removeItem("token")
    window.location.assign('/')
  }

  retHome = () => {
    return (
      <div>
        <Animated animationIn="fadeIn" isVisible={true}>
          <div className="heroStyling">
            <div className="navbarHome"><Navbar /></div>
            <div className="homeNav"style={{paddingLeft: '10px'}}>
            <button className="buttons" onClick={this.HomeRedirect}>HOME</button>
            {this.props.currentUser.profile ?
              <button className="buttons" onClick={this.handleLogout}>LOGOUT</button>
              :
              <button className="buttons" onClick={this.LoginRedirect}>LOGIN</button>
            }
          </div>
            <Hamburger />
              <div className="mainHeaderContainer">
                <h1 className="mainTitle">CUTIE HACK</h1>
                <div data-aos="fade-right" data-aos-delay="300" className="mainUnderline"></div>
                <h2 className="mainSubTitle">NOVEMBER 9, 2019</h2>
                {this.props.currentUser.profile ?
                  null
                  :
                  <div>

                  </div>
                }
              </div>
          </div>
        </Animated>
          <div className="section2">
            <div className="s1">
              <img data-aos="fade-up" className="section2img" src={cutieIcon}></img>
            </div>
            <div className="s2">
              <div data-aos="fade-up" className="sec2Title"><div className="about">ABOUT</div> <div className="cutieHackHeader">CUTIE HACK</div></div>
              <div data-aos="fade-right" data-aos-delay="300" className="borderCutie"></div>
              <p data-aos="fade-up" className="sec2Text">Cutie Hack is a 12 hour hackathon hosted at UC Riverside designed for beginners. The hackathon invites students in the Riverside area to collaborate and innovate on projects. We will also be hosting several workshops to enable beginners to learn the skills they need to create a project.  <br></br> <br></br> This year, Cutie Hack is proud to announce that we will be accepting high school students as well!</p>
            </div>
          </div>
          <div className="volunteer">
          <div style={{width: '50%'}}>
            <div style={{paddingLeft: '13%'}}>
              <div data-aos="fade-up" className="volunteerTitle">LOOKING TO HELP OUT?</div>
              <div data-aos="fade-right" data-aos-delay="300" className="borderVolunteer"></div>
            </div>
          </div>
          <div style={{display: 'flex'}}>
            <div className="s3">
              <div style={{textAlign: 'center'}}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdjf33gcqVvxORyFOx2twgwQF-uFWxqDp9lXgiq0AMfsKWtWw/viewform?usp=sf_link">
                  <img className="vImg1" src={volunteer}></img>
                  <h1 className="volunteerText">VOLUNTEER</h1>
                </a>
              </div>
            </div>
            <div className="s4">
              <div style={{textAlign: 'center'}}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfWj9LKl0m6nxGdV9taf2s-QxbUKdnkN47UwQ-7fG-t2KUwFg/viewform?usp=sf_link">
                  <img className="vImg2" src={mentor}></img>
                  <h1 className="volunteerText">MENTOR</h1>
                </a>
              </div>
            </div>
            </div>
          </div>
          <div className="section3">
            <div style={{width: '100%', textAlign: 'center'}}>
              <h1 className="sec3Title">FAQs</h1>
            </div>
            <Container fluid className="noPadding">
              <Row className="noMarginFAQ">
                <Col className="noPadding">
                  <div className="faqBubble" >
                    <div>
                      <Arrow title={'What is a hackathon?'} body={"A hackathon is a place where you and hundreds of other people learn, build, and create new technologies over the course of one weekend! Hackathons let you try learning a new skill, commit to that crazy idea you've never had time for, or make new friendships and strengthen old ones."} />
                    </div>
                    <div className="secondaryFaq">
                      <Arrow title={'Who can attend?'} body={'We welcome all undergraduate students from UCR, RCC, and CBU to attend. High school students in the surrounding area are also encouraged to attend!'} />
                    </div>
                    <div className="secondaryFaq">
                      <Arrow title={'Is there free food?'} body={'Yes! Meals, refreshments, and snacks will be provided throughout the event'} />
                    </div>
                    <div className="secondaryFaq">
                      <Arrow title={'Do I need a team?'} body={'Teams are not required, but are recommended. Teams are capped at 4 members and you will have an opportunity to form teams at the start of the event as well.'} />
                    </div>

                  </div>
                </Col>
                <Col className="noPadding">
                  <div className="faq2Bubble">
                    <div>
                      <Arrow title={'Is Cutie Hack free?'} body={'Absolutely! There is no cost to attend, but do bring your own hacking device(s)!'} />
                    </div>
                    <div className="secondaryFaq">
                      <Arrow title={'What should I bring?'} body={'Student IDs are required. Consider bringing a hacking machine, headphones, and computer peripherals. Feel free to bring your own parts as well but note that soldering is not allowed at Cutie Hack.'} />
                    </div>
                    <div className="secondaryFaq">
                      <Arrow title={"What if I don't know how to code?"} body={'Cutie Hack is a beginner friendly hackathon and open to all skill levels. During the event take the time to checkout workshops and collaborate with others!'} />
                    </div>
                    <div className="secondaryFaq">
                      <Arrow title={'What if I still have questions?'} body={"Email us at citrushack@gmail.com. We love answering questions!"} />
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        <div className="stats">
          <div id = "justForStats">
            <div className="statsContainer">
              <span data-aos="fade-down" data-aos-duration="200" className="statsHeader">12</span>
              <br></br>
              <span className="statsSubHeader" style={{paddingLeft:'10px'}}>HOURS</span>
            </div>
            <div className="statsContainer">
              <span data-aos="fade-down" data-aos-duration="200" data-aos-delay="200" className="statsHeader">300</span>
              <br></br>
              <span className="statsSubHeader">HACKERS</span>
            </div>
            <div className="statsContainer">
              <span data-aos="fade-down" data-aos-duration="200" data-aos-delay="400" className="statsHeader">75</span>
              <br></br>
              <span className="statsSubHeader">PROJECTS</span>
            </div>
          </div>
        </div>
          <div className="section4">
            <div style={{width: '100%', textAlign: 'center'}}>
              <h1 className="sec4Title">ORGANIZERS</h1>
              <Container style={{marginTop: '60px'}}fluid className="noPadding">
                <Row className="noMarginSponsor">
                  <Col className="noPaddingSponsor">
                    <a href="https://acmucr.org/">
                      <img className="acm" src={acm}></img>
                    </a>
                  </Col>
                  <Col className="noPaddingSponsor">
                    <a href="https://ieee.ee.ucr.edu/">
                      <img className="ieee" src={ieee}></img>
                    </a>
                  </Col>
                </Row>
              </Container>
            </div>
            <img className="homeFooter" src={cutieFooter}></img>
          </div>
          <div className="footer">
            <div className="footerWrap">
              <div style={{margin: 'auto'}}>
                <a href="https://www.facebook.com/cutiehack/"><Icon className="footerIcon2" type="facebook" /></a>
                <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=citrushack@gmail.com'"><Icon className="footerIcon" type="mail" /></a>
                <a href="https://twitter.com/citrushack"><Icon className="footerIcon" type="twitter-square" theme="filled" /></a>
                <a href="https://www.instagram.com/citrushack_ucr/"><Icon className="footerIcon3" type="instagram" /></a>
              </div>
            </div>
            <div style={{textAlign: 'center'}}>
              <p className="footerText">Made with ♥ in Riverside, CA</p>
            </div>
            <div style={{paddingBottom: '0.5%', textAlign: 'center'}}>
              <p className="footerText">© 2019 Cutie Hack</p>
            </div>
          </div>
      </div>
    )
  }
  render(){
    if (this.state.redirectRegister){
      return <Redirect push to= "/register" />
    }
    if (this.state.redirectLogin){
      return <Redirect push to="/login" />
    }
    if (this.props.currentUser.profile && this.state.loading === false){
      this.handleReceive();
    }
    return(
      <div>
      {localStorage.token ?
        <div> {this.state.loading ? this.retHome(): this.loader()}</div>:this.retHome()
      }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Home);
