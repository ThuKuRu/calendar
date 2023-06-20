import React from "react";
import { ButtonStyle } from "./index.style";

const Button = ({ content }) => {
  return (
    <ButtonStyle>
      <div>{content}</div>
    </ButtonStyle>
  );
};

export default Button;
