import React, { useState, useEffect, createContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import './filter.css';

export const Filter = ({ pieces }) => {
  const [visibleFilter, setVisibleFilter] = useState(false);
  const [tags, setTags] = useState([]);
  const [filterText, setFilterText] = useState('');

  let history = useHistory();
  // let location = useLocation();

  const filterBtnFunctions = (e) => {
    const tag = e.target.innerText.toLowerCase();
    setFilterText(tag);
    setVisibleFilter(!visibleFilter);
    const regex = /catalog\//;
    if (regex.test(window.location.pathname)) {
      history.push(`${tag}`);
    } else {
      history.replace(`catalog/${tag}`);
    }
  }

  const getTags = () => {
    const tagsArray = pieces.map(piece => piece.contentfulMetadata.tags[0].name);
    setTags(tagsArray.filter((item, index) => tagsArray.indexOf(item) === index));
  }

  useEffect(() => {
    getTags();
  }, []);

  return (
    <section className="filter" onMouseLeave={() => setVisibleFilter(false)}>
      <button className={visibleFilter ? 'btn filter__btn filter__btn--bold' : 'btn filter__btn'} onMouseOver={() => setVisibleFilter(true)}>Filter</button>
      <div className="filter__filter-list">
        {visibleFilter && <Link to="/catalog"><button className="btn" onClick={() => setVisibleFilter(false)}>All</button></Link>}
        {visibleFilter && tags.map(tag => <button key={uuidv4()} className="btn" onClick={filterBtnFunctions}>{tag.charAt(0).toUpperCase() + tag.slice(1)}</button>)}
      </div>
    </section>
  )
}

export const FilterContext = createContext();

export const FilterProvder = () => {
  const [filterText, setFilterText] = useState('');

}

// export default Filter;