import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from './pages/Home';
import Chat from './pages/Chat';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { auth } from './services/firebase';

function PrivateRoute({ component: Component, authenticated, ...rest}) {
  return (
    <Route 
      {...rest}
      render={(props) => authenticated === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state : { from: props.location} }} />}
    />
  )
}

function PublicRoute({ component: Component, authenticated, ...rest}) {
  return (
    <Route 
      {...rest}
      render={(props) => authenticated === false
      ? <Component {...props} />
      : <Redirect to='/chat' />}
    />
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
