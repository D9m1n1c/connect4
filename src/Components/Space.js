import { useState } from "react";
import "../App.css";

function Hole() {
  const [playerID, setPlayerID] = useState(0);

  const updateButton = () => {
    setPlayerID(1);
  };

  return (
    <button id="circle" onClick={updateButton}>
      {playerID}
    </button>
  );
}

export default Hole;
