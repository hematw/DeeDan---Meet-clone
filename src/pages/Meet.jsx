import Tile from "../components/Tile"
import { participantsData } from "../data"

export default function Meet() {

    console.log(participantsData)

    const tiles = participantsData.map((p, index) =>
        <Tile participant={p} key={index} />
    )

    return (
        <div className="min-h-screen flex flex-col p-4 bg-gray-800">
            <div className="grow flex gap-4 items-center justify-center flex-wrap">
                { tiles }
            </div>
            <div>
                I am going so fast
            </div>
        </div>
    )
}