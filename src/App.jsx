import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Carrinho from './pages/Carrinho';
import PaginaNaoEncontrada from './pages/PaginaNaoEncontrada';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          {/* Rota para a Home */}
          <Route path="/" element={<Home />} />
          {/* Rota para a página de produtos */}
          <Route path="/produtos" element={<Produtos />} />
          {/* Rota para o carrinho */}
          <Route path="/carrinho" element={<Carrinho />} />
          {/* Rota de fallback (para URLs que não correspondam a nenhuma das anteriores) */}
          <Route path="*" element={<PaginaNaoEncontrada />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
