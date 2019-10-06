import React, { Component } from 'react'
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';
import Register from './components/Register';
import PasswordReset from './components/PasswordReset';
import AdminDashboard from './components/AdminDashboard';
import ForgotPassword from './components/ForgotPassword';
import './App.css';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
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
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/forgotpassword" component={ForgotPassword}/>
            <Route exact path="/passwordReset/:token" component={PasswordReset}/>
            <Route exact path="/administratorDashboard" component={AdminDashboard}/>
            <PrivateRoute exact path='/profile' component={Profile} isAuthenticated={this.props.currentUser.profile}/>
          </Switch>
        </Router>
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
