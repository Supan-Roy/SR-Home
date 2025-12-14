import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Extensions from './Extensions';
import Projects from './Projects';
import Games from './Games';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/extensions" element={<Extensions />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/games" element={<Games />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
