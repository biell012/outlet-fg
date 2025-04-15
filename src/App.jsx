import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home';
import Produtos from './pages/Produtos';
import Carrinho from './pages/Carrinho';
import PaginaNaoEncontrada from './pages/PaginaNaoEncontrada';


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/carrinho" element={<Carrinho />} />

          <Route path="*" element={<PaginaNaoEncontrada />} />


        </Routes>
      </main>
    </Router>
  );
}

export default App;
