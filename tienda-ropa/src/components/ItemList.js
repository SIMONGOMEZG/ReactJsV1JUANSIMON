import React from 'react';
import Item from './Item';
import products from '../data/productsData';

const ItemList = ({ category }) => {
  const filteredProducts = products.filter(product => product.category === category);

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {filteredProducts.length > 0 ? (
        filteredProducts.map(product => (
          <Item key={product.id} product={product} />
        ))
      ) : (
        <p>No hay productos disponibles en esta categoría.</p>
      )}
    </div>
  );
};

export default ItemList;
