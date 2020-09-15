import React,{Component} from 'react';
import Dropdown from './Dropdown';


export class LoginComponent extends Component{
    constructor(){

        super();
        this.state={
            username:"",
            password:""
        }
    }
    handleInputchange=(e)=>{
        console.log(e.target.value);
        let currentState=this.state;
        currentState[e.target.name]=e.target.value;
        this.setState(currentState);
    }
    render(){
        var someData=["yash","reddy"];
        var newData=["chichu","reddy"];
        return <div>
            <h1>login</h1>
            <input type="text" placeholder="username" name="username" onChange={this.handleInputchange}/>
            <br/>
            <input type="text" placeholder="password" name="password" onChange={this.handleInputchange}/>
            <br/>
            <Dropdown list={someData} />
            <Dropdown list={newData} />
            <h1>{this.state.username}</h1>
            <h1>{this.state.password}</h1>
            </div>
    }
}