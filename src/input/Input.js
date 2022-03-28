import React from "react";

import "./Input.css";

import InputDetails from "./InputDetails";
import InputSocials from "./InputSocials";
import InputImages from "./InputImages";
import InputStyles from "./InputStyles";

const Input = () => {
  return (
    <div id="input">
      <div id="input-wrapper">
        <InputDetails />
        <InputSocials />
        <InputImages />
        <InputStyles />
      </div>
    </div>
  );
};

export default Input;
