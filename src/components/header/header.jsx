import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

function Header () {
    return (
      <div className="header">
        <Link to={`/`}className="header-title">YoYo Movies</Link>
        <Link to={`/favourites`} className="header-link">My Favourites</Link>
      </div>
    );
}

export default Header;
