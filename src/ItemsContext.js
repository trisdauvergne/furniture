// import React, { useState, createContext, useEffect } from 'react';

// require('dotenv').config();

// export const ItemsContext = createContext();

// const query = `
// {
//   itemCollection {
//     items {
//       title
//       dimensions
//       price
//       description
//       contentfulMetadata {
//         tags {
//           name
//         }
//       }
//       imageCollection {
//         items {
//           title
//           description
//           contentType
//           fileName
//           size
//           url
//           width
//           height
//         }
//       }
//     }
//   }
// }
// `;

// const SPACE_ID = process.env.REACT_APP_SPACE_ID;
// const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

// export const ItemsProvider = () => {
//   const [pieces, setPieces] = useState(null);

//   const getItemData = async () => {
//     const data = await fetch(`https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         // Authenticate the request
//         Authorization: `Bearer ${ACCESS_TOKEN}`,
//       },
//       // send the GraphQL query
//       body: JSON.stringify({ query }),
//     });
//     const item = await data.json();
//     setPieces(item.data.itemCollection.items);
//   };

//   useEffect(() => {
//     getItemData();
//   }, []);
// }