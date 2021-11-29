import React from 'react';
import '../css/App.css';
import { FaSearch } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Header() {
  return (
    <div className="Filters">
      <form>
        <IconContext.Provider value={{ color: '#37352F' }}>
          <FaSearch />
        </IconContext.Provider>
        <input className="Filters-search" type="search" placeholder="search" />
      </form>
    </div>
  );
}

export default Header;
