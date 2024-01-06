import { useEffect, useState } from "react";
import "./App.css";

// images
import GartCodImg from "./assets/gartcod-img.webp";
import Desktop from "./assets/desktop.svg";
import Chrome from "./assets/chrome.svg";
import Mobile from "./assets/mobile.svg";
import ProvokoLogo from "./assets/provoke_logo.webp";
import Counter from "./Counter";
import Button from "./Button";

function App() {
  const [index, setIndex] = useState(0);
  const icons = [
    { name: "chrome-icon", icon: Chrome, width: "5rem" },
    { name: "mobile-icon", icon: Mobile, width: "4rem" },
    { name: "desktop-icon", icon: Desktop, width: "5.5rem" },
  ];
  const colors = ["#FDE047", "#FCA5A5", "#A3A3A3"];

  useEffect(() => {
    const timerId = setInterval(() => {
      let idx = index;
      idx++;
      if (idx == icons.length) {
        setIndex(0);
      } else {
        setIndex(idx);
      }
    }, 2000);

    return () => {
      clearInterval(timerId);
    };
  }, [index]);

  return (
    <main>
      <div
        className="background"
        style={{ background: `radial-gradient(${colors[index]}, transparent)` }}
      ></div>
      <div className="background-grid"></div>
      <div className="content">
        <div className="heading">
          <h1>
            <img src={GartCodImg} alt="" className="gartcod-logo" />
            for
            <span style={{ color: colors[index] }}>
              <span className="icon-span">
                <img
                  src={icons[index].icon}
                  alt=""
                  className={`icon ${icons[index].name}`}
                  style={{ width: icons[index].width }}
                />
              </span>
              & Cloud <br />
              gaming
            </span>
          </h1>
        </div>
        <div className="subheading">
          <p>
            Join us on the launch of gartcod by
            <img src={ProvokoLogo} alt="" width={50} height={50} />
          </p>
        </div>
        <Button color={colors[index]} />
        <Counter color={colors[index]} />
      </div>
    </main>
  );
}

export default App;
