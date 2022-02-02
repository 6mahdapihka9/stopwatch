import React from "react";
import {useClock} from "./hook/useClock";
import {ClockDisplay} from "./ClockDisplay";
import {ClockButtons} from "./ClockButtons";
import './ClockStyles.css';

export const Clock = () => {
  const [time, timerOn, onStart, onStop, onReset, onWait] = useClock();

  return (
      <div className="Timers">
        <ClockDisplay time={time}/>
        <ClockButtons
            time={time}
            timerOn={timerOn}
            onStart={onStart}
            onStop={onStop}
            onReset={onReset}
            onWait={onWait}
        />
      </div>
  )
}
