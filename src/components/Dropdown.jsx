// src/Dropdown.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { FaLink } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { BsCalendarDate } from "react-icons/bs";


const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const items = ['Item 1', 'Item 2', 'Item 3'];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="flex items-center bg-yellow-400 px-6 py-3 rounded-md hover:shadow-md transition-all"
                    onClick={toggleDropdown}
                >
                    <AiOutlineVideoCameraAdd className="mr-2" />
                    New meeting
                </button>
            </div>
            {isOpen && (
                <div className="origin-top-right absolute left-0 top-0 bg-white mt-2 w-72 rounded-md shadow-xl shadow-gray-500">
                    <ul className="py-1">
                        <li>
                            <Link to='' className='flex items-center gap-4 p-3 hover:bg-gray-200 transition-all'>
                                <FaLink />
                                Create meeting for later
                            </Link>
                        </li>
                        <li>
                            <Link to='meet/your_meeting' className='flex items-center gap-4 p-3 hover:bg-gray-200 transition-all'>
                                <IoMdAdd />
                                Start an instant meeting
                            </Link>
                        </li>
                        <li>
                            <a 
                            href='https://calendar.google.com/calendar/u/0/r/eventedit?vcon=meet&dates=now&hl=en&pli=1' 
                            className='flex items-center gap-4 p-3 hover:bg-gray-200 transition-all' 
                            target='_blank'
                            >
                                <BsCalendarDate />
                                Schedule in Google Calender
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
