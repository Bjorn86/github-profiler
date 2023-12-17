import { useEffect, useState, useCallback, useMemo } from 'react';

import { saveDataToLS, loadDataFromLS } from 'shared/lib/utils';
import { ThemeContext } from 'app/contexts';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState('light');

  const changeTheme = useCallback((): void => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    saveDataToLS<string>('theme', newTheme);
  }, [theme]);

  const memoizedValues = useMemo(
    () => ({ theme, changeTheme }),
    [theme, changeTheme],
  );

  useEffect(() => {
    const newTheme = loadDataFromLS<string>('theme');

    if (newTheme) {
      setTheme(newTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={memoizedValues}>
      {children}
    </ThemeContext.Provider>
  );
}
