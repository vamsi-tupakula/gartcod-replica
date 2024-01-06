import React, { useEffect, useState } from "react";
import CounterChild from "./CounterChild";

function Counter({ color }) {
  const [countDown, setCountDown] = useState(null);

  useEffect(() => {
    const eventDate = new Date("January 31 2024 13:00");
    const currentDate = new Date();
    const difference = eventDate - currentDate;

    // conversion from milliseconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    setCountDown({ days, hours, minutes, seconds });
  }, []);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountDown((prev) => {
        const time = { ...prev };
        time.seconds--;
        if (time.seconds < 0) {
          time.seconds = 59;
          time.minutes--;
        }
        if (time.minutes < 0) {
          time.minutes = 59;
          time.hours--;
        }
        if (time.hours < 0) {
          time.hours = 23;
          time.days--;
        }
        return { ...time };
      });
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [countDown]);

  return (
    <div className="counter">
      {countDown ? (
        <>
          <CounterChild value={countDown.days} name={"Days"} color={color} />
          <CounterChild value={countDown.hours} name={"Hours"} color={color} />
          <CounterChild
            value={countDown.minutes}
            name={"Minutes"}
            color={color}
          />
          <CounterChild
            value={countDown.seconds}
            name={"Seconds"}
            color={color}
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Counter;
