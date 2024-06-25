// App.js
import React from 'react';
import ItemsPage from './components/ItemsPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
const App = () => {
 

  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/items/:id" element={<ItemsPage />} />
      </Routes>
    
  </Router>
  );
};

export default App;
