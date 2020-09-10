import React,{Component} from 'react';
export class RegisterComponent extends Component{
constructor(){
super();
this.state={
username:"",
password:"",
firstname:"",
lastname:"",
email:"",
gender:""
}
}
//onchange handler event binding
handleInputChange=(e)=>{
console.log(e.target.value);
let currentState = this.state;
currentState[e.target.name]=e.target.value;
this.setState(currentState);
}
render(){
return <div>
<h1>Registration</h1>
<form>
<div>
<input type="text" placeholder="User Name" name="username" onChange={this.handleInputChange}/>
</div>
<br/>
<div>
<input type="password" placeholder="Password" name="password" onChange={this.handleInputChange}/>
</div>
<br/>
<div>
<input type="text"  placeholder="First Name" name="firstname" onChange={this.handleInputChange}/>
</div>
<br/>
<div>
<input type="text" placeholder="Last Name" name="lastname" onChange={this.handleInputChange}/>
</div>
<br/>
<div>
<input type="email" placeholder="Email" name="email" onChange={this.handleInputChange}/>
</div>
<br/>
<div>
<input type="number" placeholder="Age" name="age" onChange={this.handleInputChange}/>
</div>
<br/>
<div>
    <input type="radio" id="male" name="gender" value="male" onChange={this.handleInputChange}/>
    <label for="male">Male</label>
</div>
<div>
    <input type="radio" id="female" name="gender" value="Female" onChange={this.handleInputChange}/>
    <label for="female">female</label>
</div>
<br/>
<div>
    <input type="checkbox" onChange={this.handleInputChange}/>
    <label> I agree to the terms and conditions</label>
</div>
<br/>
<div>
    <button type="button" onClick={this.handleInputChange}>Register</button>
</div>
<h1>{this.state.username}</h1>
<h1>{this.state.password}</h1>
<h1>{this.state.firstname}</h1>
<h1>{this.state.lastname}</h1>
<h1>{this.state.email}</h1>
<h1>{this.state.age}</h1>
<h1>{this.state.gender}</h1>
</form>
</div>

    }
}