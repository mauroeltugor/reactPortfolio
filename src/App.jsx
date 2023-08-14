import React from 'react';
import { Header } from "./components/Header/Header";
import { Body } from './components/Body/Body';
import { Footer } from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { Projects } from './components/pages/Projects';
import { Default } from './components/pages/Default';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='projects' element={<Projects />} />
        <Route path='*' element={<Default />} />
      </Routes>
      <Footer />
    </div>
  );
}

//https://www.rammaheshwari.com/#about

export default App;
