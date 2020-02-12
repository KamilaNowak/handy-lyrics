import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./bootstrap-components/Navbar"
import Footer from "./bootstrap-components/Footer";
import Search from "./composed-pages/Search"
function App() {
  return (
   <React.Fragment>
     <Navbar/>
     <Search/>
    
   </React.Fragment>
  );
}

export default App;
