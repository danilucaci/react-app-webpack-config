import React from "react";
import { Link } from "react-router-dom";

import "./Nav.scss";

function Nav() {
  return (
    <header>
      <nav className="Nav Row">
        <Link className="Nav__Item Col" to="/">
          Home
        </Link>
        <Link className="Nav__Item Col" to="/about">
          About
        </Link>
      </nav>
    </header>
  );
}

export default Nav;
