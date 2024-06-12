import "./Timer.scss";
import { useEffect, useState } from "react";
import flipAlert from "../../assets/voiceclips/flip.mp3";
import maxAlert from "../../assets/voiceclips/sun-exposure-limit.mp3";

const Timer = ({ uv }) => {
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [maxSeconds, setMaxSeconds] = useState(0);
  const [musicPaused, setMusicPaused] = useState(false);

  const savedTone = sessionStorage.getItem("selectedSkinTone");

  const intervalTime = 12 * 60; // 12 minutes in seconds

  useEffect(() => {
    if (uv && savedTone) {
      const maxRecommendedTime = uv.result.safe_exposure_time[savedTone] * 60;
      setSeconds(intervalTime);
      setMaxSeconds(maxRecommendedTime);
      setRemainingTime(maxRecommendedTime);
    }
  }, [uv, savedTone]);

  useEffect(() => {
    let timer;

    if (isActive && seconds > 0) {
      timer = setTimeout(() => {
        setSeconds((prevSeconds) => {
          const newSeconds = prevSeconds - 1;
          const newRemainingTime = remainingTime - 1;

          if (newSeconds === 0) {
            flipSound();
            pauseMusic();
            return intervalTime;
          }

          if (newRemainingTime <= 0) {
            maxSunSound();
            pauseMusic();
            setIsActive(false);
            return 0;
          }

          setRemainingTime(newRemainingTime);
          return newSeconds;
        });
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearTimeout(timer);
    }

    return () => clearTimeout(timer); // Clear timer on component unmount or isActive change
  }, [isActive, seconds, remainingTime]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const formatTimeHours = (timeInSeconds) => {
    const timeHours = Math.floor(timeInSeconds / 3600);
    const timeMinutes = Math.floor((timeInSeconds % 3600) / 60);
    if (timeHours > 0) {
      return `${timeHours}h ${timeMinutes}m`;
    } else {
      return `${timeMinutes}m`;
    }
  };

  const handleStartPause = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setSeconds(intervalTime);
    setRemainingTime(maxSeconds);
  };

  const flipSound = () => {
    const audio = new Audio(flipAlert);
    audio.play();
  };

  const maxSunSound = () => {
    const audio = new Audio(maxAlert);
    audio.play();
  };

  const pauseMusic = () => {
    setMusicPaused(true);
  };

  return (
    <div className="timer">
      <p className="timer__text">
        Total recommended sun exposure time remaining:
      </p>
      <h1 className="timer__time">{formatTimeHours(remainingTime)}</h1>
      <div>
        <h3 className="timer__header">FlipTimer</h3>
        <p> Set yourself up for an even tan and rotate every 12 minutes. </p>
        <div className="timer__clock">
          <h1 className="timer__time">{formatTime(seconds)}</h1>
          <div className="timer__buttons">
            <button className="timer__button" onClick={handleStartPause}>
              {isActive ? "Pause" : "Start"}
            </button>
            <button className="timer__button" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
