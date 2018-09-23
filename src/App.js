import React, {Component} from 'react';
import './App.css';
import Notifications from './Components/Notifications';

class App extends Component {
    render() {
        return (
            <div className="main">
                <Notifications/>
            </div>
        );
    }
}

export default App;
