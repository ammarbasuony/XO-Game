import { useEffect } from "react";

// =================
//  Components
// =================
import DarkModeBtn from "./components/DarkModeBtn";
import Palette from "./components/Palette";

const Main = () => {
  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode");
    if (isDarkMode === "true")
      document.documentElement.classList.toggle("dark");
  }, []);
  return (
    <div className="bg-slate-300 min-h-screen flex justify-center items-center dark:bg-slate-800">
      <div className="w-1/3">
        <div className="flex justify-between items-center">
          <h3 className="font-poppins font-bold text-slate-800 text-2xl dark:text-slate-50">
            XO Game
          </h3>
          <DarkModeBtn />
        </div>
        <Palette />
      </div>
    </div>
  );
};

export default Main;
