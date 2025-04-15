import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home';
import ProdutosFeminino from './pages/ProdutosFeminino';
import ProdutosInfantil from './pages/ProdutosInfantil';

function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feminino" element={<ProdutosFeminino />} />
        <Route path="/infantil" element={<ProdutosInfantil />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
