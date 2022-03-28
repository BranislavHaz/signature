import React, { useContext } from "react";
import { InputContext } from "../App";

const InputDetails = () => {
  const { input, setInput } = useContext(InputContext);

  const inputHandler = (e) => {
    setInput((prevInput) => ({ ...prevInput, [e.target.id]: e.target.value }));
  };

  return (
    <>
      <div className="main-title">Details</div>
      <section className="input-section input-details">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          placeholder={input.name}
          onChange={inputHandler}
        />
        <label htmlFor="job">Job Title</label>
        <input
          type="text"
          id="job"
          placeholder={input.job}
          onChange={inputHandler}
        />
        <label htmlFor="company">Company Name</label>
        <input
          type="text"
          id="company"
          placeholder={input.company}
          onChange={inputHandler}
        />
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          id="phone"
          placeholder={input.phone}
          onChange={inputHandler}
        />
        <label htmlFor="web">Website URL</label>
        <input
          type="text"
          id="web"
          placeholder={input.web}
          onChange={inputHandler}
        />
        <label htmlFor="address1">Company Adress</label>
        <input
          type="text"
          id="address1"
          placeholder={input.address1}
          onChange={inputHandler}
        />
        <input
          type="text"
          id="address2"
          placeholder={input.address2}
          onChange={inputHandler}
        />
      </section>
    </>
  );
};

export default InputDetails;
