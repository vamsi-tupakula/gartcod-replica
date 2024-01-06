import React, { useEffect, useRef } from "react";
import Designer from "./assets/designer.svg";

function Button({ color }) {
  const btnRef = useRef();
  const cursorRef = useRef();

  useEffect(() => {
    const timeouts = [];
    const time1 = setTimeout(() => {
      cursorRef.current.style.cssText = `transform: translate(65px, 45px)`;
      const time2 = setTimeout(() => {
        cursorRef.current.style.cssText = `transform: translate(65px, 215px)`;
        const time3 = setTimeout(() => {
          cursorRef.current.style.cssText = `transform: translate(100vw, -100vh)`;
        }, 2000);
        timeouts.push(time3);
      }, 1500);
      timeouts.push(time2);
    }, 1000);
    timeouts.push(time1);
    const time4 = setTimeout(() => {
      btnRef.current.style.cssText = `transform: translateY(165px)`;
    }, 2500);
    timeouts.push(time4);

    return () => {
      timeouts.map((timeout) => {
        clearTimeout(timeout);
      });
    };
  }, []);
  return (
    <>
      <img
        src={Designer}
        alt=""
        className="designer-cursor"
        ref={cursorRef}
        width={80}
        height={50}
      />
      <button className="claim-btn" style={{ background: color }} ref={btnRef}>
        Claim Ticket
      </button>
    </>
  );
}

export default Button;
