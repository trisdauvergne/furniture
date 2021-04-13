import React, { useState, useEffect } from 'react';
import './catalog.css';

require('dotenv').config();

const query = `
{
  itemCollection {
    items {
      title
      dimensions
      price
      description
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

const space = process.env.REACT_APP_SPACE;
const cdAccess = process.env.REACT_APP_CD_ACCESS;

const Catalog = () => {
  const [items, setItems] = useState([]);

  const itemData = async () => {
    const data = await fetch(`https://graphql.contentful.com/content/v1/spaces/${space}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Authenticate the request
        Authorization: `Bearer ${cdAccess}`,
      },
      // send the GraphQL query
      body: JSON.stringify({ query }),
    });
    const item = await data.json();
    console.log(item);
    setItems(item.data.itemCollection.items);
  };

  useEffect(() => {
    itemData();
  }, []);

  if (!items) {
    return 'Loading...';
  }

  return (
    <div className="catalog-border">
      <h1>Catalog items</h1>
      <img className="catalog-img"
      src={items[0].imageCollection.items[0].url}
      alt={items[0].imageCollection.items[0].title}/>
      <p>{items[0].title}</p>
      <p>{items[0].dimensions}</p>
      <p>{items[0].description}</p>
      <p>{items[0].price} SEK</p>
      <button>Request to buy</button>
    </div>
  );
};

export default Catalog;
