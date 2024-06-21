import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const SomeComponent = () => {
  const { isDark, change } = useContext(ThemeContext);
  console.log(isDark);
  return (
    <div>
      <p>{"asd"}</p>
      <button onClick={change}>Change Value</button>
    </div>
  );
};

export default SomeComponent;
