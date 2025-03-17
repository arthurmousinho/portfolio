"use client"

import { useEffect, useState } from "react"

export function StatusBar() {
    
    const [currentTime, setCurrentTime] = useState<string>("")

    function updateTime() {
        const now = new Date()
        const options: Intl.DateTimeFormatOptions = {
            weekday: "short",
            day: "2-digit",
            month: "short",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        }
        const formattedTime = now.toLocaleString("en-GB", options).replace(",", "")
        setCurrentTime(formattedTime)
    }

    useEffect(() => {
        updateTime()
        const interval = setInterval(updateTime, 60000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex sm:flex-col flex-row justify-start sm:items-start items-center gap-2">
            <div className="flex items-center gap-2 text-muted-foreground">
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-xs font-medium">Open to work</span>
            </div>
            <span className="font-medium text-xs text-muted-foreground">{currentTime}</span>
        </div>
    )
}