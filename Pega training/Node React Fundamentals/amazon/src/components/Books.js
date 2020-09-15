import React,{Component} from 'react';
import Axios from 'axios';
 
export class BooksComponent extend Component{
    constructor(){
        super();
        this.state={
            booksList:[]
        }
    }
   
    async componentDidMount(){
                let booksList=await Axios("https://fakerestapi.azurewebsites.net/api/CoverPhotos");
                console.log(booksList);
                this.setState({booksList:booksList.data});
    }
    handleInputChange=(e)=>{
                console.log(e.target.value);
                let currentState = this.state;
                currentState[e.target.name]=e.target.value;
                this.setState(currentState);
    }
            bindData = ()=>{
               return this.state.booksList.map((item,index)=>{
                        return <option value={item.ID}>{item.Url} </option>
                    });
            }
            render(){
                 return <div>
                <div>
                <select type="dropdown" id="booksList" name="booksList" onChange={this.handleInputChange}>
                   {this.bindData()}
                </select>
                </div>
            </div>
            }
        }
    