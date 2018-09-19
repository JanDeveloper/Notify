import React, { Component } from 'react';
import TextContent from './TextContent';
import PropTypes from 'prop-types';

class TextNotify extends Component {
    render(){
        let notifyItems;
        if(this.props.notifications){
            notifyItems = this.props.notifications.filter(a => a.type === 'text').map(notification => {
                return (
                    <TextContent key={notification.id} notification={notification} />
                );
            });
        }
        return (
            <span>{notifyItems}</span>
        )
    }
}
    TextNotify.propTypes = {
    notifications: PropTypes.array,
  }
export default TextNotify