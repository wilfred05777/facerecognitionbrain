import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';

// import logo from './logo.svg';
// import Navigation from './../components/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm/>
        {/*         
        {
        
        <FaceRecognition />} */}
      </div>
    );
  }
}

export default App;
