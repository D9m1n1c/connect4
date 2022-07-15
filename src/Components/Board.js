import Hole from "./Space/Space";
import "../App.css";

function Board(props) {
  const y = 6;
  const x = 7;

  const showBoard = [];
  for (let i = 0; i < x; i++) {
    const col = [];

    for (let j = 0; j < y; j++) {
      const row = (
        <div className="holes">
          <Hole key={`hole${i}${j}`} />
        </div>
      );
      col.push(row);
    }
    showBoard.push(
      <div className="grid" key={`grid${i}`}>
        {col}
      </div>
    );
  }
  console.log(showBoard);

  return (
    <div key={`board`} className="board">
      {showBoard}
    </div>
  );
}

export default Board;
/*

    <div id="" className="holes">
      {showBoard}
    </div>


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
