import React from "react";
import { ButtonStyle } from "./index.style";

const Button = ({ content }) => {
  return (
    <ButtonStyle>
      <div className="layer">
        <div className="in-layer">{content}</div>
      </div>
    </ButtonStyle>
  );
};

export default Button;
