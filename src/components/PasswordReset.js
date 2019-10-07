import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Animated } from 'react-animated-css';
import { Toast } from 'react-bootstrap';
import { Spin, Input, Icon, Button } from 'antd';
import './css/PasswordReset.css';

const antIcon = <Icon type="loading" className="pwdSpinner" spin />;

class PasswordReset extends Component{
  constructor(props){
    super(props)
    this.state = {
      password: '',
      show: 'noToastPwdSuccess',
      showError: 'noToastPwd',
      loading: false
    }
  }

  toggleShow = () => {
    this.setState({
      show: 'noToastPwdSuccess'
    })
  }

  toggleShowError = () => {
    this.setState({
      showError: 'noToastPwd'
    })
  }

  handleSubmit = () => {
    this.setState({
      loading: true
    })
    fetch("https://cutie-hack-19.herokuapp.com/api/passwordReset", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.props.match.params.token
      },
      body: JSON.stringify({
        "password": this.state.password,
      })
    })
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp.user)
        if (resp.Message === "Success"){
          this.setState({
            show: 'showToastPwdSuccess',
            loading: false
          })
        }
        else {
          this.setState({
            showError: 'showToastPwd',
            loading: false
          })
        }

      })
      .catch(err => console.log(err))
  }

  HomeRedirect = () => {
    window.location.assign('/')
  }

  loader = () => {
    return (
      <div style={{textAlign: 'center', paddingTop: '1%'}}>
        {antIcon}
      </div>
    )
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  render(){
    console.log(this.props.match.params.token)
    return(
      <div>
        <div style={{paddingLeft: '10px'}}>
          <button className="buttons" onClick={this.HomeRedirect}>HOME</button>
        </div>
        <Animated animationIn="fadeIn" isVisible={true}>
          <div style={{display: 'flex'}}>
            <div className="fPwdForm">
              <div style={{display: 'flex'}}>
                <div className="topText">Change Password</div>
                {this.state.loading ? this.loader(): null}
              </div>
              <div style={{marginTop: '4%'}} className="inputFields">
                <input className="customInput" type="text" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange}/>
              </div>
              <div className="ForgotPwdBorder"></div>
              <div className="submitField">
                <Button onClick={this.handleSubmit} className="submitButton">RESET PASSWORD</Button>
              </div>
            </div>
          </div>
        </Animated>
        <div style={{width: '100%'}} className={this.state.show}>
          <div style={{width: '20%', margin: 'auto', paddingTop: '2%'}}>
            <Toast show={true} onClose={this.toggleShow}>
              <Toast.Header>
                <strong style={{color: '#42CAC0'}} className="mr-auto">Success</strong>
              </Toast.Header>
              <Toast.Body style={{color: '#42CAC0'}}>Password has been successfully reset!</Toast.Body>
            </Toast>
          </div>
        </div>
        <div style={{width: '100%'}} className={this.state.showError}>
          <div style={{width: '22%', margin: 'auto', paddingTop: '2%'}}>
            <Toast show={this.state.showError} onClose={this.toggleShowError}>
              <Toast.Header>
                <strong style={{color: '#F6796E'}} className="mr-auto">Error</strong>
              </Toast.Header>
              <Toast.Body style={{color: '#F6796E'}}>There was a problem with resetting your password!</Toast.Body>
            </Toast>
          </div>
        </div>
    </div>

    )
  }
}

export default PasswordReset;
