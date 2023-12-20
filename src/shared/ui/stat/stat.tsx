import { useContext } from 'react';
import clsx from 'clsx';

import { ThemeContext } from 'app/contexts';

import s from './stat.module.scss';

interface StatProps {
  title: string;
  value: number;
}

export function Stat({ title, value }: StatProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={s.stat}>
      <p className={clsx(s.title, { [s.titleDark]: theme === 'dark' })}>
        {title}
      </p>
      <p className={clsx(s.value, { [s.valueDark]: theme === 'dark' })}>
        {value}
      </p>
    </div>
  );
}
