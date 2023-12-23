import { useContext } from 'react';
import clsx from 'clsx';

import { User } from 'shared/model/user';
import { ThemeContext } from 'app/contexts';
import { UserTitle } from './user-title/user-title';
import { UserStat } from './user-stat/user-stat';
import { UserInfo } from './user-info/user-info';

import s from './user-card.module.scss';

export function UserCard({
  avatarUrl,
  name,
  login,
  pageUrl,
  createdAt,
  repos,
  followers,
  following,
  bio,
  blog,
  company,
  location,
  twitterUrl,
}: User) {
  const { theme } = useContext(ThemeContext);

  return (
    <article className={clsx(s.card, { [s.cardDark]: theme === 'dark' })}>
      {avatarUrl ? (
        <img className={s.avatar} src={avatarUrl} alt={login} />
      ) : (
        <p className={s.imgPlug}>No images yet</p>
      )}
      <UserTitle
        name={name}
        login={login}
        createdAt={createdAt}
        pageUrl={pageUrl}
      />
      <p className={clsx(s.bio, { [s.bioDark]: theme === 'dark' })}>
        {bio || 'This user has no bio'}
      </p>
      <UserStat repos={repos} followers={followers} following={following} />
      <UserInfo
        blog={blog}
        company={company}
        location={location}
        twitterUrl={twitterUrl}
      />
    </article>
  );
}
