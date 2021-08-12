
// components
import Navigation from './components/navbar'
import Cards from './components/Cards'
import FooterDetails from './components/Footer'
import HeaderDetails from './components/Header/'

//test form

// import Form from './components/Modal/FormFormik'

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div>
      <Navigation />
      {/* <Form /> */}
      <HeaderDetails />
      <Cards />
      <FooterDetails />
    </div>
  );
}

export default App;
