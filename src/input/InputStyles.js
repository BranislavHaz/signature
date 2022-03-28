import React, { useContext } from "react";
import { InputContext } from "../App";

function InputColors() {
  const { input, setInput } = useContext(InputContext);

  const inputHandler = (e) => {
    setInput((prevInput) => ({
      ...prevInput,
      [e.target.id]: e.target.value,
    }));

    if (e.target.value.length === 6) {
      switch (e.target.id) {
        case "theme":
          setInput((prevInput) => ({
            ...prevInput,
            themeColor: "#" + e.target.value,
          }));
          break;
        case "text":
          setInput((prevInput) => ({
            ...prevInput,
            textColor: "#" + e.target.value,
          }));
          break;
        case "link":
          setInput((prevInput) => ({
            ...prevInput,
            linkColor: "#" + e.target.value,
          }));
          break;
        default:
      }
    }

    if (e.target.value.length === 7) {
      switch (e.target.id) {
        case "themeColor":
          setInput((prevInput) => ({
            ...prevInput,
            theme: e.target.value.substring(1),
          }));
          break;
        case "textColor":
          setInput((prevInput) => ({
            ...prevInput,
            text: e.target.value.substring(1),
          }));
          break;
        case "linkColor":
          setInput((prevInput) => ({
            ...prevInput,
            link: e.target.value.substring(1),
          }));
          break;
        default:
      }
    }
  };

  return (
    <>
      <div className="main-title">Styles</div>
      <section className="input-section input-styles">
        <label htmlFor="theme">Theme Color</label>
        <div className="colors">
          <span className="hexa">#</span>
          <input
            type="text"
            id="theme"
            className="colors-input"
            maxLength="6"
            value={input.theme}
            onChange={inputHandler}
          />
          <input
            type="color"
            id="themeColor"
            value={input.themeColor}
            onChange={inputHandler}
          />
        </div>
        <label htmlFor="text">Text Color</label>
        <div className="colors">
          <span className="hexa">#</span>
          <input
            type="text"
            id="text"
            className="colors-input"
            maxLength="6"
            value={input.text}
            onChange={inputHandler}
          />
          <input
            type="color"
            id="textColor"
            value={input.textColor}
            onChange={inputHandler}
          />
        </div>
        <label htmlFor="link">Link Color</label>
        <div className="colors">
          <span className="hexa">#</span>
          <input
            type="text"
            id="link"
            className="colors-input"
            maxLength="6"
            value={input.link}
            onChange={inputHandler}
          />
          <input
            type="color"
            id="linkColor"
            value={input.linkColor}
            onChange={inputHandler}
          />
        </div>
        <label htmlFor="font">Font</label>
        <select id="font" value={input.font} onChange={inputHandler}>
          <option value="Arial">Arial</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Tahoma">Tahoma</option>
          <option value="New Times Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
        </select>
      </section>
    </>
  );
}

export default InputColors;
