import React, { useState } from 'react';
import './filter.css'

const Filter = () => {
  const [visibleFilter, setVisibleFilter] = useState(false);

  const changeFilter = () => {
    setVisibleFilter(!visibleFilter);
  }

  return (
    <section className="filter">
      <button className={visibleFilter ? 'btn filter__btn filter__btn--bold' : 'btn filter__btn'} onClick={() => setVisibleFilter(!visibleFilter)}>Filter</button>
      <div className="filter__filter-list">
        {visibleFilter && <>
          <button className="btn" onClick={changeFilter}>All</button>
          <button className="btn" onClick={changeFilter}>Chairs</button>
          <button className="btn" onClick={changeFilter}>Shelving</button>
          <button className="btn" onClick={changeFilter}>Dining Tables</button>
          <button className="btn" onClick={changeFilter}>Coffee Tables</button>
          <button className="btn" onClick={changeFilter}>Storage</button>
          </>}
      </div>
    </section>
  )
}

export default Filter;