import {useState, useEffect} from "react";
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

export function useClock() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [stopDate, setStopDate] = useState(null);

  useEffect(() => {

    const unsubscribe = new Subject();
    interval(10)
        .pipe(takeUntil(unsubscribe))
        .subscribe(() => {
          if (timerOn) {
            setTime(val => val + 10);
          }
        });
    return () => {
      unsubscribe.next();
      unsubscribe.complete();
    };
  }, [timerOn]);


  function onStart() {
    setTimerOn(true)
    setStopDate(null)
  }
  function onStop() {
    setTimerOn(false)
    setTime(0)
    setStopDate(null)
  }
  function onReset() {
    setTime( 0)
    setTimerOn( true)
    setStopDate( null)
  }
  function onWait() {
    if (stopDate && Math.abs(stopDate - new Date()) < 300) {
      setTimerOn(false)
      setStopDate(null)
    } else
      setStopDate(new Date())
  }

  return [
    time,
    timerOn,
    onStart,
    onStop,
    onReset,
    onWait
  ]
}
