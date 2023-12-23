import { useContext, useEffect, useState, useCallback } from 'react';
import clsx from 'clsx';

import { User, GithubUser, GithubError } from 'shared/model/user';
import { API_URL } from 'shared/lib/constants';
import { UserCard } from 'widgets/user-card';
import { Search } from 'features/search';
import { Header } from 'widgets/header';
import {
  isGithubUser,
  extractUser,
  saveDataToLS,
  loadDataFromLS,
} from 'shared/lib/utils';
import { withProviders } from './providers';
import { ThemeContext } from './contexts';

import s from './app.module.scss';
import './index.scss';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userWasFound, setUserWasFound] = useState(true);
  const { theme } = useContext(ThemeContext);

  const getUser = useCallback(async (userName: string) => {
    setIsLoading(true);
    const url = `${API_URL}${userName}`;
    const res = await fetch(url);
    const data = (await res.json()) as GithubUser | GithubError;

    if (isGithubUser(data)) {
      setUser(extractUser(data));
      setUserWasFound(true);
      saveDataToLS<GithubUser>('user', data);
      setIsLoading(false);
    } else {
      setUser(null);
      setUserWasFound(false);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const currentUser = loadDataFromLS<GithubUser>('user');

    if (currentUser) {
      setUser(extractUser(currentUser));
    }
  }, []);

  return (
    <div className={clsx(s.app, { [s.appDark]: theme === 'dark' })}>
      <Header />
      <main className={s.main}>
        <Search isLoading={isLoading} onSubmit={getUser} />
        {user && <UserCard {...user} />}
        {!userWasFound && (
          <p
            className={clsx(s.notFound, { [s.notFoundDark]: theme === 'dark' })}
          >
            User not found
          </p>
        )}
      </main>
    </div>
  );
}

export default withProviders(App);
