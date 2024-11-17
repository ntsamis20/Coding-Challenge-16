import React, { useState } from 'react';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Television',
      price: 1200,
      description: 'A high quality TV for at home enjoyment.',
    },
    {
      id: 2,
      name: 'Speaker',
      price: 150,
      description: 'Great quality sound for parties.',
    },
    {
      id: 3,
      name: 'Smartphone',
      price: 800,
      description: 'A sleek and powerful smartphone.',
    },
  ]);

  return (
    <div>
      <h1>Product Management App</h1>
      {/* Pass the products as props to ProductList */}
      <ProductList products={products} />
      {/* Render AddProductForm */}
      <AddProductForm />
    </div>
  );
}

const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

export default App;


import React from 'react';

