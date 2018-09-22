import React from 'react';

const TextContent = (props)=> {
    
        return(
        <div className="content">
            <div className="text">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            </div>
        </div>
     )
    
    }   
    
export default TextContent