import React, { useState } from "react";

import Clock from "./Clock";

function App() {
  const [showClock, setShowClock] = useState(true);

  return (
    <div>
      <h1>Clock</h1>
      {showClock ? <Clock /> : null}
      <button onClick={() => setShowClock(!showClock)}>Toggle Clock</button>
    </div>
  );
}

export default App;
