import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Menu from "./components/Menu";
import SectionSlider from "./components/SectionSlider";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Menu/>
      <SectionSlider/>
      </div>
    );
  }
}

export default App;
