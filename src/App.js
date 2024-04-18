// App.js
import './App.css';
import Mainpage from './components/main';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/products';
import ProductDetailsFaol from './components/Faol/faoltarmoqdata';
import ProductDetailsPassiv from './components/Passiv/passivtarmoqdata';

function App() {
  return (
    <div className="App"> 
      <Router>
        <Routes>
          <Route index element={<Mainpage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/faol/:productName" element={<ProductDetailsFaol />} />
          <Route path="/products/passiv/:productName" element={<ProductDetailsPassiv />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
