import React, {Component} from 'react';

class PromotionContent extends Component {

    render() {
        return (
            <div className="promotion" key={this.props.id}>
                <h3>{this.props.title}</h3>
                <a href={this.props.link}><img className="img" src={this.props.image} alt="promo"/></a>
                <hr/>
            </div>
        )
    }
}

export default PromotionContent