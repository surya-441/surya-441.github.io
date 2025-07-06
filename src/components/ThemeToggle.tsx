'use client';

import MoonIcon from '@/icons/MoonIcon';
import SunIcon from '@/icons/SunIcon';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  console.log('Current theme:', theme);
  return (
    <button
      onClick={toggle}
      className="fixed top-4 right-4 z-50 w-8 h-8 flex items-center justify-center rounded-full bg-[var(--foreground)] text-[var(--background)] shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
