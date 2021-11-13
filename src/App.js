import React from "react";
import './App.css';

function App() {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);
  const [stopDate, setStopDate] = React.useState( null);

  React.useEffect(() => {
    let interval = null;
    if (timerOn)
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    else
      clearInterval(interval);

    return () => clearInterval(interval);
  }, [timerOn]);

  function onStart(){
    setTimerOn(true)
    setStopDate(null)
  }
  function onStop(){
    setTimerOn(false)
    setTime(0)
    setStopDate(null)
  }
  function onReset(){
    setTime(0)
    setTimerOn(true)
    setStopDate(null)
  }
  function onWait(){
    if (stopDate && Math.abs(stopDate - new Date()) < 300) {
        setTimerOn(false)
        setStopDate(null)
    } else
      setStopDate( new Date() )
  }


  return (
      <div className="Timers">
        <h2>Stopwatch</h2>
        <div id="display">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>

        <div id="buttons">
          {!timerOn && (
              <button onClick={onStart}>{(time === 0)? 'Start':'Resume'}</button>
          )}
          {timerOn && (
              <button onClick={onStop}>Stop</button>
          )}
          {(timerOn ||  time > 0) && (
              <button onClick={onReset}>Reset</button>
          )}
          {timerOn && (
              <button onClick={onWait}>Wait</button>
          )}
        </div>
      </div>
  );
}

export default App;
