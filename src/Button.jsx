import React, { useEffect, useRef } from "react";
import Designer from "./assets/designer.svg";

function Button({ color }) {
  const btnRef = useRef();
  const cursorRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      cursorRef.current.style.cssText = `transform: translate(65px, 45px)`;
    }, 1000);
    setTimeout(() => {
      cursorRef.current.style.cssText = `transform: translate(65px, 215px)`;
      btnRef.current.style.cssText = `transform: translateY(165px)`;
    }, 3000);
    setTimeout(() => {
      cursorRef.current.style.cssText = `transform: translate(100vw, -100vh)`;
    }, 5000);
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
