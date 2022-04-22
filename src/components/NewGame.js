// =================
//  Icons
// =================
import { resetIcon } from "../constants/icons";

const NewGame = ({ setSquares, setTheWinner, socket, roomId }) => {
  const setNewGame = (e) => {
    e.preventDefault();
    setSquares(new Array(9).fill(""));
    setTheWinner("");

    socket.emit("new_game", {
      palette: new Array(9).fill(""),
      current: "X",
      roomId,
    });
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
