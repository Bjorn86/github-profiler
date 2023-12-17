import { useContext } from 'react';
import clsx from 'clsx';

import { Header } from 'widgets/header';
import { withProviders } from './providers';
import { ThemeContext } from './contexts';

import s from './app.module.scss';
import './index.scss';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={clsx(s.app, { [s.appDark]: theme === 'dark' })}>
      <Header />
    </div>
  );
}

export default withProviders(App);
