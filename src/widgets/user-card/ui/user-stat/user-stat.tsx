import { useContext, memo } from 'react';
import clsx from 'clsx';

import { User } from 'shared/model/user';
import { ThemeContext } from 'app/contexts';
import Stat from 'shared/ui/stat/stat';

import s from './user-stat.module.scss';

interface UserStatProps
  extends Pick<User, 'repos' | 'followers' | 'following'> {}

function UserStat({ repos, followers, following }: UserStatProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={clsx(s.stat, { [s.statDark]: theme === 'dark' })}>
      <Stat title='Repos' value={repos} />
      <Stat title='Followers' value={followers} />
      <Stat title='Following' value={following} />
    </div>
  );
}

export default memo(UserStat);
