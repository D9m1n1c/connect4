import { useState } from "react";
import "../App.css";

function Hole() {
  const [playerID, setPlayerID] = useState(0);

  const DropToken = () => {
    setPlayerID(1);
  };

  return (
    <button id="circle" onClick={DropToken}>
      {playerID}
    </button>
  );
}

export default Hole;
