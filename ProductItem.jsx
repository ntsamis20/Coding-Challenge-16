import React from 'react';

function ProductItem({ product }) {
  return (
    <li style={{ border: '1px solid #ddd', padding: '16px', margin: '8px', borderRadius: '8px' }}>
      <h3 style={{ margin: '0 0 8px' }}>{product.name}</h3>
      <p style={{ margin: '0 0 4px' }}>
        <strong>Price:</strong> ${product.price.toFixed(2)}
      </p>
      <p style={{ margin: '0', color: '#555' }}>{product.description}</p>
    </li>
  );
}

export default ProductItem;
