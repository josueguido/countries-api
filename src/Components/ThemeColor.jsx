import { useState } from 'react';

function DarkModeButton() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <button
            className={`flex flex-row gap-2 hover:bg-gray-400 rounded-lg py-2 px-3 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}
            onClick={toggleDarkMode}
        >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        
    );
}

export default DarkModeButton;
