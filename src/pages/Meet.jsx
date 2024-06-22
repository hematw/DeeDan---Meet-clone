import { useEffect, useState } from "react"
import Tile from "../components/Tile"
import { participantsData } from "../data"
import { useParams } from "react-router-dom"
import {
    MdMicOff,
    MdOutlineScreenShare,
    MdOutlineBackHand,
    MdCallEnd,
    MdInfoOutline,
    MdPeopleAlt,
    MdOutlineChat,
    MdOutlineWorkspaces
} from "react-icons/md";
import { PiVideoCameraSlashBold } from "react-icons/pi";
import { BsCcSquare, BsEmojiLaughing } from "react-icons/bs";
import { SlOptionsVertical } from "react-icons/sl";


export default function Meet() {
    const [time, setTime] = useState(
        new Date().toLocaleTimeString(navigator.language,
            { hour: '2-digit', minute: '2-digit' }
        )
    )
    const [micOn, setMicOn] = useState(false)
    const [cameraOn, setCameraOn] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        const intervalId = setInterval(() => {
            const d = new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })
            setTime(d)
        }, 60 * 1000);

        return clearInterval(intervalId)
    }, [time])

    const micClass = micOn ? 'bg-zinc-600 hover:bg-zinc-700' : 'bg-red-600 hover:bg-red-700'
    const cameraClass = micOn ? 'bg-zinc-600 hover:bg-zinc-700' : 'bg-red-600 hover:bg-red-700'

    const tiles = participantsData.map((p, index) =>
        <Tile participant={p} key={index} />
    )

    return (
        <div className="min-h-screen flex flex-col p-4 bg-zinc-800 text-white">
            <div className="grow flex gap-4 items-center justify-center flex-wrap">
                {tiles}
            </div>
            <div className="flex items-center justify-between text-center">
                <div>
                    <span className="px-4 border-r-2 border-zinc-500">{time}</span>
                    <span className="px-4 ">{id}</span>
                </div>

                <div className="text-xl">
                    <button
                        className={`${micClass} inline-flex items-center justify-center p-3 bg-zinc-600 hover:bg-zinc-700 rounded-full mx-2`}>
                        <MdMicOff />
                    </button>
                    <button
                        className={`${cameraClass} inline-flex items-center justify-center p-3 bg-zinc-600 hover:bg-zinc-700 rounded-full mx-2`}>
                        <PiVideoCameraSlashBold />
                    </button>
                    <button
                        className="inline-flex items-center justify-center p-3 bg-zinc-600 hover:bg-zinc-700 rounded-full mx-2">
                        <BsCcSquare />
                    </button>
                    <button
                        className="inline-flex items-center justify-center p-3 bg-zinc-600 hover:bg-zinc-700 rounded-full mx-2">
                        <BsEmojiLaughing />
                    </button>
                    <button
                        className="inline-flex items-center justify-center p-3 bg-zinc-600 hover:bg-zinc-700 rounded-full mx-2">
                        <MdOutlineScreenShare />
                    </button>
                    <button
                        className="inline-flex items-center justify-center p-3 bg-zinc-600 hover:bg-zinc-700 rounded-full mx-2">
                        <MdOutlineBackHand />
                    </button>
                    <button
                        className="inline-flex items-center justify-center p-3 bg-zinc-600 hover:bg-zinc-700 rounded-full mx-2">
                        <SlOptionsVertical />
                    </button>
                    <button
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