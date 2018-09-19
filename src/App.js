import React, { Component } from 'react';
import './App.css';
import Notifications from './Components/Notifications';
import 'react-notifications/lib/notifications.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Notifications />
      
      </div>
    );
  }
}

export default App;
