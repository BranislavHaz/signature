import React, { useState } from "react";

import "./Copy.css";

function Copy() {
  const [buttonText, setButtonText] = useState("copy to clipboard");

  const copyHelper = async (what) => {
    await navigator.clipboard.writeText(what);
    console.log(what);
  };

  const copyHandler = () => {
    const signature = document.querySelector("#preview-table").innerHTML;
    copyHelper(signature);

    (() => {
      setButtonText("copied!");
      setTimeout(() => setButtonText("copy to clipboard!"), 2000);
    })();
  };
  return (
    <>
      <button onClick={copyHandler}>{buttonText}</button>
    </>
  );
}

export default Copy;
