import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Item from '../../components/item/Item';
import Filter from '../../components/filter/Filter';
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

const Catalog = () => {
  const [pieces, setPieces] = useState(null);

  const itemData = async () => {
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
    const item = await data.json();
    setPieces(item.data.itemCollection.items);
  };

  useEffect(() => {
    itemData();
  }, []);

  if (!pieces) {
    return 'Loading...';
  }

  return (
    <section className="catalog">
      <div className="catalog__header">
        <h3 className="catalog__header--h3">Catalog items</h3>
        <Filter pieces={pieces}/>
      </div>
      {pieces.map(piece => <Item key={uuidv4()} piece={piece}/>)}
    </section>
  );
};

export default Catalog;