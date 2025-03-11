"use client"

import { useEffect, useState } from "react";
import { useBatteryStatus } from "react-haiku";
import { Battery, BatteryCharging } from "lucide-react";

export function StatusBar() {

    const { level, isCharging } = useBatteryStatus();
    const [currentTime, setCurrentTime] = useState<string>("");

    function getBatteryColor() {
        if (level <= 20) return "text-red-500"
        if (level <= 50) return "text-yellow-500"
        return "text-green-500"
    }

    function updateTime() {
        const now = new Date()
        const options: Intl.DateTimeFormatOptions = { 
            weekday: "short", 
            day: "2-digit", 
            month: "short", 
            hour: "2-digit", 
            minute: "2-digit", 
            hour12: false 
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
        <div className="flex flex-col justify-start items-start">
            <div className="flex items-center gap-1 text-muted-foreground">
                {isCharging ? (
                    <BatteryCharging size={24} className={`${getBatteryColor()}`} />
                ) : (
                    <Battery size={24} className={`${getBatteryColor()}`} />
                )}
                <span className="text-xs font-medium">
                    {Math.round(level)}%
                </span>
            </div>
            <span className="font-medium text-xs text-muted-foreground">
                {currentTime}
            </span>
        </div>
    )
}