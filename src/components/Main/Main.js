import React from "react";
import propTypes from "prop-types";

import "./Main.scss";

function Main({ children }) {
  return <main className="Main">{children}</main>;
}

Main.propTypes = {
  children: propTypes.node.isRequired,
};

export default Main;
