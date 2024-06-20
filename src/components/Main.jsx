import { useState } from "react";
import Slider from "./Slider";
import { FaKeyboard } from "react-icons/fa";
import Dropdown from "./Dropdown";

export default function Main() {
    const [meetInput, setMeetInput] = useState('');

    function handeChange(e) {
        setMeetInput(e.target.value)
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
                    {/* <button className="flex items-center bg-yellow-400 px-6 py-3 rounded-md hover:shadow-md transition-all">
                        <AiOutlineVideoCameraAdd className="mr-2" />
                        New meeting
                    </button> */}

                    <Dropdown />

                    <div className="flex items-center p-2 border-2 border-gray-400 rounded-md">
                        <FaKeyboard className="mx-4" />
                        <input
                            type="text"
                            placeholder="Enter a code or link"
                            className="focus:border-none focus:outline-none"
                            onChange={handeChange}
                            value={meetInput}
                        />
                    </div>
                    <button
                        className="text-yellow-500 disabled:text-gray-400"
                        disabled={meetInput ? false : true}
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