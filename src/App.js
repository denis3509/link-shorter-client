import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import MainPage from './containers/mainPage'
import Login from './containers/login'


function App() {

  return (
    <Provider store={store}>

        <div className="App">
          <Router>
            <div>
              <Header/>
              <Route exact path="/" render={() => <Redirect to="/mainPage"/>}/>
              <Route path="/mainPage" component={MainPage}/>
              <Route path="/login" component={Login}/>
            </div>
          </Router>
        </div>

    </Provider>
);
}

export default App;
