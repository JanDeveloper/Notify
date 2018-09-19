import React, { Component } from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import NotificationBadge from 'react-notification-badge';
import {Effect} from 'react-notification-badge';
import BonusNotify from './BonusNotify';
import TextNotify from './TextNotify';
import PromotionNotify from './PromotionNotify';

class Notifications extends Component {
  constructor(){
    super();
    this.state = {
      notifications: [
        {  
        id: 1321,    
        type: 'text',    
        title: 'Test notification',    
        text: 'Test text notification',    
        expires: 3600    
        },  
        {  
        id: 4322,    
        type: 'bonus',    
        title: 'You win a bonus!',    
        requirement: 'Deposit $50 to win',    
        expires: 3600    
        },  
        {  
        id: 5453,    
        type: 'Promotion',    
        image: 'http://www.absolat.com/images/promotion-in-marketing.jpg',
        title: '%30 off on sports betting',    
        link: 'https://www.google.com/',
        },  
        {  
        id: 5236,    
        type: 'text',    
        title: 'Test notification',    
        text: 'Test of text notification',    
        expires: 5    
        }  
        ]
        
    }
  }
  createNotification = (type) => {
  let bonusContent = (<BonusNotify notifications={this.state.notifications} />);
  let textContent = (<TextNotify notifications={this.state.notifications} />);
  let promotionContent = (<PromotionNotify notifications={this.state.notifications} />);

    
    return (

    ) => {
      switch (type) {
        case 'info':
          NotificationManager.info(bonusContent, '', 3600);
 
          case 'success':
          NotificationManager.info(textContent, '', 3600);

          case 'warning':
          NotificationManager.info(promotionContent, '', 5000000);

      }
    };
  };
  
  
  render() {
    
    const membersToRender = this.state.notifications.filter(a => a.id)
    const numRows = membersToRender.length
    return (
      
      <div>
        <div className="btn-container">
        <div className="circle">
        <p className="number"><NotificationBadge count={document.querySelectorAll('div').length} effect={Effect.SCALE}/></p>
        </div>
        <div className='btn' onClick={this.createNotification('info')}>
        </div>
        </div>
       <div className="top">
       <p>NOTIFICATIONS</p>
       </div>
        <NotificationContainer />
      </div>
    );
  }
}
 
 
export default Notifications;