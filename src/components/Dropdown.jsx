// src/Dropdown.js
import React, { useState } from 'react';


export default function Dropdown({ children, text, icon, className }) {
    const [isOpen, setIsOpen] = useState(false);
    const items = ['Item 1', 'Item 2', 'Item 3'];

    const toggleDropdown = () => {
        setIsOpen(isOpen => !isOpen);
    };

    return (
        <div
            className="relative inline-block text-left"
        >
            <div>
                <button
                    type="button"
                    className={className}
                    onClick={toggleDropdown}
                >
                    <span>{icon}</span>
                    {text}
                </button>
            </div>
            {isOpen && children}
        </div>
    );
};