import React from 'react';
import './App.css';
import ContactInfo from'./components/ContactInfo';
import MegaMenu from './components/MegaMenu'
import Banner from './components/Banner';
import FirstContent from './components/FirstContent';
import SecondContent from './components/SecondContent';
import ThirdContent from './components/ThirdContent';
import FourthContent from './components/FourthContent';
import Distributors from './components/Distributors';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <ContactInfo/>
      <MegaMenu/>
      <Banner/>
      <FirstContent/>
      <SecondContent/>
      <ThirdContent/>
      <FourthContent/>
      <Distributors/>
      <Footer/>
    </div>


  );
}

export default App;
