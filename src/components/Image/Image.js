import React from "react";

import "./Image.scss";

function Image({ src }) {
  return (
    <img
      className="Image"
      src={src}
      onClick={() => {
        throw new Error("Ups");
      }}
    />
  );
}

export default Image;
