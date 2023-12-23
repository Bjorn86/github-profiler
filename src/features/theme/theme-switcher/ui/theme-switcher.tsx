import { useContext } from 'react';

import Button from 'shared/ui/button/button';
import { ThemeContext } from 'app/contexts';

export function ThemeSwitcher() {
  const { theme, changeTheme } = useContext(ThemeContext);
  const themeText = theme === 'light' ? 'Dark' : 'Light';

  return (
    <Button view='transparent' onClick={changeTheme}>
      {themeText}
    </Button>
  );
}
