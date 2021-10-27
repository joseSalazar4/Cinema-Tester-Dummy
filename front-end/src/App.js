import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Seats from './components/pages/Seats';
import BuyTickets from './components/pages/BuyTickets';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/seats' component={Seats} />
          <Route path='/buyTickets' component={BuyTickets} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
