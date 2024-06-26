// App.js
import React from 'react';
import ItemsPage from './components/ItemsPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import ProfilePage from './components/ProfilePage';
const App = () => {
 

  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/items/:id" element={<ItemsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    
  </Router>
  );
};

export default App;
