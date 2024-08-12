import { useState } from "react";

interface TimerProps {
    time: Date;
}

const Timer = ({time}: TimerProps) => {
    const [seconds, setSeconds] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hour, setHour] = useState(0);
    const [day, setDay] = useState(0);
    
    setInterval(()=>{
        const currDate = new Date().getTime();
        const distance = time.getTime() - currDate;
        
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hrs = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        let min = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        let sec = Math.floor(distance % (1000 * 60) / (1000));
        if(day <= 0 && hrs <= 0 && min <= 0 && sec <= 0){
            days = hrs = min = sec = 0
        }
    
        setSeconds(sec);
        setMinute(min);
        setHour(hrs);
        setDay(days)
    }, 1000);

    return ( 
        <div className="flex w-[42%] h-20 border-2 border-orange-500 rounded-lg mx-auto justify-center items-center gap-x-4 mt-8">
            <div>
                <p className="text-2xl">{day}</p>
                <p className="text-sm text-[#707070] text-center">Days</p>
            </div>
            <span className="text-3xl font-semibold">:</span>
            <div>
                <p className="text-2xl">{hour}</p>
                <p className="text-sm text-[#707070] text-center">Hrs</p>
            </div>
            <span className="text-3xl font-semibold">:</span>
            <div>
                <p className="text-2xl">{minute}</p>
                <p className="text-sm text-[#707070] text-center">Min</p>
            </div>
            <span className="text-3xl font-semibold">:</span>
            <div>
                <p className="text-2xl">{seconds}</p>
                <p className="text-sm text-[#707070] text-center">Sec</p>
            </div>
        </div>
     );
}
 
export default Timer;