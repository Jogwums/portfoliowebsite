import React from 'react';
// import {}

// components
import Navigation from './components/navbar'
import Cards from './components/Cards'
import FooterDetails from './components/Footer'
import HeaderDetails from './components/Header/'

//test form

// import FormComponent from './components/Signup Form'

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div>
      <Navigation />
      {/* <FormComponent /> */}
      <HeaderDetails />
      <Cards />
      <FooterDetails />
    </div>
  );
}

export default App;
