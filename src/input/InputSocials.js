import React, { useContext, useState } from "react";
import { InputContext } from "../App";

const InputSocials = () => {
  const { input, setInput } = useContext(InputContext);
  const [fbCheck, setFbCheck] = useState("turn-on");
  const [igCheck, setIgCheck] = useState("turn-on");
  const [liCheck, setLiCheck] = useState("turn-on");
  const [twCheck, setTwCheck] = useState("turn-on");

  const inputHandler = (e) => {
    setInput((prevInput) => ({ ...prevInput, [e.target.id]: e.target.value }));
  };

  const checkHandler = (e) => {
    console.log(e.target.id);
    switch (e.target.id) {
      case "fb-check":
        if (e.target.checked) {
          setInput((prevInput) => ({
            ...prevInput,
            checkFacebook: "inline",
          }));
          setFbCheck("turn-on");
        } else {
          setInput((prevInput) => ({
            ...prevInput,
            checkFacebook: "none",
          }));
          setFbCheck("turn-off");
        }
        e.target.checked
          ? setInput((prevInput) => ({
              ...prevInput,
              checkFacebook: "inline",
            }))
          : setInput((prevInput) => ({
              ...prevInput,
              checkFacebook: "none",
            }));
        return;
      case "ig-check":
        if (e.target.checked) {
          setInput((prevInput) => ({
            ...prevInput,
            checkInstagram: "inline",
          }));
          setIgCheck("turn-on");
        } else {
          setInput((prevInput) => ({
            ...prevInput,
            checkInstagram: "none",
          }));
          setIgCheck("turn-off");
        }
        return;
      case "li-check":
        if (e.target.checked) {
          setInput((prevInput) => ({
            ...prevInput,
            checkLinkedin: "inline",
          }));
          setLiCheck("turn-on");
        } else {
          setInput((prevInput) => ({
            ...prevInput,
            checkLinkedin: "none",
          }));
          setLiCheck("turn-off");
        }
        return;
      case "tw-check":
        if (e.target.checked) {
          setInput((prevInput) => ({
            ...prevInput,
            checkTwitter: "inline",
          }));
          setTwCheck("turn-on");
        } else {
          setInput((prevInput) => ({
            ...prevInput,
            checkTwitter: "none",
          }));
          setTwCheck("turn-off");
        }
        return;
      default:
    }
  };

  return (
    <>
      <div className="main-title">Socials</div>
      <section className="input-section input-socials">
        <div className="social-title">
          <label htmlFor="facebook">Facebook</label>
          <label className={`switch ${fbCheck}`}>
            <input
              type="checkbox"
              id="fb-check"
              defaultChecked="true"
              onChange={checkHandler}
            />
            <div id="slider"></div>
          </label>
        </div>
        <input
          type="text"
          id="facebook"
          placeholder={input.facebook}
          onChange={inputHandler}
        />
        <div className="social-title">
          <label htmlFor="instagram">Instagram</label>
          <label className={`switch ${igCheck}`}>
            <input
              type="checkbox"
              id="ig-check"
              defaultChecked="true"
              onChange={checkHandler}
            />
            <div id="slider"></div>
          </label>
        </div>
        <input
          type="text"
          id="instagram"
          placeholder={input.instagram}
          onChange={inputHandler}
        />
        <div className="social-title">
          <label htmlFor="linkedin">LinkedIn</label>
          <label className={`switch ${liCheck}`}>
            <input
              type="checkbox"
              id="li-check"
              defaultChecked="true"
              onChange={checkHandler}
            />
            <div id="slider"></div>
          </label>
        </div>
        <input
          type="text"
          id="linkedin"
          placeholder={input.linkedin}
          onChange={inputHandler}
        />
        <div className="social-title">
          <label htmlFor="twitter">Twitter</label>
          <label className={`switch ${twCheck}`}>
            <input
              type="checkbox"
              id="tw-check"
              defaultChecked="true"
              onChange={checkHandler}
            />
            <div id="slider"></div>
          </label>
        </div>
        <input
          type="text"
          id="twitter"
          placeholder={input.twitter}
          onChange={inputHandler}
        />
      </section>
    </>
  );
};

export default InputSocials;
