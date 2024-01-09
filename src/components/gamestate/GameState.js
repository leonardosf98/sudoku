import { useEffect, useState } from "react";

export default function GameState() {
  const [state, setState] = useState("playing");

  const play = () => {
    return (
      <button onClick={handleButtonChange} value={play}>
        Play
      </button>
    );
  };
  const [button, setButton] = useState();
  const pause = () => {
    return (
      <button onClick={handleButtonChange} value={pause}>
        Pause
      </button>
    );
  };
  const handleButtonChange = (event) => {
    if (state === "playing") {
      setButton((button) => pause);
    } else {
      setButton((button) => play);
    }
  };

  return (
    <div>
      <button>{button}</button>
      <button>Quit</button>
      <div></div>
    </div>
  );
}
