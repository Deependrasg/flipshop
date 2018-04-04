import React, { Component } from 'react';
import {BrowserRouter as Router,  Switch,Route } from 'react-router-dom';
import Header from './component/common/header.js';
import Fotter from './component/common/fotter.js';
import Navibar from './component/common/navbar.js';
import Home from './component/Home/home.js';
import './static/css/app.css';
import Offer,{ProductView} from './component/Offer/dailyOffer.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            
            <Header />
            <Navibar />

            <Route exact path='/' component={Home} />
            <Route exact path='/offers' component={Offer} />
            <Route path="/offers/:id" component={ProductView} />

            <Fotter />
        </div>
      </Router>
    );
  }
}

export default App;

