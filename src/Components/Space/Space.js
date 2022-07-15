import { useState } from "react";
import style from "./Space.module.css";

function Hole() {
  const [playerID, setPlayerID] = useState(0);

  const DropToken = () => {
    setPlayerID(1);
  };

  return (
    <button className={style.circle} onClick={DropToken}>
      {playerID}
    </button>
  );
}

export default Hole;
