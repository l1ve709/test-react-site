import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="App-header">
      <h1>React Test Site</h1>
      <nav>
        <ul>
          <li><a href="#about">Hakkında</a></li>
          <li><a href="#main">Ana İçerik</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
