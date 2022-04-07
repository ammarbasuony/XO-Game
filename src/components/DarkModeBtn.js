// =================
//  Icons
// =================
import { darkModeIcon } from "../constants/icons";

const DarkModeBtn = () => {
  const toggleDarkMode = (e) => {
    e.preventDefault();
    const isDarkMode = localStorage.getItem("darkMode");

    if (isDarkMode === "") {
      localStorage.setItem("darkMode", "true");
    } else {
      localStorage.setItem("darkMode", "");
    }

    document.documentElement.classList.toggle("dark");
  };

  return (
    <a
      onClick={toggleDarkMode}
      href="/"
      className="font-poppins flex items-center px-4 py-2 ml-3 bg-slate-400 dark:bg-slate-900 rounded-2xl"
    >
      {darkModeIcon("fill-slate-50", "fill-slate-50")}{" "}
      <span className="ml-1 text-slate-50">Dark</span>
    </a>
  );
};

export default DarkModeBtn;
