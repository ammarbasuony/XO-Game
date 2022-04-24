import { useEffect, useState } from "react";
import io from "socket.io-client";

// =================
//  Components
// =================
import HomePage from "./components/HomePage";
import NewRoom from "./components/NewRoom";
import JoinRoom from "./components/JoinRoom";
import Offline from "./components/Offline";

// Establish Socket Connection
const socket = io.connect(process.env.REACT_APP_BACKEND_URL);

const Main = () => {
  const [squares, setSquares] = useState(new Array(9).fill(""));
  const [current, setCurrent] = useState("X");
  const [theWinner, setTheWinner] = useState("");
  const [status, setStatus] = useState("");
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sessionEnded, setSessionEnded] = useState(false);
  const [firstPlay, setFirstPlay] = useState("");

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode");
    if (isDarkMode === "true") document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    socket.on("reset", () => {
      setTheWinner("");
    });

    socket.on("player_joined", (userIds) => {
      console.log(userIds);
      setOnlineUsers([...onlineUsers, ...userIds]);
    });

    socket.on("player_left", (userId) => {
      console.log(userId);
      setOnlineUsers(onlineUsers.filter((user) => user !== userId));
      setStatus("");
      setSessionEnded(true);
      setSquares(new Array(9).fill(""));
      setFirstPlay("");
    });

    socket.on("room_closed", () => {
      console.log("Closed");
      setOnlineUsers([]);
      setStatus("");
      setSessionEnded(true);
      setSquares(new Array(9).fill(""));
      setFirstPlay("");
    });
  }, [socket]);

  return (
    <div className="bg-slate-300 min-h-screen flex justify-center items-center dark:bg-slate-800">
      {status === "offline" ? (
        <Offline
          setSquares={setSquares}
          setTheWinner={setTheWinner}
          setStatus={setStatus}
          squares={squares}
          theWinner={theWinner}
          current={current}
          setCurrent={setCurrent}
          firstPlay={firstPlay}
          setFirstPlay={setFirstPlay}
        />
      ) : status === "join" ? (
        <JoinRoom
          setSquares={setSquares}
          setTheWinner={setTheWinner}
          setStatus={setStatus}
          squares={squares}
          theWinner={theWinner}
          socket={socket}
          current={current}
          setCurrent={setCurrent}
          onlineUsers={onlineUsers}
          setOnlineUsers={setOnlineUsers}
          firstPlay={firstPlay}
          setFirstPlay={setFirstPlay}
        />
      ) : status === "new" ? (
        <NewRoom
          setSquares={setSquares}
          setTheWinner={setTheWinner}
          setStatus={setStatus}
          squares={squares}
          theWinner={theWinner}
          socket={socket}
          current={current}
          setCurrent={setCurrent}
          onlineUsers={onlineUsers}
          setOnlineUsers={setOnlineUsers}
          firstPlay={firstPlay}
          setFirstPlay={setFirstPlay}
        />
      ) : (
        <HomePage
          setStatus={setStatus}
          setCurrent={setCurrent}
          sessionEnded={sessionEnded}
          setSessionEnded={setSessionEnded}
        />
      )}
    </div>
  );
};

export default Main;
