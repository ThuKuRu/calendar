import React, { useState } from "react";
import { FormInputStyle } from "./index.styed";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { errorMessage, onChange, id, ...inputProps } = props;
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <FormInputStyle>
      <input
        {...inputProps}
        onChange={onChange}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span className="errorMessage">{errorMessage}</span>
    </FormInputStyle>
  );
};

export default FormInput;
