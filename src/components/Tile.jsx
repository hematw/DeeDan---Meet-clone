import { MdMicNone } from "react-icons/md"

export default function Tile({ participant }) {
    return (
        <div className="h-72 min-w-[330px] basis-[32%] flex items-center justify-between flex-col bg-gray-600  text-white rounded-xl p-3">
            <button className="self-end">
                <MdMicNone /> 
            </button>
            <img
                src={participant.imageUrl}
                alt={`Photo of ${participant.name}`}
                className="w-40 h-40 object-cover rounded-full"
            />
            <p
                className="self-start "
            >
                {participant.name}
            </p>
        </div>
    )
}