import React from 'react';

function Carrinho() {
  return (
    <div style={styles.container}>
      <h2>Carrinho de Compras</h2>
      <p>Seu carrinho está vazio no momento.</p>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
  },
};

export default Carrinho;
