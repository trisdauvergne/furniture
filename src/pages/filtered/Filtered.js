import React, { useState, useContext, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Item from '../../components/item/Item';
import { Filter } from '../../components/filter/Filter';
import { ItemsContext } from '../../components/logo/Logo';
import './filtered.css';

const Filtered = () => {
  const match = useRouteMatch();
  const [filteredPieces, setFilteredPieces] = useState([]);
  const pieces = useContext(ItemsContext);
  const filterWord = match.params.tag;

  const filterFunction = () => {
    if (pieces) {
      setFilteredPieces(pieces.filter(piece => piece.contentfulMetadata.tags[0].name === filterWord));
    }
  }

  useEffect(() => {
    filterFunction();
  }, []);

  console.log(window);

  if (!pieces) {
    return 'Loading...';
  }

  return (
    <section className="filtered">
      <div className="filtered__header">
        <h3 className="filtered__header--h3">{filterWord.charAt(0).toUpperCase() + filterWord.slice(1)}</h3>
        <Filter pieces={pieces}/>
      </div>
      {filteredPieces.map(piece => <Item key={uuidv4()} piece={piece}/>)}
    </section>
  )
}

export default Filtered
