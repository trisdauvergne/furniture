import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './filter.css'

const Filter = ({ pieces }) => {
  const [visibleFilter, setVisibleFilter] = useState(false);
  const [tags, setTags] = useState([]);
  const [filterText, setFilterText] = useState('');

  const history = useHistory();

  const filterBtnFunctions = (e) => {
    setFilterText(e.target.innerText);
    setVisibleFilter(!visibleFilter);
    history.push('/');
  }

  const getTags = () => {
    const tagsArray = pieces.map(piece => piece.contentfulMetadata.tags[0].name);
    setTags(tagsArray.filter((item, index) => tagsArray.indexOf(item) === index));
  }

  useEffect(() => {
    getTags();
  }, []);

  return (
    <section className="filter">
      <button className={visibleFilter ? 'btn filter__btn filter__btn--bold' : 'btn filter__btn'} onClick={() => setVisibleFilter(!visibleFilter)}>Filter</button>
      <div className="filter__filter-list">
        {visibleFilter && tags.map(tag => <Link to="/catalog/filtered"><button key={uuidv4()} className="btn" onClick={filterBtnFunctions}>{tag.charAt(0).toUpperCase() + tag.slice(1)}</button></Link>)}
      </div>
    </section>
  )
}

export default Filter;