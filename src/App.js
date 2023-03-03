import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact'
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <Header />
        <Routes>
        <Route 
        path='/'
        exact
        element={<AboutMe />}
        />
        <Route 
        path="/AboutMe"
        element={<AboutMe />}
        />
        <Route 
        path="/Portfolio"
        element={<Portfolio />}
        />
        <Route 
        path="/Contact"
        element={<Contact />}
        />
        <Route 
        path="/Resume"
        element={<Resume />}
        />
        <Route 
        path='/React-Portfolio'
        element={<AboutMe />}
        />
        </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
