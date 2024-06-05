import "./Timer.scss";
import { useEffect, useState } from "react";

const Timer = () => {
    const [seconds, setSeconds] = useState(600);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => {
                    if (prevSeconds > 0) {
                        return prevSeconds - 1;
                    } else {
                        alert('FLIP!');
                        setIsActive(false); 
                        return 600; 
                    }
                });
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const handleStartPause = () => {
        setIsActive(!isActive);
    };

    const handleReset = () => {
        setSeconds(600);
        setIsActive(false);
    };

    return (
        <div>
            <h1>Flip Timer</h1>
            <p>{formatTime(seconds)}</p>
            <button onClick={handleStartPause}>
                {isActive ? 'Pause' : 'Start'}
            </button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Timer;