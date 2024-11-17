import React, { useState } from 'react';

function AddProductForm({ onAddProduct }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !price || !description) {
      alert('All fields required!');
      return;
    }

    const newProduct = {
      id: Date.now(), 
      name,
      price: parseFloat(price),
      description,
    };

    onAddProduct(newProduct); 

    setName(''); 
    setPrice('');
    setDescription('');
  };

  return (
    <div>
      <h2>Add a New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter product name"
            />
          </label>
        </div>
        <div>
          <label>
            Price:
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter product price"
              step="0.01"
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter product description"
            ></textarea>
          </label>
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProductForm;
