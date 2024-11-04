import React from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();

  return (
    <div className="container mt-4">
      <h2 className="text-center">{greeting}</h2>
      <ItemList category={category} />
    </div>
  );
};

export default ItemListContainer;
