import React, { Component } from 'react';
import BonusContent from './BonusContent';
import TextContent from './TextContent';
import PromotionContent from './PromotionContent';


class Notifications extends Component {
 
  state = {
    promotionNotifications: 
    [
      {  
      id: 5453,    
      type: 'Promotion',    
      image: 'http://www.absolat.com/images/promotion-in-marketing.jpg',
      title: '%30 off on sports betting',    
      link: 'https://www.google.com/',
      }
    ], 
    bonusNotifications: 
    [
      {  
      id: 4322,    
      type: 'bonus',    
      title: 'You win a bonus!',    
      requirement: 'Deposit $50 to win',    
      expires: 3600    
      }
    ],  
    textNotifications: 
    [
      {  
      id: 1321,    
      type: 'text',    
      title: 'Test notification',    
      text: 'Test text notification',    
      expires: 3600    
      },    
      {  
      id: 5236,    
      type: 'text',    
      title: 'Test notification',    
      text: 'Test of text notification',    
      expires: 5    
      }  
    ],
    displayNotification: false,
    isToggleOn: true,
    }
    
  displayNotification = (e) => {
    this.setState({
        displayNotification: !this.state.displayNotification, 
        isToggleOn: !this.state.isToggleOn,
    })
  }
 

  render() {
      let textCounter = this.state.textNotifications.length;
      let promotionCounter = this.state.promotionNotifications.length;
      let Counter = textCounter + promotionCounter;
    return (
    <span className="overview">
         <div className="btn-container"> <div className="circle"><p className="number">{this.state.isToggleOn ? '0' : Counter}</p></div>
<div className="btn" onClick={this.displayNotification} ></div></div>
{
this.state.displayNotification &&

 <div  className="container">
 <div className="top"><p>NOTIFICATIONS</p></div>

      { this.state.textNotifications.map((notification) => {
           return(
             <div className="content" key={notification.id} >
           <div><TextContent  title={notification.title} text={notification.text} /></div><hr />
          </div>
           );
          })}
           { this.state.bonusNotifications.map((notification) => {
           return(
             <div className="content" key={notification.id}>
           <div><BonusContent  title={notification.title} requirement={notification.requirement} /></div><hr />
          </div>
           );
          })}
          { this.state.promotionNotifications.map((notification) => {
           return(
             <div className="content" key={notification.id}>
           <div><PromotionContent  title={notification.title} link={notification.link} image={notification.image}/></div><hr />
          </div>
           );
          })}
 </div>
}
</span>
     ) }
    }
    
export default Notifications;