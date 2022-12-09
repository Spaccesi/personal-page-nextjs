import React from "react";
import { useTheme } from "next-themes";
import {BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

const ThemeSwitcher = () => {
  
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;

  function changeTheme() {
    setTheme(currentTheme === 'light' ? 'dark' : 'light')
  };

  return (
    <button onClick={changeTheme} className='mt-1 hover:scale-110'>
      {
        currentTheme === 'light'
        ? <BsFillMoonFill size={18}/> 
        : <BsFillSunFill size={18}/>
      }
    </button>
  );
}

export default ThemeSwitcher;