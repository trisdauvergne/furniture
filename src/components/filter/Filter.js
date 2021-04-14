import React, { useState } from 'react';
import './filter.css'
// import ModalFilter from '../modalFilter/ModalFilter';

const Filter = () => {
  // const [filterOpen, setFilterOpen] = useState(false);

  // const changeFilter = () => {
  //   setFilterOpen(!filterOpen);
  // };


  const [visibleFilter, setVisibleFilter] = useState(false);

  const changeFilter = () => {
    setVisibleFilter(!visibleFilter);
  }

  return (
    <div>
      <h4>Filter Items</h4>
      <button onClick={() => setVisibleFilter(!visibleFilter)}>Filter Items</button>
      <div className="testing">
        {visibleFilter && <ul>
          <li onClick={changeFilter}>All</li>
          <li onClick={changeFilter}>Chairs</li>
          <li onClick={changeFilter}>Shelving</li>
          <li onClick={changeFilter}>Dining Tables</li>
          <li onClick={changeFilter}>Coffee Tables</li>
          <li onClick={changeFilter}>Storage</li>
        </ul>}
      </div>
      {/* <button onClick={changeFilter}>Filter</button>
      <ModalFilter open={filterOpen} onClose={() => setFilterOpen(false)}>
        <ul>
          <li>All</li>
          <li>Chairs</li>
          <li>Shelving</li>
          <li>Dining Tables</li>
          <li>Coffee Tables</li>
          <li>Storage</li>
        </ul>
      </ModalFilter> */}
    </div>
  )
}

export default Filter;