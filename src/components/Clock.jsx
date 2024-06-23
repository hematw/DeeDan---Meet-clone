import { useEffect, useState } from "react";

export default function Clock() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000);
        return () => clearInterval(intervalId)
    }, [])

    return (
        <span className="px-4 border-r-2 border-zinc-500">
            {time.toLocaleTimeString()}
        </span>
    )
}