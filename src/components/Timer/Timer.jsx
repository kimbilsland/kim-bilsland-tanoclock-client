import "./Timer.scss";
import { useEffect, useState } from "react";
import flipAlert from "../../assets/voiceclips/flip.mp3";
import maxAlert from "../../assets/voiceclips/sun-exposure-limit.mp3";
import data from "../../data/fake-uv.json";

const Timer = () => {
  // const Timer = ({uv}) => {  for REAL API
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(0); //set base
  const [remainingTime, setRemainingTime] = useState(0); //set base
  const [maxSeconds, setMaxSeconds] = useState(0); //set base
  const [musicPaused, setMusicPaused] = useState(false);

  const savedTone = sessionStorage.getItem("selectedSkinTone");

  useEffect(() => {
    // if (uv) {
    //   const maxRecommendedTime = uv.result.safe_exposure_time.st3 * 60; // for REAL API
    if (data) {
      const maxRecommendedTime = data.result.safe_exposure_time[savedTone] * 60;
      console.log(maxRecommendedTime);
      const intervalTime = 12 * 60;
      setSeconds(intervalTime);
      setMaxSeconds(maxRecommendedTime);
      setRemainingTime(maxRecommendedTime);
    }
  }, []);

  useEffect(() => {
    let timer;

    if (isActive && seconds > 0) {
      timer = setTimeout(() => {
        setSeconds((prevSeconds) => {
          const newSeconds = prevSeconds - 1;
          const newRemainingTime = remainingTime - 1; //if there is time then the timer will -1second. remaining time is set as max recommended time.

          if (newSeconds === 0) {
            alert("FLIP!");
            flipSound();
            pauseMusic();
            setSeconds(intervalTime); //once the timer is at 0 it will cause the flip alert
          }

          if (newRemainingTime <= 0) {
            //once the remaining time is less than 0 alert that max daily time is up
            alert("Max sun exposure is up!");
            maxSunSound();
            pauseMusic();
            setIsActive(false);
            return 0;
          }

          setRemainingTime(newRemainingTime);
          return newSeconds; // update and return new remaining time
        });
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearTimeout(timer);
    }

    return () => clearTimeout(timer); //clears out the timer so it restarts
  }, [isActive, seconds, remainingTime]);

  const intervalTime = 12 * 60;

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
      <div className="timer__clock">
        <h1 className="timer__time">{formatTime(seconds)}</h1>
        <div className="timer__buttons">
          <button className="timer__button" onClick={handleStartPause}>
            {isActive ? "Pause" : "Start"}
          </button>
          <button className="timer__button" onClick={handleReset}>Reset</button>
        </div>
      </div >
    </div>


</div>
    
  );
};

export default Timer;
