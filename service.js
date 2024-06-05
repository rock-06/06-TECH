// Service.js
import React, { useEffect, useState } from 'react';
import '../App.css';  // Import the CSS file for styling
import Cart from '../component/cart';

function Service() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    // Mock API call to fetch products
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      // Limit the products to the first 15
      setProducts(data.slice(0, 20));
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="service-container">
      <h1>Our Services</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>GH₵ {product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <br/>
      <button onClick={toggleCart}>View Cart</button>
      {showCart && <Cart cart={cart} removeFromCart={removeFromCart} />}
    </div>
  );
}

export default Service;
