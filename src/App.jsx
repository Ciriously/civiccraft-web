import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import LandingPage from './Pages/Landingpage';
import Carrers from './Pages/Carrers';
import ContactUs from './Pages/Contact';
import Teams from './Pages/Teams';

const App = () => {
  return (
    <div className="bg-radial-gradient">

      <Router>

        <Routes>
          <Route path="/" element={<LandingPage />} index />
          <Route path="/careers" element={<Carrers />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
