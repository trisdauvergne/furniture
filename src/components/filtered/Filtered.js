import React, {useState, useEffect} from 'react';
// import Item from '../item/Item';
import Filter from '../filter/Filter';
// import { v4 as uuidv4 } from 'uuid';

require('dotenv').config();

const query = `
{
  itemCollection {
    items {
      title
      dimensions
      price
      description
      contentfulMetadata {
        tags {
          name
        }
      }
      imageCollection {
        items {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
      }
    }
  }
}
`;

const SPACE_ID = process.env.REACT_APP_SPACE_ID;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

const Filtered = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const filterWord = 'tables';

  const getItemData = async () => {
    const data = await fetch(`https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Authenticate the request
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      // send the GraphQL query
      body: JSON.stringify({ query }),
    });
    const itemData = await data.json();
    setItems(itemData.data.itemCollection.items);
    setFilteredItems(itemData.data.itemCollection.items.filter(item => item.contentfulMetadata.tags[0].name === filterWord));
  };

  // const filterItems = () => {
  //   setFilteredItems(items.filter(item => item.contentfulMetadata.tags[0].name === filterWord));
  // }

  useEffect(() => {
    getItemData();
  }, []);

  // useEffect(() => {
  //   filterItems();
  // }, [items]);

  if (!items) {
    return 'Loading...';
  }

  return (
    <div>
      <h2>Filtered</h2>
      <Filter pieces={items}/>
      {/* {filteredItems.map(piece => <Item key={uuidv4()} piece={piece}/>)} */}
    </div>
  )
}

export default Filtered
