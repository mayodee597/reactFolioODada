import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import ProjectsList from './components/projectslist';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path='/' exact component= {Home} />
          <Route path='/About' component= {About} />
          <Route path='/Projects' component= {ProjectsList} />
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
