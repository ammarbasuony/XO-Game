import { useEffect, useState } from "react";

// =================
//  Components
// =================
import DarkModeBtn from "./components/DarkModeBtn";
import NewGame from "./components/NewGame";
import Palette from "./components/Palette";

const Main = () => {
  const [squares, setSquares] = useState(new Array(9).fill(""));
  const [theWinner, setTheWinner] = useState("");

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode");
    if (isDarkMode === "true") document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="bg-slate-300 min-h-screen flex justify-center items-center dark:bg-slate-800">
      <div>
        <div className="flex justify-between items-center md:flex-row lg:flex-row flex-col">
          <h3 className="font-poppins font-bold text-slate-800 text-2xl dark:text-slate-50 lg:m-0 md:m-0 mb-3">
            XO Game
          </h3>
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
        />
      </div>
    </div>
  );
};

export default Main;
