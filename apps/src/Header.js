import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Header() {
  const style = {
    height: '100px',
    background: '#000',
    color: '#fff'
  };

  return (
    <header className="header" style={style}>
      ヘッダー
        <ul>
          <li><Link to='/'>TOP</Link></li>
          <li><Link to='/page01'>ページ01</Link></li>
          <li><Link to='/page02'>ページ02</Link></li>
        </ul>
    </header>
  );
}

export default Header;
