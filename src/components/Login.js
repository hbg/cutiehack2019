import React, { Component } from 'react';
import {connect} from 'react-redux';
import { userLoginFetch } from '../redux/actions';
import { Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import { Spin, Input, Icon, Button } from 'antd';
import { Animated } from 'react-animated-css';
import { Toast } from 'react-bootstrap';
import './css/Login.css';

const antIcon = <Icon type="loading" className="pwdSpinner" spin />;

class Login extends Component {
  state = {
    email: '',
    password: '',
    redirectToProfile: false,
    redirectToRegister: false,
    redirectToForgot: false,
    loading: false,
    errorLogin: "noToast",

  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  toggleShowCred = () => {
    this.setState({
      errorLogin: "noToast"
    })
  }

  handleDispatch = (Message) => {
    if (Message === "Login Successful"){
      this.setState({
        email: '',
        password: '',
        redirectToProfile: true,
        loading: false
      })
    }
    else {
      this.setState({
        loading: false,
        errorLogin: "displayToast"
      })
    }
  }

  handleSubmit = (event) => {
   event.preventDefault()
   this.setState({
     loading: true
   })
   this.props.userLoginFetch(this.state, this.handleDispatch)
   // .then(resp => resp.json())
   // .then(resp => {
   //   console.log(resp)
   //   if (resp.Message === "Login Successful"){
   //     this.setState({
   //       email: '',
   //       password: '',
   //       redirectToProfile: true,
   //       loading: false
   //     })
   //   }
   //   else {
   //     this.setState({
   //       loading: false,
   //       errorLogin: "displayToast"
   //     })
   //   }
   // })
  }

  handleRegister = () => {
     this.setState({
       redirectToRegister: true
     })
  }

  handleReset = () => {
    this.setState({
      redirectToForgot: true
    })
  }

  HomeRedirect = () => {
    window.location.assign('/')
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

  render(){
    if (this.state.redirectToRegister) {
      return <Redirect push to= "/register" />
    }
    if (this.state.redirectToProfile) {
      return <Redirect push to = "/profile" />
    }
    if (this.state.redirectToForgot) {
      return <Redirect push to = "/forgotpassword" />
    }
    if (this.state.loginError) {

    }
    return(
      <div className="login">
        <div className="loginNav"style={{paddingLeft: '10px'}}>
          <button className="buttons" onClick={this.HomeRedirect}>HOME</button>
        </div>
        <Animated animationIn="fadeIn" isVisible={true}>
          <div className="loginForm">
            <div style={{display: 'flex'}}>
              <div className="topText">Log in</div>
              {this.state.loading ? this.loader(): null}
            </div>
            <div style={{marginTop: '4%'}}className="inputFields">
              <input type='text' name="email" value={this.state.email} className="customInput" placeholder="Email" onChange={this.handleChange}/>
            </div>
            <div style={{marginTop: '6%'}}className="inputFields">
              <input type='password' name="password" value={this.state.password} className="customInput" placeholder="Password" onChange={this.handleChange}/>
            </div>
            <div className="loginBorder"></div>
            <div className="submitField">
              <Button onClick={this.handleSubmit} className="submitButton">LOGIN</Button>
            </div>
            <div className="submitField">
              <Button onClick={this.handleRegister} className="submitButton">SIGN UP</Button>
            </div>
            <Button onClick={this.handleReset} className="resetText">FORGOT PASSWORD?</Button>
          </div>
        </Animated>
        <div className={this.state.errorLogin}>
          <div style={{paddingTop: '2%', width: '20%', margin: 'auto'}}>
            <Toast onClose={this.toggleShowCred}>
              <Toast.Header>
                <strong style={{color: '#F6796E'}} className="mr-auto">Error</strong>
              </Toast.Header>
              <Toast.Body style={{color: '#F6796E'}}>Invalid Credentials!</Toast.Body>
            </Toast>
          </div>
        </div>
      </div>

    )
  }
}

const mapDispatchToProps = dispatch => ({
  userLoginFetch: (userInfo, handleDispatch) => dispatch(userLoginFetch(userInfo, handleDispatch)),
})

export default connect(null, mapDispatchToProps)(Login);
