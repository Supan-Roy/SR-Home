import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Extensions from './Extensions';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/extensions" element={<Extensions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
