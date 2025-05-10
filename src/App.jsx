import React from 'react';
import Navbar from './Compo/Navbar';
import Hero from './Compo/Hero';
import Service from './Compo/Services';
import AboutUs from './Compo/Aboutus';
import Steps from './Compo/Steps';
import AppDownlode from './Compo/Appdownlode';
import ContactUs from './Compo/Contactus';
import Footer from './Compo/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="services"><Service /></div>
      <div id="about"><AboutUs /></div>
      <div id="how-it-works"><Steps /></div>
      <div id="download"><AppDownlode /></div>
      <div id="contact"><ContactUs /></div>
      <Footer />
    </>
  );
}

export default App;
