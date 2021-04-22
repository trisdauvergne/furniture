import React, { useState, createContext, useEffect } from 'react';
// import ModalDropdown from '../modalDropdown/ModalDropdown';
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
  const [aboutBold, setAboutBold] = useState(false);
  const [catalogBold, setCatalogBold] = useState(false);
  const [commissionsBold, setCommissionsBold] = useState(false);
  const [contactBold, setContactBold] = useState(false);

  const changeDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const test = () => {
    console.log('checking');
  }
  
  return (
    <nav className="nav nav--wide">
      <Link to="/about">
        <button onClick={() => setAboutBold(true)} onMouseLeave={() => setAboutBold(false)} className={aboutBold ? "btn btn--about btn__bold btn--lrg-screen" : "btn btn--about btn--lrg-screen"}>About</button>
      </Link>
      <Link to="/catalog">
        <button onClick={() => setCatalogBold(true)} onMouseLeave={() => setCatalogBold(false)} className={catalogBold ? "btn btn--catalog btn__bold btn--lrg-screen" : "btn btn--catalog btn--lrg-screen"}>Catalog</button>
      </Link>
      <Link to="/"><h1 className="nav__logo">Brand name</h1></Link>
      {/* <h1 className="nav__logo">Brand name</h1> */}
      <Link to="/commissions">
        <button onClick={() => setCommissionsBold(true)} onMouseLeave={() => setCommissionsBold(false)} className={commissionsBold ?"btn btn__bold btn--commissions btn--lrg-screen" : "btn btn--commissions btn--lrg-screen"}>Commissions</button>
      </Link>
      <Link to="/contact">
        <button onClick={() => setContactBold(true)} onMouseLeave={() => setContactBold(false)} className={contactBold ? "btn btn__bold btn--contact btn--lrg-screen" : "btn btn--contact btn--lrg-screen"}>Contact</button>
      </Link>
      {dropdownOpen ? <button onClick={changeDropdown} className='btn nav__btn nav__btn--bold'>Close</button> : <button className="btn nav__btn" onClick={changeDropdown}>Menu</button>}
      {dropdownOpen &&
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
        </div>}
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