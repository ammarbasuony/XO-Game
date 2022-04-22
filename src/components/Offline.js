// =================
//  Components
// =================
import DarkModeBtn from "./DarkModeBtn";
import NewGame from "./NewGame";
import Palette from "./Palette";

const Offline = ({
  setSquares,
  setTheWinner,
  setStatus,
  squares,
  theWinner,
  current,
  setCurrent,
}) => {
  const reset = () => {
    setStatus("");
    setSquares(new Array(9).fill(""));
    setTheWinner("");
  };

  return (
    <div className="offline-game">
      <button
        onClick={reset}
        className="mb-6 font-poppins text-slate-800 dark:text-slate-50"
      >
        &larr; Go Back
      </button>
      <div className="flex justify-between items-center md:flex-row lg:flex-row flex-col">
        <div className="flex">
          <NewGame setTheWinner={setTheWinner} setSquares={setSquares} />
          <DarkModeBtn />
        </div>
      </div>
      <Palette
        squares={squares}
        setSquares={setSquares}
        theWinner={theWinner}
        setTheWinner={setTheWinner}
        current={current}
        setCurrent={setCurrent}
      />
    </div>
  );
};

export default Offline;
