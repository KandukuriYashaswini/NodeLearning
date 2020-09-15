import React,{Component} from 'react';
import Axios from 'axios';

export class RegisterComponent extends Component{
constructor(){
super();
this.state={
username:"",
password:"",
firstname:"",
lastname:"",
email:"",
age:"",
countryList:[],
booksList:[],
gender:"",
imageUrl:"https://fakerestapi.azurewebsites.net/api/CoverPhotos",
}
}
async componentDidMount(){
   // fetch("https://restcountries.eu/rest/v2/all").then(result =>{
     //   console.log(result);
       // return result.json();
    //}).catch(err => {
      //  console.log(err);
    //}).then(finalResult =>{
      //  console.log(finalResult);
   // })
   let countryList=await Axios("https://restcountries.eu/rest/v2/all");
   console.log(countryList);
   this.setState({countryList:countryList.data});
   let booksList=await Axios("https://fakerestapi.azurewebsites.net/api/CoverPhotos");
   console.log(booksList);
   this.setState({booksList:booksList.data});
}
//onchange handler event binding
handleInputChange=(e)=>{
console.log(e.target.value);
let currentState = this.state;
currentState[e.target.name]=e.target.value;
this.setState(currentState);
}
bindDataToDropdown = ()=>{
    return this.state.countryList.map((item,index)=>{
        return <option value={item.alpha2Code}>{item.name}</option>
    });
}
bindData = ()=>{
    return this.state.booksList.map((item,index)=>{
        return <option value={item.ID}>{item.Url}</option>
    });
}
renderImage(imageUrl) {
    return (
      <div>
        <img src={imageUrl} />
      </div>
    );
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
<select type="dropdown" id="countryList" name="countryList" onChange={this.handleInputChange}>
    {this.bindDataToDropdown()}
</select>
</div>

<div className="RegisterComponent">
        <div className="images">
          {this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}
        </div>
      </div>
    

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
RegisterComponent.propTypes = {
    imageUrls: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
  };
  export default RegisterComponent;