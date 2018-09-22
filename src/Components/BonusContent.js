import React from 'react';
const BonusContent = (props)=> {

    return(
        <div className="bonus">
        <h3>{props.title}</h3>
        <p>{props.requirement}</p>
        </div>
    )
}
export default BonusContent