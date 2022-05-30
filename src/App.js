import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
 

//pages
import Home from './pages/Home';
import Portfolio from './pages/Portfolio'
import DataPage from './pages/DataPortfolio'
import ErrorPage from './pages/ErrorPage'
import Da from './pages/Da';

//test form

// import FormComponent from './components/Signup Form'

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/data">
          <DataPage />
        </Route>
        <Route path="/pbi">
          <Da />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
