import React, { useState, useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Item from '../../components/item/Item';
import Filter from '../../components/filter/Filter';
import { ItemsContext } from '../../components/logo/Logo';

const Filtered = () => {
  const pieces = useContext(ItemsContext);
  console.log(pieces);

  // const [filtered, setFiltered] = useState([]);

  // const filterItems = () => {
  //   const filteredItems = values.filter(item => item.contentfulMetadata.tags[0].name === 'tables');
  //   setFiltered(filteredItems);
  // }

  // useEffect(() => {
  //   filterItems();
  // }, []);

  // useEffect(() => {
  //   console.log('filtered');
  //   console.log(filtered);
  // }, [filtered])

  return (
    <div>
      <h1>Filtered Page</h1>
      <Filter pieces={pieces}/>
      {pieces.map(piece => <Item key={uuidv4()} piece={piece}/>)}
    </div>
  )
}

export default Filtered
