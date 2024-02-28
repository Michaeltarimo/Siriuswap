import React from "react";
import { useEffect } from 'react'; // Import useEffect
import useThemeSwitcher from '@/components/hooks/useThemeSwitcher'; // Import the useThemeSwitcher hook

function TopNav(props) {
  const [mode, setMode] = useThemeSwitcher(); // Use the useThemeSwitcher hook to manage theme mode

  // Add useEffect to toggle dark mode when the theme changes
  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return (
    <div className={`flex gap-5 justify-between px-5 py-2.5 mr-4 w-full text-sm rounded-lg bg-light dark:bg-dark`}>
      <div className="flex gap-5 justify-between items-center">
        <div className="self-stretch my-auto text-dark font-bold dark:text-light lg:hidden">Latest synced block:</div>
        <div className="self-stretch mr-5 my-auto text-green-500 font-bold lg:hidden">10322323</div>
        <div className="self-stretch my-auto text-dark font-bold dark:text-light">SNT <b className='xs:hidden'>Price:</b></div>
        <div className="self-stretch mr-5 my-auto text-green-500 font-bold">$0.00</div>
        <div className="self-stretch my-auto text-dark font-bold dark:text-light">MCD <b className='xs:hidden'>Price:</b></div>
        <div className="self-stretch my-auto text-green-500 font-bold">$1.00</div>
      </div>
      <div className="flex gap-3 my-auto text-white whitespace-nowrap">
      <a href="https://scan.siriusnet.io" target="_blank" rel="noopener noreferrer" className="self-stretch my-auto text-dark font-bold dark:text-light xs:hidden hover:text-yellow-500 dark:hover:text-yellow-500">Explorer</a>
      </div>
    </div>
  );
}

export default TopNav;
