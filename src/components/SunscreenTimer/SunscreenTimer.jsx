import "./SunscreenTimer.scss";
import { useEffect, useState } from "react";
import reapplyAlert from "../../assets/voiceclips/reapply-sunscreen.mp3";

const SunscreenTimer = () => {
  const [seconds, setSeconds] = useState(7200);
  const [isActive, setIsActive] = useState(false);
  const [musicPaused, setMusicPaused] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          } else {
            reapplySound();
            pauseMusic();
            setIsActive(false);
            return 7200;
          }
        });
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const formatTimeHours = (timeInSeconds) => {
    const timeHours = Math.floor(timeInSeconds / 3600);
    const timeMinutes = Math.floor((timeInSeconds % 3600) / 60);
    return `${timeHours}h ${timeMinutes}m`;
  };

  const handleStartPause = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setSeconds(7200);
    setIsActive(false);
  };

  const reapplySound = () => {
    const audio = new Audio(reapplyAlert);
    audio.play();
  };

  const pauseMusic = () => {
    setMusicPaused(true);
  };

  return (
    <div className="sunscreen-timer">
      <h3 className="sunscreen-timer__header">Sunscreen Clock</h3>
      <div className="sunscreen-timer__clock">
        <h1 className="sunscreen-timer__time">{formatTimeHours(seconds)}</h1>
        <div className="sunscreen-timer__buttons">
          <button
            className="sunscreen-timer__button"
            onClick={handleStartPause}
          >
            {isActive ? "Pause" : "Start"}
          </button>
          <button className="sunscreen-timer__button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default SunscreenTimer;
