import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ChooseMap from './pages/ChooseMap';
import Map from './pages/Map';
import Admin from './pages/Admin';

import Nav from './components/navbars/nav.module.jsx';

function App() {
  const [khuvuc, setKhuvuc] = useState([]); 
  useEffect(() => {
    axios.get('http://localhost:3001/khuvuc') // URL backend của bạn
      .then(response => setKhuvuc(response.data))
      .catch(error => console.error('Lỗi khi gọi API:', error));
  }, []);

  return (
    <Router>
      <div>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ChooseMap" element={<ChooseMap />} />
          <Route path="/map" element={<Map />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
