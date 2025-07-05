'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  // sync with initial DOM
  useEffect(() => {
    setMounted(true);
    const html = document.documentElement;
    setDark(html.classList.contains('dark'));
  }, []);

  const toggle = () => {
    const html = document.documentElement;
    const nowDark = !dark;
    html.classList.toggle('dark', nowDark);
    html.classList.toggle('light', !nowDark); // marks a manual choice
    localStorage.setItem('theme', nowDark ? 'dark' : 'light'); // persist
    setDark(nowDark);
  };

  if (!mounted) return null; // avoids hydration flash

  return (
    <button
      onClick={toggle}
      className="rounded border px-3 py-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {dark ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}
