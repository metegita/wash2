import React, { useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';

import Navbar from './Compo/Navbar';
import Hero from './Compo/Hero';
import Service from './Compo/Services';
import AboutUs from './Compo/Aboutus';
import Steps from './Compo/Steps';
import AppDownlode from './Compo/Appdownlode';
import ContactUs from './Compo/Contactus';
import Footer from './Compo/Footer';
import PrivacyPolicy from './Compo/Privacy&policy';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const smootherRef = {
  scrollTo: () => { },
};

function HomePage() {
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

function App() {
  const smoother = useRef();

  useEffect(() => {
    smoother.current = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.5,
      effects: true,
      normalizeScroll: true,
    });

    smootherRef.scrollTo = (targetId) => {
      const target = document.querySelector(targetId);
      if (target && smoother.current) {
        smoother.current.scrollTo(target, true, 'top top');
      }
    };

    return () => {
      smoother.current?.kill();
    };
  }, []);

  return (
    <div
      id="smooth-wrapper"
      style={{
        height: '100%',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
      }}
    >

      <div id="smooth-content">

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="//privacy-policy" element={<PrivacyPolicy />} />
        </Routes>


      </div>
    </div>
  );
}

export default App;
