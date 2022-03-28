import React, { useContext } from "react";
import { InputContext } from "../App";

function InputImages() {
  const { input, setInput } = useContext(InputContext);

  const inputHandler = (e) => {
    setInput((prevInput) => ({ ...prevInput, [e.target.id]: e.target.value }));
  };

  return (
    <>
      <div className="main-title">Images</div>
      <section className="input-section input-images">
        <label htmlFor="profile">Profile Picture</label>
        <input
          type="text"
          id="profile"
          placeholder={input.profile}
          onChange={inputHandler}
        />
        <label htmlFor="logo">Company Logo</label>
        <input
          type="text"
          id="logo"
          placeholder={input.logo}
          onChange={inputHandler}
        />
      </section>
    </>
  );
}

export default InputImages;
