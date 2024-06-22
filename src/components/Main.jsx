import { useState } from "react";
import Slider from "./Slider";
import Dropdown from "./Dropdown";
import { Link, useNavigate } from 'react-router-dom';
import { FaKeyboard, FaLink } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { BsCalendarDate } from "react-icons/bs";

export default function Main() {
    const [meetCode, setMeetCode] = useState('');
    const navigate = useNavigate();

    function handeChange(e) {
        setMeetCode(e.target.value)
    }

    return (
        <div className="h-[600px] px-10 flex items-center">
            <div className="w-[50%]">
                <h1 className=" text-5xl font-semibold tracking-3">
                    <span className="text-yellow-400">Video calls</span> and
                    <span className="text-yellow-400"> Meetings</span> for everyone
                </h1>

                <p className="mt-6">Connect, collaborate, and celebrate from anywhere with DiDAAR</p>

                <div className="flex gap-4 mt-12 h-[46px]">
                    <Dropdown>
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

                    </Dropdown>

                    <div className="flex items-center p-2 border-2 border-gray-400 rounded-md">
                        <FaKeyboard className="mx-4" />
                        <input
                            type="text"
                            placeholder="Enter a code or link"
                            className="focus:border-none focus:outline-none"
                            onChange={handeChange}
                            value={meetCode}
                        />
                    </div>
                    <button
                        className="text-yellow-500 disabled:text-gray-400"
                        disabled={meetCode ? false : true}
                        onClick={() => navigate(`./meet/${meetCode}`)}
                    >
                        Join
                    </button>
                </div>
            </div>

            <div className="w-[50%]">
                <Slider />
            </div>
        </div>
    )
}