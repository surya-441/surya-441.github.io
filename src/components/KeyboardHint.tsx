import React from 'react';

const KeyCap = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg border-2 border-gray-400 dark:border-gray-500 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs font-bold shadow-[0_2px_0_0_rgba(0,0,0,0.15)] dark:shadow-[0_2px_0_0_rgba(255,255,255,0.1)]">
    {children}
  </span>
);

const KeyboardHint = () => {
  return (
    <div className="hidden md:flex absolute bottom-5 right-10 flex-col items-center gap-1.5 opacity-50 hover:opacity-80 transition-opacity">
      <KeyCap>↑</KeyCap>
      <div className="flex gap-1.5">
        <KeyCap>←</KeyCap>
        <KeyCap>↓</KeyCap>
        <KeyCap>→</KeyCap>
      </div>
      {/* <span className="text-md text-gray-400 dark:text-gray-500 mt-1">Navigation Keys</span> */}
      <span className="text-md text-gray-400 dark:text-gray-500 mt-1">You can navigate with vim bindings also.</span>
    </div>
  );
};

export default KeyboardHint;
