import { useContext } from 'react';
import clsx from 'clsx';

import { UserCard } from 'widgets/user-card';
import { Search } from 'features/search';
import { Header } from 'widgets/header';
import { withProviders } from './providers';
import { ThemeContext } from './contexts';
// TEMP
import { defaultUser } from '../mock';

import s from './app.module.scss';
import './index.scss';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={clsx(s.app, { [s.appDark]: theme === 'dark' })}>
      <Header />
      <main className={s.main}>
        <Search isLoading={false} onSubmit={() => {}} />
        <UserCard {...defaultUser} />
      </main>
    </div>
  );
}

export default withProviders(App);
