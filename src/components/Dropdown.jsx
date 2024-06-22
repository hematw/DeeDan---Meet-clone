// src/Dropdown.js
import React, { useState } from 'react';
import { AiOutlineVideoCameraAdd } from "react-icons/ai";


export default function Dropdown({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const items = ['Item 1', 'Item 2', 'Item 3'];

    const toggleDropdown = () => {
        setIsOpen(isOpen => !isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="flex items-center bg-yellow-400 px-6 py-3 rounded-md hover:shadow-md transition-all"
                    onClick={toggleDropdown}
                    onBlur={toggleDropdown}
                >
                    <AiOutlineVideoCameraAdd className="mr-2" />
                    New meeting
                </button>
            </div>
            {isOpen && children}
        </div>
    );
};