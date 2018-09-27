import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="page">
           <section>
             <img src={logo} className="App-logo" alt="logo"/>
             <h1>WEB DEVELOPMENT</h1>
           </section>

           <Title text="CSS HOVER MASK"/>
        </div>
      </div>
    );
  }
}

export default App;
