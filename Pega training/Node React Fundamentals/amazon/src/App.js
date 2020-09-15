import React,{Component} from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
//this is called pure component or stateless component
export class App extends Component{
  constructor(){
    super();
    this.state={
      companyName:"",
      cartCount:0
    }
  }

   render(){
  return <div>
      <Header title={this.state.companyName} 
      cartCount={this.state.cartCount} />
      <h1>Welcome to pega</h1>
      <ProductList handleCLick={this.handleClick}/>
      </div>;
   }
};

export default App;