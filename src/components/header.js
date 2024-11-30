import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Senseful Scents</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/store">Store</Link>
      </nav>
    </header>
  );
}

export default Header;
