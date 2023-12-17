import { useContext } from 'react';
import clsx from 'clsx';

import { ThemeContext } from 'app/contexts';

import s from './theme-switcher.module.scss';

export function ThemeSwitcher() {
  const { theme, changeTheme } = useContext(ThemeContext);
  const themeText = theme === 'light' ? 'Dark' : 'Light';

  return (
    <button
      className={clsx(s.switcher, { [s.switcherDark]: theme === 'dark' })}
      onClick={changeTheme}
      type='button'
    >
      {themeText}
    </button>
  );
}
