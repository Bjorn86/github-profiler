import { useState, useContext, memo } from 'react';
import clsx from 'clsx';

import Button from 'shared/ui/button/button';
import { ThemeContext } from 'app/contexts';

import s from './search.module.scss';

interface SearchProps {
  isLoading: boolean;
  onSubmit: (text: string) => void;
}

export const Search = memo(({ isLoading, onSubmit }: SearchProps) => {
  const [searchValue, setSearchValue] = useState('');
  const { theme } = useContext(ThemeContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (searchValue.trim()) {
      onSubmit(searchValue);
      setSearchValue('');
    }
  };

  return (
    <section aria-label='Search'>
      <form
        className={s.form}
        id='search-form'
        name='search-form'
        noValidate
        onSubmit={handleSubmit}
        autoComplete='off'
      >
        <input
          className={clsx(s.input, { [s.inputDark]: theme === 'dark' })}
          type='search'
          form='search-form'
          name='search'
          placeholder='Search GitHub username...'
          disabled={isLoading}
          onChange={handleChange}
          value={searchValue}
        />
        <Button
          view='filled'
          isSubmit
          isDisabled={isLoading}
          additionalClass={s.button}
        >
          search
        </Button>
      </form>
    </section>
  );
});
