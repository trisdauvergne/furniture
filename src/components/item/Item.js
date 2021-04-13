import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './item.css';

const Item = ({ piece }) => {
  // const imgId = uuidv4();
  // console.log(imgId, 'in Item component');

  return (
    <div className="item-border">
      <h3>List Item</h3>
      <div className="item-imgs">
        {piece.imageCollection.items.map(image => <img key={uuidv4()}className="catalog-img"
        src={image.url}
        alt={image.title}/>)}
      </div>
      <p>{piece.title}</p>
      <p>{piece.dimensions}</p>
      <p>{piece.description}</p>
      <p>{piece.price} SEK</p>
      <button>Request to buy</button>
    </div>
  );
};

export default Item;
