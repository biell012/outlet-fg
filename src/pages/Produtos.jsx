import React from 'react';

function Produtos() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Todos os Produtos</h2>
      <div style={styles.grid}>
        {produtos.map((item) => (
          <div key={item.id} style={styles.card}>
            <img src={item.imagem} alt={item.nome} style={styles.imagem} />
            <h3>{item.nome}</h3>
            <p>{item.preco}</p>
            <button style={styles.botao}>Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const produtos = [
  {
    id: 1,
    nome: 'Tênis Esportivo',
    preco: 'R$ 199,90',
    imagem: 'https://via.placeholder.com/200x200?text=Tenis',
  },
  {
    id: 2,
    nome: 'Jaqueta Masculina',
    preco: 'R$ 249,90',
    imagem: 'https://via.placeholder.com/200x200?text=Jaqueta',
  },
  {
    id: 3,
    nome: 'Bolsa Feminina',
    preco: 'R$ 149,90',
    imagem: 'https://via.placeholder.com/200x200?text=Bolsa',
  },
];

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '2rem',
    marginTop: '1rem',
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

export default Produtos;
