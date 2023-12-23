import { useContext, memo } from 'react';
import clsx from 'clsx';

import { ThemeContext } from 'app/contexts';

import s from './button.module.scss';

interface ButtonProps {
  children: string;
  view: 'transparent' | 'filled';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isSubmit?: boolean;
  isDisabled?: boolean;
  additionalClass?: string;
}

function Button({
  children,
  view,
  onClick,
  isSubmit,
  isDisabled,
  additionalClass,
}: ButtonProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      className={clsx(s.button, additionalClass, {
        [s.filled]: view === 'filled',
        [s.transparent]: view === 'transparent',
        [s.transparentDark]: view === 'transparent' && theme === 'dark',
        [s.disabled]: isDisabled,
      })}
      type={isSubmit ? 'submit' : 'button'}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default memo(Button);

Button.defaultProps = {
  onClick: () => {},
  isSubmit: false,
  isDisabled: false,
  additionalClass: null,
};
