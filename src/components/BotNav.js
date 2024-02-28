import React, { useState } from "react";
import useThemeSwitcher from '@/components/hooks/useThemeSwitcher'; // Import the useThemeSwitcher hook

function BotNav(props) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedOption, setSelectedOption] = useState("Siriusnet");

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div rel="noopener noreferrer" className="flex gap-5 justify-between items-start px-4 py-4 mr-4 w-full whitespace-nowrap shadow-sm bg-light dark:bg-dark lg-rounded text-sm max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
            <div className="flex gap-5 justify-between mt-1 text-base text-light dark:text-dark">
                
            <div className="my-auto text-yellow-500 font-bold">Overview</div>
            </div>
            <div className="flex gap-5 justify-between text-base">
            <a href="https://scan.siriusnet.io" target="_blank" rel="noopener noreferrer" className="self-stretch my-auto text-dark font-bold dark:text-light xs:hidden hover:text-yellow-500 dark:hover:text-yellow-500">Pools</a>
            <a href="https://scan.siriusnet.io" target="_blank" rel="noopener noreferrer" className="self-stretch my-auto text-dark font-bold dark:text-light xs:hidden hover:text-yellow-500 dark:hover:text-yellow-500">Tokens</a>
            </div>
            <div className="flex gap-2 justify-between items-center self-stretch max-md:flex-wrap max-md:max-w-full xs:hidden">
                <div className="flex gap-2 self-stretch py-1.5 pr-2 pl-9 my-auto text-sm text-light font-bold dark:text-dark rounded-xl bg-gray-800 dark:bg-light max-md:pl-5 hover:text-dark hover:bg-yellow-500 dark:hover:bg-yellow-500">
                    <div className="my-auto relative">
                        <div onClick={toggleDropdown} className="cursor-pointer">
                            {selectedOption} <span className={`caret ${isOpen ? 'caret-up' : 'caret-down'} ml-3 mr-5`}>&#9660;</span>
                        </div>
                        {isOpen && (
                            <div className="absolute top-full left-0 z-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md mt-1 shadow-md">
                                <div onClick={() => handleOptionClick("Ethereum")} className="p-2 text-dark font-bold dark:text-light cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900">Ethereum</div>
                                <div onClick={() => handleOptionClick("Binance Smart Chain")} className="p-2 text-dark font-bold dark:text-light cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900">Binance Smart Chain</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BotNav;
