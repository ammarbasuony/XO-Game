import { useState } from "react";

// =================
//  Icons
// =================
import { XIcon, OIcon } from "../constants/icons";

const Square = ({
  current,
  position,
  squares,
  setCurrent,
  setInPosition,
  theWinner,
}) => {
  const [onSquare, setOnSquare] = useState(false);

  const onClickHandler = () => {
    if (!squares[position] && !theWinner) {
      const newSquares = [...squares];

      // Insert new play
      newSquares.splice(position, 1, current);
      setInPosition(newSquares);

      // Change the current player
      if (current === "X") setCurrent("O");
      else setCurrent("X");
    }
  };

  return (
    <div
      className={`bg-slate-200 dark:bg-slate-700 ${
        !squares[position] ? "cursor-pointer" : ""
      } md:w-32 md:h-32 w-20 h-20 lg:p-7 p-4 rounded-md`}
      onMouseEnter={() => setOnSquare(true)}
      onMouseLeave={() => setOnSquare(false)}
      onClick={onClickHandler}
    >
      {(onSquare && current === "X" && !squares[position] && !theWinner) ||
      squares[position] === "X"
        ? XIcon("fill-amber-600", "dark:fill-amber-400")
        : ""}
      {(onSquare && current === "O" && !squares[position] && !theWinner) ||
      squares[position] === "O"
        ? OIcon("fill-cyan-600", "dark:fill-cyan-400")
        : ""}
    </div>
  );
};

export default Square;
