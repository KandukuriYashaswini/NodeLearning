import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import { LoginComponent } from './components/Login';
import { RegisterComponent } from './components/Register';
//this is called pure component or stateless component
const App = ()=>{
    const companyName='Pega Systems';
  return <div>
      <Header title={companyName} />
      <h1>Welcome to pega</h1>
      <Footer />
      <LoginComponent />
      <RegisterComponent />
      </div>;
};

export default App;