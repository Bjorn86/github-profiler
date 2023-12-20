import { useContext } from 'react';
import clsx from 'clsx';

import { ThemeContext } from 'app/contexts';

import s from './info-item.module.scss';

export interface InfoItemProps {
  id: number;
  icon: React.ReactNode;
  text?: string | null;
  isLink?: boolean;
}

export function InfoItem({ icon, text, isLink }: InfoItemProps) {
  const { theme } = useContext(ThemeContext);
  const currentText = text || 'Not available';
  let currentHref = '';

  if (isLink) {
    currentHref = text && text.startsWith('http') ? text : `https://${text}`;
  }

  return (
    <li
      className={clsx(s.wrapper, {
        [s.wrapperDark]: theme === 'dark',
        [s.wrapperEmpty]: !text,
      })}
    >
      {icon}
      {isLink && text ? (
        <a
          className={clsx(s.link, {
            [s.linkDark]: theme === 'dark',
            [s.linkEmpty]: !text,
          })}
          href={currentHref}
          target='_blank'
          rel='noreferrer'
        >
          {currentText}
        </a>
      ) : (
        <span
          className={clsx(s.text, {
            [s.textDark]: theme === 'dark',
            [s.textEmpty]: !text,
          })}
        >
          {currentText}
        </span>
      )}
    </li>
  );
}

InfoItem.defaultProps = {
  text: null,
  isLink: false,
};
