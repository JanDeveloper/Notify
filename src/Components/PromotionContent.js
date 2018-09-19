import React, { Component } from 'react';
//import PropTypes from 'prop-types';

class PromotionContent extends Component {
    render(){
        return(
            <div>
            <h3>{this.props.notification.title}</h3>
            <p>{this.props.notification.link}</p>
            <div className="img"><img src={this.props.notification.image} alt="promo" className="size"/></div>
            <hr />
            </div>
        )
    }
}
export default PromotionContent