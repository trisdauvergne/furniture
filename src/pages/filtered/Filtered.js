import React, { useState, useContext, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Item from '../../components/item/Item';
import { Filter } from '../../components/filter/Filter';
import { ItemsContext } from '../../components/logo/Logo';

const Filtered = () => {
  const match = useRouteMatch();
  const [filteredPieces, setFilteredPieces] = useState([]);
  const pieces = useContext(ItemsContext);
  const filterWord = match.params.tag;

  console.log(filterWord);

  const filterFunction = () => {
    if (pieces) {
      setFilteredPieces(pieces.filter(piece => piece.contentfulMetadata.tags[0].name === filterWord));
    }
  }

  useEffect(() => {
    filterFunction();
  }, []);

  if (!pieces) {
    return 'Loading...';
  }

  return (
    <div>
      <h1>Filtered Page</h1>
      <Filter pieces={pieces}/>
      {filteredPieces.map(piece => <Item key={uuidv4()} piece={piece}/>)}
    </div>
  )
}

export default Filtered
