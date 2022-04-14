import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/page/Home';
import Products from './components/page/Products';
import Services from './components/page/Services';
import SignUp from './components/page/SignUp';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/services' component={Services}/>
        <Route path='/products' component={Products}/>
        <Route path='/sign-up' component={SignUp}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
