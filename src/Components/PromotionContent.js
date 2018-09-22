import React from 'react';

const PromotionContent = (props)=> {

    return(
        <div className="promotion">
        <h3>{props.title}</h3>
        <a href={props.link}><img className="img" src={props.image} alt="promo"/></a><hr />
        </div>
    )
}
export default PromotionContent