import React from "react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;

  function changeTheme() {
    setTheme(currentTheme === 'light' ? 'dark' : 'light')
  };

  return (
    <button onClick={changeTheme}>Click here!</button>
  );
}

export default ThemeSwitcher;