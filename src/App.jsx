import { useState } from "react";
import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="GOOD LUCK!" />
      </div>
    </>
  );
}

export default App;
