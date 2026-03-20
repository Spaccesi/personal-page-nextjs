import { useTheme } from 'next-themes';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

const ThemeSwitcher = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className='mt-1 hover:scale-110'
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? <BsFillSunFill size={18} /> : <BsFillMoonFill size={18} />}
    </button>
  );
};

export default ThemeSwitcher;