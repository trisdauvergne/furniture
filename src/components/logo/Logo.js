import React, { useState, createContext, useEffect } from 'react';
import ModalDropdown from '../modalDropdown/ModalDropdown';
import { Link } from 'react-router-dom';
import './logo.css';

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

export const Logo = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const changeDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  
  return (
    <nav className="nav">
      <h1 className="nav__logo">Brand name</h1>
      <button className={dropdownOpen ? 'btn nav__btn nav__btn--bold' : 'btn nav__btn'} onClick={changeDropdown}>Menu</button>
      <div className="nav__menu">
      {dropdownOpen && <>
        <Link to="/about">
          <button className="btn" onClick={changeDropdown}>About</button>
        </Link>
        <Link to="/catalog">
          <button className="btn" onClick={changeDropdown}>Catalog</button>
        </Link>
        <Link to="/commissions">
          <button className="btn" onClick={changeDropdown}>Commissions</button>
        </Link>
        <Link to="/contact">
          <button className="btn" onClick={changeDropdown}>Contact</button>
        </Link></>}
      </div>
      {/* {!dropdownOpen && <button  className="btn nav__btn" onClick={changeDropdown}>Menu</button>}
      <ModalDropdown open={dropdownOpen} onClose={() => setDropdownOpen(false)}>
        <div className="nav__menu">
          <Link to="/about">
            <button className="btn" onClick={changeDropdown}>About</button>
          </Link>
          <Link to="/catalog">
            <button className="btn" onClick={changeDropdown}>Catalog</button>
          </Link>
          <Link to="/commissions">
            <button className="btn" onClick={changeDropdown}>Commissions</button>
          </Link>
          <Link to="/contact">
            <button className="btn" onClick={changeDropdown}>Contact</button>
          </Link>
        </div>
      </ModalDropdown> */}
    </nav>
  );
};

export const ItemsContext = createContext();

export const ItemsProvider = ({children}) => {
  const [pieces, setPieces] = useState(null);

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
    const item = await data.json();
    setPieces(item.data.itemCollection.items);
  };

  useEffect(() => {
    getItemData();
  }, []);

  return (
    <>
    <ItemsContext.Provider value={pieces}>
      {children}
    </ItemsContext.Provider>
    </>
  );
};