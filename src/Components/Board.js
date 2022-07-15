import Hole from "./Space";
import "../App.css";

function Board(props) {
  const y = 6;
  const x = 7;

  const showBoard = [];
  for (let i = 0; i < x; i++) {
    const col = [];

    for (let j = 0; j < y; j++) {
      const row = [<Hole />];
      col.push(row);
    }

    showBoard.push(col);
    console.log(showBoard);
  }
  return (
    <div id="" className="holes">
      {showBoard}
    </div>
  );

  // return (
  //   <div>
  //     {board.map((row, idx) => (
  //       <div key={idx}>{row}</div>
  //     ))}
  //   </div>
  // );
}

export default Board;
/*

<div class=board>
  <div class=row>
    <div class=space></div>
    <div class=space>
      <button class=something-to-do></button>
    </div>
  </div>
  <div class=row>
    <div class=space></div>
    <div class=space></div>
  </div>
</div>


<div class=board>
  <div class=col>
    <div class=space></div>
    <div class=space>
      <button class=something-to-do></button>
    </div>
  </div>
  <div class=col>
    <div class=space></div>
    <div class=space></div>
  </div>
</div>

[
  [X, X, X, '', ''] // 0-th col <-
  [X, X, X, '', ''] // 1-th col
  [X, X, X, '', '']
  [X, X, X, '', '']
  [X, X, X, '', '']
  [X, X, X, '', '']
]
*/
