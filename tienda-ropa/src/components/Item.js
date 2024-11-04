import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Item = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card m-2" style={{ width: '18rem' }}>
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Precio: ${product.price}</p>
        <button className="btn btn-primary" onClick={() => addToCart(product)}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default Item;
