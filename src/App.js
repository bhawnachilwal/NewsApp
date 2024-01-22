import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<News key="general" country="in" category="general" />} />
          <Route path="/general" element={<News key="general" country="in" category="general" />} />
          <Route path="/business" element={<News key="business" country="in" category="business" />} />
          <Route path="/sports" element={<News key="sports" country="in" category="sports" />} />
          <Route path="/health" element={<News key="health" country="in" category="health" />} />
          <Route path="/entertainment" element={<News key="entertainment" country="in" category="entertainment" />} />
          <Route path="/science" element={<News key="science" country="in" category="science" />} />
          <Route path="/tech" element={<News key="tech" country="in" category="tech" />} />
          <Route path="/about" element={<About />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}
