import React, { Component } from 'react';
//import PropTypes from 'prop-types';

class BonusContent extends Component {
    render(){
        return(
            <div>
            <h3>{this.props.notification.title}</h3>
            <p>{this.props.notification.requirement}</p> 
            <hr />
            </div>
        )
    }
}
export default BonusContent