import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"
import AuthPage from './pages/Auth';
import EventsPage from './pages/Events';
import BookingPage from './pages/Booking';
import MainNavigation from './components/Navigation/MainNavigation';

import AuthContext from "./context/auth-context";

import './App.css';
import { Component } from 'react';

class App extends Component {

  state = {
    token: null,
    userId: null,
    tokenExpiration: ""

  }

  login = (token, userId, tokenExpiration) => {
    this.setState({ token, userId, tokenExpiration })
  }
  logout = () => {

  }
  render() {

    return (
      <BrowserRouter>
        <React.Fragment>
          <AuthContext.Provider value={{
            token: this.state.token,
            useId: this.state.useId,
            login: this.login,
            logout: this.logout,
          }}>
            <MainNavigation />
            <main className="main-content">
              <Switch>
                {!this.state.token && <Redirect from="/" to="/auth" exact />}
                {this.state.token && <Redirect from="/" to="/events" exact />}
                {this.state.token && <Redirect from="/auth" to="/events" exact />}
                {!this.state.token && <Route path="/auth" component={AuthPage} />}
                <Route path="/events" component={EventsPage} />
                {this.state.token && <Route path="/bookings" component={BookingPage} />}
              </Switch>
            </main>
          </AuthContext.Provider>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default App;