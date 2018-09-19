import React, { Component } from 'react';
import PromotionContent from './PromotionContent';
import PropTypes from 'prop-types';

class PromotionNotify extends Component {
    render(){
        let notifyItems;
        if(this.props.notifications){
            notifyItems = this.props.notifications.slice(1).filter(a => a.type === 'Promotion').map(notification => {
                return (
                    <PromotionContent key={notification.id} notification={notification} />
                );
            });
        }
        return (
            <span>{notifyItems}</span>
        )
    }
}
    PromotionNotify.propTypes = {
    notifications: PropTypes.array,
  }
export default PromotionNotify