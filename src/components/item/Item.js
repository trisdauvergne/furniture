import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Image from '../image/Image';
import './item.css';

const Item = ({ piece }) => {
  const [descriptionVisible, setDescriptionVisible] = useState(false);

  const toggleDescriptionVisible = () => {
    setDescriptionVisible(!descriptionVisible);
  }

  return (
    <section className="item" onMouseLeave={() => setDescriptionVisible(false)}>
      <div className="item-imgs">
        {piece.imageCollection.items.map(image => <article className="item-article" key={uuidv4()}><Image image={image}/></article>)}
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
