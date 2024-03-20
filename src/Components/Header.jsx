import Moon from "../assets/moon.svg";
import { useState, useEffect } from "react";


function Header() {

  const [theme, setTheme] = useState(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
  });

  useEffect(() => {
    document.querySelector('html').classList.toggle('dark', theme === "dark");
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  
  return (
    <>
      <header className="flex py-4 px-20 dark:text-white dark:bg-darkBlue dark:hover-bg-slate-900">
        <nav className="flex justify-between items-center w-full">
          <p className="text-pretty text-lg font-bold">Where is the World?</p>
          <button className="flex flex-row gap-2 hover:bg-gray-400 rounded-lg py-2 px-3"
            onClick={handleChangeTheme}
          >
            <img className="w-6 h-6" src={Moon} />
            <p className=" font-bold">Dark Mode</p>

          </button>
        </nav>
      </header>
    </>
  );
}

export default Header;
