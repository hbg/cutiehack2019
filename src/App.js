import React, { Component } from 'react'
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';
import Register from './components/Register';
import PasswordReset from './components/PasswordReset';
import AdminDashboard from './components/AdminDashboard';
import ForgotPassword from './components/ForgotPassword';
import Live from './components/Live';
import Schedule from './components/Schedule';
import './App.css';
import { Switch, Route, BrowserRouter as Router, Redirect, HashRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { getProfileFetch } from './redux/actions';

function PrivateRoute ({component: Component, isAuthenticated, ...rest}) {
  return(
    <Route {...rest} render={(props) => isAuthenticated
      ? <Component {...props} />
      : <Redirect to={{pathname:'/', state: {from: props.location}}} />}
      />
  )
}

class App extends Component {
  componentDidMount = () => {
    this.props.getProfileFetch()
  }

  render() {
    return (
      <div className='app'>
        <HashRouter basename="/">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/forgotpassword" component={ForgotPassword}/>
            <Route path="/passwordreset/:token" component={PasswordReset}/>
            <Route path="/administratorDashboard" component={AdminDashboard}/>
            <Route path="/schedule" component={Schedule}/>
            <PrivateRoute path='/profile' component={Profile} isAuthenticated={this.props.currentUser.profile}/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
})

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
