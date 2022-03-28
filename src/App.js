import React, { useState } from "react";

import "./App.css";

import Input from "./input/Input";
import Preview from "./preview/Preview";
import Resize from "./resize/Resize";

const inputData = {
  /* for InputDetails.js */
  name: "Branislav Ház",
  job: "Frontend Developer",
  company: "I hope GoodRequest",
  phone: "+421 914 196 273",
  web: "GoodRequest.com",
  address1: "Framborská 58",
  address2: "010 01, Žilina",

  /* for InputSocials.js */
  facebook: "https://www.facebook.com/",
  checkFacebook: true,
  instagram: "https://www.instagram.com/",
  checkInstagram: true,
  linkedin: "https://www.linkedin.com/",
  checkLinkedin: true,
  twitter: "https://www.twitter/",
  checkTwitter: true,

  /* for InputImages.js */
  profile: "https://i.imgur.com/kexrdcc.png",
  logo: "https://i.imgur.com/BNWx7Km.png",

  /* for InputDetails.js */
  theme: "938580",
  themeColor: "#938580",
  text: "000000",
  textColor: "#000000",
  link: "938580",
  linkColor: "#938580",
  font: "Courier New",
};

export const InputContext = React.createContext(inputData);

function App() {
  const [input, setInput] = useState(inputData);

  return (
    <div id="generator">
      <InputContext.Provider value={{ input, setInput }}>
        <Input />
        <Preview />
      </InputContext.Provider>
      <Resize />
    </div>
  );
}

export default App;
