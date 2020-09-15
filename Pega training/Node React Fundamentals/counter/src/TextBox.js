import React, { useState } from 'react';

const TextBox = () => {
    //How to use state hook?
    const [register, handleChange] = useState({
        firstName:"",
        lastName:"",
        age:"",
        gender:""
    });
    return <div>
        <input type="text"
    name="firstName"
    value={register.firstName}
        onChange={e => {
            handleChange({...register,firstName:e.target.value})
        }}
    />
    <input type="text"
    name="lastName"
    value={register.lastName}
        onChange={e => {
            handleChange({...register,lastName:e.target.value})
        }}
    />
   <h6>{register.firstName}</h6>
   <h6>{register.lastName}</h6>
    </div>
}
export default TextBox;