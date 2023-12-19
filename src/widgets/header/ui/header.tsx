import { useContext } from 'react';
import clsx from 'clsx';

import { ThemeSwitcher } from 'features/theme/theme-switcher';
import { ThemeContext } from 'app/contexts';

import s from './header.module.scss';

export function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <header className={clsx(s.header, { [s.headerDark]: theme === 'dark' })}>
      <h1 className={clsx(s.title, { [s.titleDark]: theme === 'dark' })}>
        devfinder
      </h1>
      <ThemeSwitcher />
    </header>
  );
}
