import React, { useState } from "react";
import { InputFormatStyle } from "./index.styleF";
const FormInput = (props) => {
    const [focused, setFocused] = useState(false); 
    const {errorMessage, onChange, id, ...inputProps} = props;
    const handleFocus = (e) => {
        setFocused(true);
    };
    return (
            <div>
                <InputFormatStyle>
                <input {...inputProps} 
            onChange={onChange} 
            onFocus={()=>inputProps.name === "confirmPassword" && setFocused(true)} 
            onBlur={handleFocus} 
            focused={focused.toString()}/>
            <span className="errorMessage">{errorMessage}</span>
                </InputFormatStyle>
            </div>
  );
};

export default FormInput
