import React, { useState, useContext } from 'react';
import { ItemsContext } from '../../components/logo/Logo';
import { v4 as uuidv4 } from 'uuid';
import Item from '../../components/item/Item';
import { Filter } from '../../components/filter/Filter';
import './catalog.css';

const Catalog = () => {
  const pieces = useContext(ItemsContext);
  // const [imgHeight, setImgHeight] = useState('');

  if (!pieces) {
    return 'Loading...';
  }

  return (
    <section className="catalog">
      <div className="catalog__header">
        <h3 className="catalog__header--h3">All items</h3>
        <Filter pieces={pieces}/>
      </div>
      {pieces.map(piece => <Item key={uuidv4()} piece={piece}/>)}
    </section>
  );
};

export default Catalog;