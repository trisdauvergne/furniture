import React, { useState, useEffect } from 'react';
import './filter.css'

const Filter = ({ pieces }) => {
  const [visibleFilter, setVisibleFilter] = useState(false);
  const [tags, setTags] = useState([]);

  const changeFilter = () => {
    setVisibleFilter(!visibleFilter);
  }

  const getTags = () => {
    const tagsArray = pieces.map(piece => piece.contentfulMetadata.tags[0].name);
    setTags(tagsArray.filter((item, index) => tagsArray.indexOf(item) === index));
    console.log(tags);
  }

  useEffect(() => {
    getTags();
  }, []);

  return (
    <section className="filter">
      <button className={visibleFilter ? 'btn filter__btn filter__btn--bold' : 'btn filter__btn'} onClick={() => setVisibleFilter(!visibleFilter)}>Filter</button>
      <div className="filter__filter-list">
        {visibleFilter && tags.map((tag, index) => <button className="btn" key={index}>{tag.charAt(0).toUpperCase() + tag.slice(1)}</button>)}
      </div>
    </section>
  )
}

export default Filter;