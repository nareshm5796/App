// Component.js
import React, { useState, useEffect } from 'react';
import Card from './Card'; // Import the Card component

export default function Component() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from API
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);
// if (product.)

  return (
    <div className="fluid-container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-4 p-4" style={{ maxHeight: '800px', overflowY: 'auto' }}>
        {products.map((product, index) => (
          <Card 
            key={index} 
            title={product.title.substring(0, 10) + (product.title.length > 10 ? '...' : '')} 
            imageSrc={product.url} 
            description={product.description} 
            // price={product.price} userId
            price={product.id} 
            availability={product.availability} 
          />
        ))}
      </div>
    </div>
  );
}
