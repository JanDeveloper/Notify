import React, { Component } from 'react';
//import PropTypes from 'prop-types';

class TextContent extends Component {
    render(){
        return(
            <div>
            <h3>{this.props.notification.title}</h3>
            <p>{this.props.notification.text}</p>
            <hr />
            </div>
        )
    }
}
export default TextContent