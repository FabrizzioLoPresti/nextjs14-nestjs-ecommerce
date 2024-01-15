'use client';

import { useTheme } from 'next-themes';
import { Switch } from '@nextui-org/react';
import { SunIcon } from './sun-icon';
import { MoonIcon } from './moon-icon';

type Props = {};

const ChangeThemeButton = (props: Props) => {
  const { theme, setTheme } = useTheme();

  const handleChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Switch
      defaultSelected
      size="lg"
      color="secondary"
      onChange={handleChangeTheme}
      thumbIcon={
        theme === 'light' ? (
          <MoonIcon className="w-6 h-6" />
        ) : (
          <SunIcon className="w-6 h-6" />
        )
      }
    ></Switch>
  );
};

export default ChangeThemeButton;
