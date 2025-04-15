import React from 'react';

const produtosFeminino = [
  {
    id: 1,
    nome: 'Blusa Feminina',
    preco: 'R$ 79,90',
    imagem: 'https://via.placeholder.com/200x200?text=Blusa+Fem',
  },
  {
    id: 2,
    nome: 'Saia Jeans',
    preco: 'R$ 99,90',
    imagem: 'https://via.placeholder.com/200x200?text=Saia+Jeans',
  },
];

function ProdutosFeminino() {
  return (
    <div style={styles.grid}>
      {produtosFeminino.map((item) => (
        <div key={item.id} style={styles.card}>
          <img src={item.imagem} alt={item.nome} style={styles.imagem} />
          <h3>{item.nome}</h3>
          <p>{item.preco}</p>
          <button style={styles.botao}>Adicionar ao Carrinho</button>
        </div>
      ))}
    </div>
  );
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '2rem',
    padding: '2rem',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '1rem',
    textAlign: 'center',
  },
  imagem: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    marginBottom: '1rem',
  },
  botao: {
    padding: '0.5rem 1rem',
    backgroundColor: '#222',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ProdutosFeminino;
