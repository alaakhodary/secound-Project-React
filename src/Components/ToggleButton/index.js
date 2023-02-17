import React, { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import { darkTheme, lightTheme } from "../../global/theme";

const ToggleButton = () => {
  const [theme, setTheme] = useContext(themeContext);
  return (
    <div>
      <button
        style={{ padding: 15, borderRadius: "10px", border: "none" }}
        onClick={() =>
          setTheme((prevState) =>
            prevState.theme === "light" ? darkTheme : lightTheme
          )
        }
      >
        {theme.theme === "light" ? "dark" : "light"}
      </button>
    </div>
  );
};

export default ToggleButton;
