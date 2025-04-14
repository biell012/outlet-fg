import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
     <Home />
      <main style={{ padding: '2rem' }}>
        <h2>Bem-vindo à nossa loja online!</h2>
        <p>Confira as melhores ofertas em roupas, calçados e acessórios.</p>
      </main>
    </div>
  );
}

export default App;
