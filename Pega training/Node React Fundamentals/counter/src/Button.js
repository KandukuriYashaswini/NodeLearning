import React from 'react';

const Button = (props) =>{
    return <button onClick={
        e=>{
            props.clickButton() 
            
        }
    }>Counter</button>
}
export default Button;