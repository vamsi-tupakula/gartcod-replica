import React from "react";

function CounterChild({ value, name, color }) {
  const arr = [];
  for (let i = 0; i < 60; i++) {
    arr.push(i);
  }
  return (
    <div className="child">
      {arr.map((item) => {
        return (
          <div
            key={item}
            className={`item-${item} counter-item ${
              value === item
                ? "opacity-1 transform-0"
                : "opacity-0 transform-y-2"
            }`}
          >
            {item}
          </div>
        );
      })}
      <div className="value" style={{ color: color }}>
        {name}
      </div>
    </div>
  );
}

export default CounterChild;
