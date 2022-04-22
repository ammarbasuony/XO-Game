import { useState } from "react";

const HomePage = ({ setStatus, setCurrent, sessionEnded, setSessionEnded }) => {
  return (
    <div>
      <h3 className="font-poppins lg:leading-none leading-loose text-center font-bold text-3xl text-slate-800 dark:text-slate-50">
        Welcome To Ammar Yaser{" "}
        <span className="bg-cyan-700 dark:bg-cyan-600 font-normal p-2 ml-2 rounded-lg text-slate-50">
          XO Game
        </span>
      </h3>

      <div className="flex flex-col mt-14 justify-center gap-5 px-20">
        {sessionEnded && (
          <div className="text-center font-poppins text-yellow-500">
            Session Ended
          </div>
        )}
        <button
          className="bg-slate-400 transition-all dark:focus:ring-2 dark:focus:ring-offset-2 dark:focus:ring-offset-transparent dark:hover:bg-slate-600 dark:bg-slate-700 text-slate-50 p-3 rounded-lg font-poppins"
          onClick={() => {
            setStatus("offline");
            setCurrent("X");
            setSessionEnded(false);
          }}
        >
          Play Offline
        </button>
        <button
          className="bg-slate-400 transition-all dark:focus:ring-2 dark:focus:ring-offset-2 dark:focus:ring-offset-transparent dark:hover:bg-slate-600 dark:bg-slate-700 text-slate-50 p-3 rounded-lg font-poppins"
          onClick={() => {
            setStatus("join");
            setCurrent("X");
            setSessionEnded(false);
          }}
        >
          Join a Room
        </button>
        <button
          className="bg-slate-400 transition-all dark:focus:ring-2 dark:focus:ring-offset-2 dark:focus:ring-offset-transparent dark:hover:bg-slate-600 dark:bg-slate-700 text-slate-50 p-3 rounded-lg font-poppins"
          onClick={() => {
            setStatus("new");
            setCurrent("X");
            setSessionEnded(false);
          }}
        >
          Start New Room
        </button>
      </div>
    </div>
  );
};

export default HomePage;
