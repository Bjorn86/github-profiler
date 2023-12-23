import { useContext } from 'react';
import clsx from 'clsx';

import { User } from 'shared/model/user';
import { localDate } from 'shared/lib/utils';
import { ThemeContext } from 'app/contexts';

import s from './user-title.module.scss';

interface UserTitleProps
  extends Pick<User, 'name' | 'login' | 'createdAt' | 'pageUrl'> {}

export function UserTitle({ name, login, createdAt, pageUrl }: UserTitleProps) {
  const { theme } = useContext(ThemeContext);
  const joinedDate = localDate.format(new Date(createdAt));

  return (
    <div className={s.wrapper}>
      <h2 className={clsx(s.title, { [s.titleDark]: theme === 'dark' })}>
        {name}
      </h2>
      <p className={clsx(s.date, { [s.dateDark]: theme === 'dark' })}>
        Joined {joinedDate}
      </p>
      <a href={pageUrl} target='_blank' rel='noreferrer' className={s.link}>
        @{login}
      </a>
    </div>
  );
}
