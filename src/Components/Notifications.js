import React, { Component } from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
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
        text: 'Test text notification',    
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
          // eslint-disable-next-line
          //break;
          case 'success':
          NotificationManager.info(textContent, '', 3600);
          // eslint-disable-next-line
          //break;
          case 'warning':
          NotificationManager.info(promotionContent, '', 5000000);
          //break;
        /*case 'success':
          NotificationManager.success(successContent, '', 3600);
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;*/
      }
    };
  };
  
  render() {
    const membersToRender = this.state.notifications.filter(notification => notification.display)
    const numRows = membersToRender.length
    return (
      <div>
        <div className="btn-container">
        <div className="circle">
        <p className="number">{numRows}</p>
        {
          membersToRender.map((notification, index) => {
            console.log(index, notification)
            //return <p key={index}>{ notification.type }</p>
          })
        }
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