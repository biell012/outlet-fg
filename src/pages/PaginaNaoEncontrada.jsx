import React from 'react';
import { Link } from 'react-router-dom';

function PaginaNaoEncontrada() {
  return (
    <div style={styles.container}>
      <h2>Página não encontrada</h2>
      <p>A URL que você tentou acessar não existe.</p>
      <Link to="/" style={styles.botao}>Voltar para a Home</Link>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
  },
  botao: {
    marginTop: '1rem',
    display: 'inline-block',
    padding: '0.5rem 1rem',
    backgroundColor: '#222',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
  },
};

export default PaginaNaoEncontrada;
