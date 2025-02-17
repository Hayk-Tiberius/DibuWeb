import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './main/Main.jsx';


const DibuNavigation = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  </Router>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <DibuNavigation />
  </React.StrictMode>
);


