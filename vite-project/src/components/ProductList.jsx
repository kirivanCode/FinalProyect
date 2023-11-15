import React, { useState } from 'react';
import ProductDetails from './ProductDetails'; // Asegúrate de que la ruta sea correcta
import panBueno from '../images/panBueno.jpg';
import baguette from '../images/baguette.jpg';
import tortaChocolate from '../images/tortaChocolate.jpg';
import panBono from '../images/panBono.jpg';
import alfajor from '../images/Alfajor.jpg';
import galletaMantequilla from '../images/galletaMantequilla.jpg';
import '../styles/ProductList.css';
import '../styles/ProductDetails.css';

const ProductList = ({ addToCart }) => {

  const [selectedProduct, setSelectedProduct] = useState(null);

  const openDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeDetails = () => {
    setSelectedProduct(null);
  };


  // Datos simulados de productos
  const products = [
    { id: 1, name: 'Pan el bueno', price: 3.5, description: 'pan bien bueno', image: panBueno },
    { id: 2, name: 'Torta de chocolate', price: 2.0, description: 'torta de chocolate de la buena', image: tortaChocolate },
    { id: 3, name: 'Baguette', price: 4.0, description: 'pan crujiente y loco', image: baguette },
    { id: 4, name: 'Pan de bono', price: 3.5, description: 'el mejor pan del mundo', image: panBono },
    { id: 5, name: 'Alfajor', price: 2.0, description: 'deliciosa galleta argentina', image: alfajor },
    { id: 6, name: 'galleta de mantequilla', price: 4.0, description: 'galleta de mantequilla con chips de chocolate', image: galletaMantequilla },
  ];

  return (
    <div>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id}>
            <div className="product-card">
            <img src={product.image} alt={product.name} onClick={() => openDetails(product)} />
              <div className="card-body">
                <p>{product.description}</p>
                <strong>{product.name}</strong> - ${product.price.toFixed(2)}
                <button onClick={() => addToCart(product)}>Agregar al carrito</button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {selectedProduct && (
        <div className="overlay" onClick={closeDetails}>
          <ProductDetails
            product={selectedProduct}
            addToCart={addToCart}
            closeDetails={closeDetails}
          />
        </div>
      )}
    </div>
  );
};

export default ProductList;
