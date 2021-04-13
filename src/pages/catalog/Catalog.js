import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Item from '../../components/item/Item';
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

const space = process.env.REACT_APP_SPACE;
const cdAccess = process.env.REACT_APP_CD_ACCESS;

const Catalog = () => {
  const [pieces, setPieces] = useState(null);

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
    setPieces(item.data.itemCollection.items);
  };

  useEffect(() => {
    itemData();
  }, []);

  if (!pieces) {
    return 'Loading...';
  }

  return (
    <div className="catalog-border">
      <h1>Catalog items</h1>
      {pieces.map(piece => <Item key={uuidv4()} piece={piece}/>)}
    </div>
  );
};

export default Catalog;
