import React from 'react';
import './item.css';

const Item = ({ piece }) => {
  console.log(piece);
  return (
    <div className="item-border">
      <h3>List Item</h3>
      {piece.imageCollection.items[0] ? <img className="catalog-img"
      src={piece.imageCollection.items[0].url}
      alt={piece.imageCollection.items[0].title}/> : <p>No image</p>}
      <p>{piece.title}</p>
      <p>{piece.dimensions}</p>
      <p>{piece.description}</p>
      <p>{piece.price} SEK</p>
      <button>Request to buy</button>
    </div>
  );
};

export default Item;
