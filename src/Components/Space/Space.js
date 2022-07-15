import { useState } from "react";
import style from "./Space.module.css";

function Hole() {
  const [playerID, setPlayerID] = useState(0);

  return (
    <button className={style.circle} onClick={() => setPlayerID(1)}>
      {playerID}
    </button>
  );
}

export default Hole;
