import { MdMicOff, MdPushPin } from "react-icons/md"
import { SlOptionsVertical } from "react-icons/sl"

export default function Tile({ participant, handsUp }) {
    return (
        <div className="group hover:outline outline-2 outline-yellow-400  h-[40vh] min-w-[330px] basis-[32%] flex items-center justify-between flex-col bg-zinc-600  text-white rounded-xl p-3 relative">
            <button className="self-end rounded-full bg-zinc-700 p-1">
                <MdMicOff />
            </button>
            <img
                src={participant.imageUrl}
                alt={`Photo of ${participant.name}`}
                className="w-40 h-40 object-cover rounded-full"
            />
            <p
                className={`transition-all self-start px-3 rounded-2xl ${handsUp && 'bg-yellow-400 text-black'}`}
            >
                {participant.name}
            </p>
            <div
                className="transition-all opacity-0 tile-menu bg-zinc-700 absolute top-1/2 left-1/2
             -translate-x-1/2 -translate-y-1/2 p-2 rounded-2xl group-hover:opacity-70 flex items-center gap-4 text-lg">
                <button><MdPushPin /></button>
                <button><MdMicOff /></button>
                <button><SlOptionsVertical /></button>
            </div>
        </div>
    )
}