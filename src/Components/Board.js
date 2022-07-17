import Hole from "./Space";
import "../App.css";

function Board(props) {
  const y = 6;
  const x = 7;

  const showBoard = [];
  for (let i = 0; i < x; i++) {
    const col = [];

    const clickColumn = () => {
      console.log(`clicked column${i}`);
    };

    for (let j = 0; j < y; j++) {
      const row = (
        <div className="holes">
          <Hole key={`hole${i}${j}`} />
        </div>
      );
      col.push(row);
    }
    showBoard.push(
      <div className="columns" key={`column${i}`} onClick={clickColumn}>
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

current html
<div class="board">
  <div class="grid">
  <div class="grid">
  <div class="grid">
    <div class="hole">
    <div class="hole">
    <div class="hole">
      <button>

*/
