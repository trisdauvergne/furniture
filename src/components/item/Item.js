import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './item.css';

const Item = ({ piece }) => {
  // console.log(piece);

  const [descriptionVisible, setDescriptionVisible] = useState(false);

  const toggleDescriptionVisible = () => {
    setDescriptionVisible(!descriptionVisible);
  }

  return (
    <section className="item" onMouseLeave={() => setDescriptionVisible(false)}>
      <div className="item-imgs">
        {piece.imageCollection.items.map(image => <img key={uuidv4()}className="item-img"
        src={image.url}
        alt={image.title}/>)}
      </div>
      <div className="item-txt">
        <p className="item-txt__p">{piece.title}</p>
        <p className="item-txt__p">{piece.dimensions}</p>
        <p className="item-txt__p">{piece.price} SEK</p>
        <button onClick={(toggleDescriptionVisible)} className="btn item-txt__btn">Read more</button>
        {descriptionVisible && <p className="item-txt__p item-txt__description">{piece.description}</p>}
      </div>
    </section>
  );
};

export default Item;
