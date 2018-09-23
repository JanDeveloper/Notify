import React, { Component } from 'react';
import BonusContent from './BonusContent';
import TextContent from './TextContent';
import PromotionContent from './PromotionContent';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.removeNotification = this.removeNotification.bind(this);
  }

  state = {
    promotionNotifications:
      [
        {
          id: 5453,
          type: 'Promotion',
          image: 'http://www.absolat.com/images/promotion-in-marketing.jpg',
          title: '%30 off on sports betting',
          link: 'https://www.google.com/'
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
          expires: 1000
        }
      ],
    displayNotification: false,
    isToggleOn: true,
  };

  displayNotification = () => {
    this.setState({
      displayNotification: !this.state.displayNotification,
      isToggleOn: !this.state.isToggleOn,
    })
  };

  removeNotification = (id, type) => {
    const notification = [...this.state[type]];
    const index = this.state[type].findIndex(x => x.id === id);
    notification.splice(index, 1);
    this.setState({ [type]: notification });
  };
  
  render() {
    let textCounter = this.state.textNotifications.length;
    let promotionCounter = this.state.promotionNotifications.length;
    let counter = textCounter + promotionCounter;
    return (
      <div className="overview">
        <div className="btn-container">
          <div className="circle">
            <p className="number">{this.state.isToggleOn ? '0' : counter}</p>
          </div>
          <div className="btn" onClick={this.displayNotification} />
        </div>
        
        {
          this.state.displayNotification &&

          <div className="container">
            <div className="top">
              <p>NOTIFICATIONS</p>
            </div>

            {this.state.textNotifications.map((notification) => {
              return (
                <div className="content" key={notification.id}>
                  <TextContent
                    title={notification.title}
                    text={notification.text}
                    expires={notification.expires}
                    id={notification.id}
                    type="textNotifications"
                    callback={this.removeNotification}
                  />
                </div>
              );
            })}
            {this.state.bonusNotifications.map((notification) => {
              return (
                <div className="content" key={notification.id}>
                  <BonusContent
                    title={notification.title}
                    requirement={notification.requirement}
                    expires={notification.expires}
                    id={notification.id}
                    type="bonusNotifications"
                    callback={this.removeNotification}
                  />
                </div>
              );
            })}
            {this.state.promotionNotifications.map((notification) => {
              return (
                <div className="content" key={notification.id}>
                  <PromotionContent
                    title={notification.title}
                    link={notification.link}
                    image={notification.image}
                  />
                </div>
              );
            })}
          </div>
        }
      </div>
    )
  }
}

export default Notifications;