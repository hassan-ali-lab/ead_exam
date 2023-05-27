import {useEffect, useState} from "react";

const Timer = () => {
    const [time, setTime] = useState(10)
    const [timeout, setTimeout] = useState(false)

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(time - 1)
        }, 1000) // 1 second
        if (time === 0) {
            setTimeout(true)
            clearInterval(timer)
        }
        return () => {
            clearInterval(timer)
        }
    }, [time])

    return <div>
        <div>{timeout && <h1>Time's Up</h1>}</div>
        <h1>Time Remaining: {time}</h1>
    </div>
}

export default Timer