import { useEffect, useState } from "react";

// =================
//  Components
// =================
import Square from "./Square";

const Palette = ({
  squares,
  setSquares,
  theWinner,
  setTheWinner,
  current,
  setCurrent,
  socket,
  roomId,
  online,
  firstPlay,
  setFirstPlay
}) => {
  const checkTheWinner = () => {
    if (theWinner === "") {
      // Check Columns
      for (let columns = 0; columns <= 2; columns++) {
        let winner = [];
        for (
          let column = columns;
          column < squares.length;
          column = column + 3
        ) {
          if (squares[column] !== "") {
            winner.push(squares[column]);
          }
        }

        if (winner.length === 3 && winner.every((squ) => squ === winner[0])) {
          console.log(winner[0] + " is the winner");
          setTheWinner(winner[0]);
          break;
        }
      }

      // Check Rows
      for (let rows = 0; rows <= 6; rows = rows + 3) {
        let winner = [];
        for (let row = rows; row < rows + 3; row++) {
          if (squares[row] !== "") {
            winner.push(squares[row]);
          }
        }

        if (winner.length === 3 && winner.every((squ) => squ === winner[0])) {
          console.log(winner[0] + " is the winner");
          setTheWinner(winner[0]);
          break;
        }
      }

      // Check Diagonal One [Left]
      let diagonalOne = [];
      for (let dil = 0; dil < squares.length; dil = dil + 4) {
        if (squares[dil] !== "") {
          diagonalOne.push(squares[dil]);
        }
      }

      if (
        diagonalOne.length === 3 &&
        diagonalOne.every((squ) => squ === diagonalOne[0])
      ) {
        console.log(diagonalOne[0] + " is the winner");
        setTheWinner(diagonalOne[0]);
      }

      // Check Diagonal One [Right]
      let diagonalTwo = [];
      for (let dir = 2; dir <= 6; dir = dir + 2) {
        if (squares[dir] !== "") {
          diagonalTwo.push(squares[dir]);
        }
      }

      if (
        diagonalTwo.length === 3 &&
        diagonalTwo.every((squ) => squ === diagonalTwo[0])
      ) {
        console.log(diagonalTwo[0] + " is the winner");
        setTheWinner(diagonalTwo[0]);
      }
    }
  };

  useEffect(() => {
    if (!squares.every((squ) => squ === "")) {
      checkTheWinner();
    }
  }, [squares]);

  useEffect(() => {
    if (online) {
      socket.on("current_state", (data) => {
        setSquares(data.palette);
        setCurrent(data.current);

        if (data.firstPlay === "") {
          setFirstPlay("");
        }
      });
    }
  }, [socket]);

  return (
    <div className="mt-5">
      <div className="flex gap-2 mb-3">
        <Square
          current={current}
          position={0}
          squares={squares}
          setCurrent={setCurrent}
          setInPosition={setSquares}
          theWinner={theWinner}
          online={online}
          socket={socket}
          roomId={roomId}
          firstPlay={firstPlay}
          setFirstPlay={setFirstPlay}
        />
        <Square
          current={current}
          position={1}
          squares={squares}
          setCurrent={setCurrent}
          setInPosition={setSquares}
          theWinner={theWinner}
          online={online}
          socket={socket}
          roomId={roomId}
          firstPlay={firstPlay}
          setFirstPlay={setFirstPlay}
        />
        <Square
          current={current}
          position={2}
          squares={squares}
          setCurrent={setCurrent}
          setInPosition={setSquares}
          theWinner={theWinner}
          online={online}
          socket={socket}
          roomId={roomId}
          firstPlay={firstPlay}
          setFirstPlay={setFirstPlay}
        />
      </div>
      <div className="flex gap-2 mb-3">
        <Square
          current={current}
          position={3}
          squares={squares}
          setCurrent={setCurrent}
          setInPosition={setSquares}
          theWinner={theWinner}
          online={online}
          socket={socket}
          roomId={roomId}
          firstPlay={firstPlay}
          setFirstPlay={setFirstPlay}
        />
        <Square
          current={current}
          position={4}
          squares={squares}
          setCurrent={setCurrent}
          setInPosition={setSquares}
          theWinner={theWinner}
          online={online}
          socket={socket}
          roomId={roomId}
          firstPlay={firstPlay}
          setFirstPlay={setFirstPlay}
        />
        <Square
          current={current}
          position={5}
          squares={squares}
          setCurrent={setCurrent}
          setInPosition={setSquares}
          theWinner={theWinner}
          online={online}
          socket={socket}
          roomId={roomId}
          firstPlay={firstPlay}
          setFirstPlay={setFirstPlay}
        />
      </div>
      <div className="flex gap-2">
        <Square
          current={current}
          position={6}
          squares={squares}
          setCurrent={setCurrent}
          setInPosition={setSquares}
          theWinner={theWinner}
          online={online}
          socket={socket}
          roomId={roomId}
          firstPlay={firstPlay}
          setFirstPlay={setFirstPlay}
        />
        <Square
          current={current}
          position={7}
          squares={squares}
          setCurrent={setCurrent}
          setInPosition={setSquares}
          theWinner={theWinner}
          online={online}
          socket={socket}
          roomId={roomId}
          firstPlay={firstPlay}
          setFirstPlay={setFirstPlay}
        />
        <Square
          current={current}
          position={8}
          squares={squares}
          setCurrent={setCurrent}
          setInPosition={setSquares}
          theWinner={theWinner}
          online={online}
          socket={socket}
          roomId={roomId}
          firstPlay={firstPlay}
          setFirstPlay={setFirstPlay}
        />
      </div>
      {theWinner && (
        <div className="mt-4">
          <div className="text-slate-700 dark:text-slate-100 font-poppins font-bold text-center">
            <span
              className={`text-xl mr-1 ${
                theWinner === "X"
                  ? "text-amber-600 dark:text-amber-400"
                  : "text-cyan-600 dark:text-cyan-400"
              }`}
            >
              {theWinner}
            </span>{" "}
            is the winner
          </div>
        </div>
      )}
    </div>
  );
};

export default Palette;
