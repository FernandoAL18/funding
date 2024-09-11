import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Metrix from './components/Metrix'; // Create and link the Metrix component

function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/metrix/:id" element={<Metrix />} /> {/* Route for Metrix */}
      </Routes>
    </Router>
  );
}

export default MainRouter;
