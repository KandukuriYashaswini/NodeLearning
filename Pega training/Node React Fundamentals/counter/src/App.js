import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Counter from './Counter';
import TextBox from './TextBox';
const ThemeContext = React.createContext('light');

 
  
  // Context lets us pass a value deep into the component tree
  // without explicitly threading it through every component.
  // Create a context for the current theme (with "light" as the default).
 
  
  class App extends React.Component {
    render() {
      // Use a Provider to pass the current theme to the tree below.
      // Any component can read it, no matter how deep it is.
      // In this example, we're passing "dark" as the current value.
      return (
        <ThemeContext.Provider value="dark">
          <Toolbar />
        </ThemeContext.Provider>
      );
    }
  }
  
  // A component in the middle doesn't have to
  // pass the theme down explicitly anymore.
  function Toolbar() {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }
  
  class ThemedButton extends React.Component {
    // Assign a contextType to read the current theme context.
    // React will find the closest theme Provider above and use its value.
    // In this example, the current theme is "dark".
    static contextType = ThemeContext;
    render() {
      return <button>{this.context}</button>
    }
  }
   /*constructor(){
    super();
    this.state={
      count:100
    }

  }
  handleClick=()=>{
    console.log("clicked");
    this.setState({count:this.state.count+1});
    
  }
  update=()=>{
    this.setState({count:this.state.count-1});
  }
  render(){
    /*return (
      <div className="App">
        <Counter count={this.state.count}/>
        <Button clickButton={this.handleClick}/>
        <Button clickButton={this.update}/>*/
        //return (
     /* <div className="App">
        <TextBox/>
    </div>
  );
        
     
  */
 
//}

export default App;
