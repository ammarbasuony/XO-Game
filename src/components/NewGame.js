// =================
//  Icons
// =================
import { resetIcon } from "../constants/icons";

const NewGame = ({ setSquares, setTheWinner }) => {
  const setNewGame = (e) => {
    e.preventDefault();
    setSquares(new Array(9).fill(""));
    setTheWinner("");
  };

  return (
    <a
      onClick={setNewGame}
      href="/"
      className="font-poppins flex items-center px-4 py-2 ml-3 bg-cyan-700 dark:bg-cyan-600 rounded-2xl"
    >
      {resetIcon("fill-slate-50", "fill-slate-50")}{" "}
      <span className="ml-1 text-slate-50">New</span>
    </a>
  );
};

export default NewGame;
