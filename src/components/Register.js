import React, { Component, useState } from 'react';
import Navbar from './Navbar';
import Hamburger from './Hamburger'
import { connect } from 'react-redux';
import { userPostFetch } from '../redux/actions';
import { Row, Container, Col } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { Animated } from 'react-animated-css';
import { Button, Icon, Input, Checkbox } from 'antd'
import { Toast } from 'react-bootstrap';
import './css/Register.css'

const cutieIcon = require('./assets/Icon.png');

class Registeration extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password1: "",
      password2: "",
      first_name: "",
      last_name: "",
      school: "",
      level_of_study: "",
      graduation_year: "",
      major: "",
      gender: "",
      date_of_birth: "",
      ethnicity: "",
      phone_number: "",
      dietary_restrictions: "",
      linkedin: "",
      github: "",
      resume: "",
      share_box: false,
      show: false,
      showDup: false,
      showSuccess: false,
      redirectLogin: false,
      isLoading: false
    }
  }

  validateForms = () => {
    let temp1 = this.state.password1;
    let temp2 = this.state.password2;
    let pwdError, firstNameError, lastNameError, conductError = false;
    let formValidation = true;
    if (temp1.length === temp2.length){
      for (let i = 0; i < temp1.length; ++i){
        if (temp1[i] != temp2[i]){
          pwdError = true;
          formValidation = false;
        }
      }
    }
    else {
      pwdError = true;
      formValidation = false;
    }
    if (this.state.first_name.length <= 0){
      firstNameError = true;
      formValidation = false;
    }
    if (this.state.last_name.length <= 0){
      lastNameError = true;
      formValidation = false;
    }
    if (formValidation){
      this.props.userPostFetch(this.state)
      .then(resp => {
        if (resp.Error) {
          console.log(resp)
          this.toggleShowDup();
          this.setState({
            isLoading: false
          })
        }
        else {
          this.setState(prevState => ({
            showSuccess: !prevState.showSuccess,
            isLoading: false
          }));
        }
      })
      .catch(err => console.log(err))
    }
    else {
      this.setState(prevState => ({
        show: !prevState.show,
        isLoading: false
      }));
    }
  }

  LoginRedirect = () => {
    this.setState({
      redirectLogin: true
    })
  }

  HomeRedirect = () => {
    window.location.assign('/')
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleShare = () => {
    this.setState(prevState => ({
      share_box: !prevState.share_box
    }))
  }

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }))
  }

  toggleShowDup = () => {
    this.setState(prevState => ({
      showDup: !prevState.showDup
    }))
  }

  toggleShowSuccess = () => {
    this.setState(prevState => ({
      showSuccess: !prevState.showSuccess
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isLoading: true
    })
    this.validateForms();
  }

  render(){
    let displayOne = this.state.showDup ? "displayDup" : "displayNone";
    let displaySecond = this.state.show ? "displayEmpty" : "displayNone";
    let displayThird = this.state.showSuccess ? "displaySuccess" : "displayNone";

    if (this.state.redirectLogin){
      return <Redirect push to="/login" />
    }
    return(
        <div className="registerParent">
        <div className="registerNav"style={{paddingLeft: '10px'}}>
          <button className="buttons" onClick={this.HomeRedirect}>HOME</button>
          <button className="buttons" onClick={this.LoginRedirect}>LOGIN</button>
        </div>
        <div className="hamburgerRegister"> <Hamburger /> </div>
        <Animated animationIn="fadeIn" isVisible={true}>
          <form className="formContainer" onSubmit={this.handleSubmit}>
            <div className="outerParent">
            <div style={{marginLeft: '4%', paddingTop: '4%', marginBottom: '0'}}>
              <h1 className="registrationTitle">Cutie Hack Registration</h1>
            </div>
              <div className="formFlex">
                <div className="firstInner">
                  <p className="formText">EMAIL *</p>
                  <div style={{width: '90%'}}>
                    <Input className="antInputStyling" type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" prefix={<Icon type="mail" style={{color: 'rgba(255,255,255)'}} />}/>
                  </div>
                </div>
                <div className="firstInner">
                  <p className="formText">PASSWORD *</p>
                  <div style={{width: '90%'}}>
                    <Input className="antInputStyling" type="password" name="password1" value={this.state.password1} onChange={this.handleChange} placeholder="Password" prefix={<Icon type="lock" style={{color: 'rgba(255,255,255)'}} />}/>
                  </div>
                </div>
                <div className="firstInner">
                  <p className="formText">CONFIRM PASSWORD *</p>
                  <div style={{width: '90%'}}>
                    <Input className="antInputStyling" type="password" name="password2" value={this.state.password2} onChange={this.handleChange} placeholder="Repeat Password" prefix={<Icon type="lock" style={{color: 'rgba(255,255,255)'}} />}/>
                  </div>
                </div>
              </div>
              <div className="formFlex">
                <div className="secondInner">
                  <p className="formText">FIRST NAME *</p>
                  <div style={{width: '90%'}}>
                    <Input className="antInputStyling" name="first_name" value={this.state.first_name} onChange={this.handleChange} placeholder="First name" prefix={<Icon type="user" style={{color: 'rgba(255,255,255)'}} />}/>
                  </div>
                </div>
                <div className="secondInner">
                  <p className="formText">LAST NAME *</p>
                  <div style={{width: '90%'}}>
                    <Input className="antInputStyling" name="last_name" value={this.state.last_name} onChange={this.handleChange} placeholder="Last name" prefix={<Icon type="user" style={{color: 'rgba(255,255,255)'}} />}/>
                  </div>
                </div>
              </div>
              <div className="formFlex">
                <div className="secondInner">
                  <p className="formText">SCHOOL *</p>
                  <div style={{width: '90%'}}>
                    <Input className="antInputStyling" name="school" value={this.state.school} onChange={this.handleChange} placeholder="School" prefix={<Icon type="sort-ascending" style={{color: 'rgba(255,255,255)'}} />}/>
                  </div>
                </div>
                <div className="secondInner">
                  <p className="formText">LEVEL OF STUDY *</p>
                  <div style={{width: '90%'}}>
                    <Input className="antInputStyling" name="level_of_study" value={this.state.level_of_study} onChange={this.handleChange} placeholder="Level of study" prefix={<Icon type="user" style={{color: 'rgba(255,255,255)'}} />}/>
                  </div>
                </div>
              </div>
              <div className="formFlex">
                <div className="secondInner">
                  <p className="formText">GRADUATION YEAR *</p>
                  <div style={{width: '90%'}}>
                    <Input className="antInputStyling" name="graduation_year" value={this.state.graduation_year} onChange={this.handleChange} placeholder="Graduation year" prefix={<Icon type="user" style={{color: 'rgba(255,255,255)'}} />}/>
                  </div>
                </div>
                <div className="secondInner">
                  <p className="formText">MAJOR *</p>
                  <div style={{width: '90%'}}>
                    <Input className="antInputStyling" name="major" value={this.state.major} onChange={this.handleChange} placeholder="Major" prefix={<Icon type="idcard" style={{color: 'rgba(255,255,255)'}} />}/>
                  </div>
                </div>
              </div>
              <div className="formFlex">
                <div className="secondInner">
                  <p className="formText">GENDER *</p>
                  <div style={{width: '90%'}}>
                    <Input className="antInputStyling" name="gender" value={this.state.gender} onChange={this.handleChange} placeholder="Gender" prefix={<Icon type="team" style={{color: 'rgba(255,255,255)'}} />}/>
                  </div>
                </div>
                <div className="secondInner">
                  <p className="formText">DIETARY RESTRICTIONS *</p>
                  <div style={{width: '90%'}}>
                    <Input className="antInputStyling" name="dietary_restrictions" value={this.state.dietary_restrictions} onChange={this.handleChange} placeholder="Dietary restrictions"  prefix={<Icon type="apple" style={{color: 'rgba(255,255,255)'}} />}/>
                  </div>
                </div>
              </div>
              <div className="formFlex">
                <div className="secondInner">
                  <p className="formText">DATE OF BIRTH *</p>
                  <div style={{width: '90%'}}>
                    <Input className="antInputStyling" name="date_of_birth" value={this.state.date_of_birth} onChange={this.handleChange} placeholder="Date of Birth" prefix={<Icon type="calendar" style={{color: 'rgba(255,255,255)' }} />}/>
                  </div>
                </div>
                <div className="secondInner">
                  <p className="formText">ETHNICITY *</p>
                  <div style={{width: '90%'}}>
                    <Input className="antInputStyling" name="ethnicity" value={this.state.ethnicity} onChange={this.handleChange} placeholder="Ethnicity" prefix={<Icon type="user" style={{color: 'rgba(255,255,255)' }} />}/>
                  </div>
                </div>
                <div className="secondInner">
                  <p className="formText">PHONE NUMBER *</p>
                  <div style={{width: '90%'}}>
                    <Input className="antInputStyling" placeholder="Phone Number" prefix={<Icon type="phone" style={{color: 'rgba(255,255,255)' }} />}/>
                  </div>
                </div>
              </div>
              <div className="formFlex">
                <div className="secondInner2">
                  <p className="formText">LINKEDIN</p>
                  <div style={{width: '90%'}}>
                    <Input className="antInputStyling" name="linkedin" value={this.state.linkedin} onChange={this.handleChange} placeholder="LinkedIn" prefix={<Icon type="linkedin" style={{color: 'rgba(255,255,255)' }} />}/>
                  </div>
                </div>
                <div className="secondInner2">
                  <p className="formText">GITHUB</p>
                  <div style={{width: '90%'}}>
                    <Input className="antInputStyling" name="github" value={this.state.github} onChange={this.handleChange} placeholder="Github" prefix={<Icon type="github" style={{color: 'rgba(255,255,255)' }} />}/>
                  </div>
                </div>
                <div className="secondInner2">
                  <p className="formText">LINK TO RESUME</p>
                  <div style={{width: '90%'}}>
                    <Input className="antInputStyling" name="resume" value={this.state.resume} onChange={this.handleChange} placeholder="Link to resume" prefix={<Icon type="paper-clip" style={{color: 'rgba(255,255,255)' }} />}/>
                  </div>
                </div>
              </div>
              <div className="formFlex">
                <div className="checkInner">
                  <div style={{display: 'flex'}}>
                    <Checkbox style={{paddingLeft: '5px'}} onChange={this.handleShare}></Checkbox>
                    <div style={{paddingBottom: '1px'}}className="checkText">I authorize you to share my application/registration information for event adminstration</div>
                  </div>
                </div>
              </div>
              <div className="formFlex">
                <div className="submitInner">
                  <div className={displaySecond}>
                    <Toast show={this.state.show} onClose={this.toggleShow}>
                      <Toast.Header>
                        <strong style={{color: '#F6796E'}} className="mr-auto">Error</strong>
                      </Toast.Header>
                      <Toast.Body style={{color: '#F6796E'}}>One or more of the fields are empty or incorrect!</Toast.Body>
                    </Toast>
                  </div>
                  <div className={displayOne}>
                    <Toast show={this.state.showDup} onClose={this.toggleShowDup}>
                      <Toast.Header>
                        <strong style={{color: '#F6796E'}} className="mr-auto">Error</strong>
                      </Toast.Header>
                      <Toast.Body style={{color: '#F6796E'}}>This user already exists!</Toast.Body>
                    </Toast>
                  </div>
                  <div className={displayThird}>
                    <Toast show={this.state.showSuccess} onClose={this.toggleShowSuccess}>
                      <Toast.Header>
                        <strong style={{color: '#42CAC0'}} className="mr-auto">Success</strong>
                      </Toast.Header>
                      <Toast.Body style={{color: '#42CAC0'}}>Your profile has been successfully created!</Toast.Body>
                    </Toast>
                  </div>
                  <div className="buttonStyling">
                    <Button loading={this.state.isLoading} onClick={this.handleSubmit} className="applyButton">APPLY</Button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Animated>
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Registeration);
