import React from "react";

export const ClockButtons = ({time, timerOn, onStart, onStop, onReset, onWait}) => {
  return (
      <div id="buttons">
        {!timerOn && (
            <button onClick={onStart}>{(time === 0) ? 'Start' : 'Resume'}</button>
        )}
        {timerOn && (
            <button onClick={onStop}>Stop</button>
        )}
        {(timerOn || time > 0) && (
            <button onClick={onReset}>Reset</button>
        )}
        {timerOn && (
            <button onClick={onWait}>Wait</button>
        )}
      </div>
  )
}
