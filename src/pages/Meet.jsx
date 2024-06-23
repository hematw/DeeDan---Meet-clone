import { useState } from "react"
import Tile from "../components/Tile"
import { participantsData } from "../data"
import { useParams, useNavigate } from "react-router-dom"
import Dropdown from "../components/Dropdown"
import Clock from "../components/Clock"
import {
    MdMic,
    MdMicOff,
    MdOutlineScreenShare,
    MdOutlineBackHand,
    MdCallEnd,
    MdInfoOutline,
    MdPeopleAlt,
    MdOutlineChat,
    MdOutlineWorkspaces
} from "react-icons/md";
import { PiVideoCameraSlashBold, PiVideoCameraBold } from "react-icons/pi";
import { BsCcSquare, BsEmojiLaughing } from "react-icons/bs";
import { SlOptionsVertical } from "react-icons/sl";


export default function Meet() {
    const [micOn, setMicOn] = useState(false)
    const [cameraOn, setCameraOn] = useState(false)
    const [handsUp, setHandsUp] = useState(false)

    const navigate = useNavigate()

    const { id } = useParams()




    const micClass = micOn ? 'bg-zinc-600 hover:bg-zinc-700' : 'bg-red-600 hover:bg-red-700'
    const handClass = handsUp ? 'bg-yellow-400 hover:bg-yello-500 text-black' : 'bg-zinc-600 hover:bg-zinc-700'
    const cameraClass = cameraOn ? 'bg-zinc-600 hover:bg-zinc-700' : 'bg-red-600 hover:bg-red-700'

    const tiles = participantsData.map((p, index) => {
        if (p.isMe) {
            return <Tile participant={p} key={index} handsUp={handsUp} />
        }
        return <Tile participant={p} key={index} />
    })

    return (
        <div className="min-h-screen flex flex-col p-4 bg-zinc-800 text-white">
            <div className="grow flex gap-4 items-center justify-center flex-wrap">
                {tiles}
            </div>
            <div className="flex items-center justify-between text-center bg-zinc-800">
                <div>
                    <Clock />
                    <span className="px-4 ">{id}</span>
                </div>
                <div className="text-xl">
                    <button
                        onClick={() => setMicOn(prevMic => !prevMic)}
                        className={`${micClass} inline-flex items-center justify-center p-3 rounded-full mx-2`}>
                        {micOn ? <MdMic /> : <MdMicOff />}
                    </button>
                    <button
                        onClick={() => setCameraOn(prevCamera => !prevCamera)}
                        className={`${cameraClass} inline-flex items-center justify-center p-3 rounded-full mx-2`}>
                        {cameraOn ? <PiVideoCameraBold /> : <PiVideoCameraSlashBold />}
                    </button>
                    <button
                        className="inline-flex items-center justify-center p-3 bg-zinc-600 hover:bg-zinc-700 rounded-full mx-2">
                        <BsCcSquare />
                    </button>
                    <Dropdown
                        icon={<BsEmojiLaughing />}
                        className="inline-flex items-center justify-center p-3 bg-zinc-600 hover:bg-zinc-700 rounded-full mx-2 relative"
                    >
                        <div className="absolute bottom-16 left-1/4 -translate-x-1/2 transition-all inline-flex items-center justify-center gap-2 p-1 bg-zinc-600 mx-2 rounded-3xl">
                            <button className="hover:bg-zinc-700 hover:scale-105 transition-all rounded-full p-1">👍</button>
                            <button className="hover:bg-zinc-700 hover:scale-105 transition-all rounded-full p-1">😂</button>
                            <button className="hover:bg-zinc-700 hover:scale-105 transition-all rounded-full p-1">🥲</button>
                            <button className="hover:bg-zinc-700 hover:scale-105 transition-all rounded-full p-1">❤️</button>
                            <button className="hover:bg-zinc-700 hover:scale-105 transition-all rounded-full p-1">👎</button>
                            <button className="hover:bg-zinc-700 hover:scale-105 transition-all rounded-full p-1">👏</button>
                            <button className="hover:bg-zinc-700 hover:scale-105 transition-all rounded-full p-1">🎉</button>
                            <button className="hover:bg-zinc-700 hover:scale-105 transition-all rounded-full p-1">🤔</button>
                        </div>
                    </Dropdown>
                    <button
                        className="inline-flex items-center justify-center p-3 bg-zinc-600 hover:bg-zinc-700 rounded-full mx-2">
                        <MdOutlineScreenShare />
                    </button>
                    <button
                        onClick={() => setHandsUp(prevHands => !prevHands)}
                        className={`${handClass} inline-flex items-center justify-center p-3 rounded-full mx-2`}>
                        <MdOutlineBackHand />
                    </button>
                    <button
                        className="inline-flex items-center justify-center p-3 bg-zinc-600 hover:bg-zinc-700 rounded-full mx-2">
                        <SlOptionsVertical />
                    </button>
                    <button
                        onClick={() => navigate('/')}
                        className="inline-flex items-center justify-center p-3 bg-red-600 hover:bg-red-700 rounded-full mx-2 w-16 text-center">
                        <MdCallEnd />
                    </button>
                </div>

                <div className="text-xl">
                    <button className="inline-flex items-center justify-center p-3 bg-zinc-600 hover:bg-zinc-700 rounded-full mx-2">
                        <MdInfoOutline />
                    </button>
                    <button className="inline-flex items-center justify-center p-3 bg-zinc-600 hover:bg-zinc-700 rounded-full mx-2">
                        <MdPeopleAlt />
                    </button>
                    <button className="inline-flex items-center justify-center p-3 bg-zinc-600 hover:bg-zinc-700 rounded-full mx-2">
                        <MdOutlineChat />
                    </button>
                    <button className="inline-flex items-center justify-center p-3 bg-zinc-600 hover:bg-zinc-700 rounded-full mx-2">
                        <MdOutlineWorkspaces />
                    </button>
                </div>
            </div>
        </div>
    )
}