import React, { Component } from 'react';
import BonusContent from './BonusContent';
import PropTypes from 'prop-types';

class BonusNotify extends Component {
    render(){
        let notifyItems;
        if(this.props.notifications){
            notifyItems = this.props.notifications.slice(1).filter(a => a.type === 'bonus').map(notification => {
                
                return (
                    <BonusContent key={notification.id} notification={notification} />
                );
            });
        }
        return (
            <span>{notifyItems}</span>
        )
    }
}
    BonusNotify.propTypes = {
    notifications: PropTypes.array,
  }
export default BonusNotify