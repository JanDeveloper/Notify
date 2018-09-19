import React, { Component } from 'react';
//import PropTypes from 'prop-types';

class PromotionContent extends Component {
    render(){
        return(
            <div>
            <h3>{this.props.notification.title}</h3>
            <a href={this.props.notification.link}>Click here</a>
            <div className="img">
            <a href={this.props.notification.link}><img src={this.props.notification.image} alt="promo" className="size"/></a>
            </div>
            <hr />
            </div>
        )
    }
}
export default PromotionContent