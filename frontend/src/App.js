import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"
import AuthPage from './pages/Auth';
import EventsPage from './pages/Events';
import BookingPage from './pages/Booking';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect from="/" to="/auth" exact />
        <Route path="/auth" component={AuthPage} />
        <Route path="/events" component={EventsPage} />
        <Route path="/booking" component={BookingPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;