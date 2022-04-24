import { useEffect, useState } from "react";

// =================
//  Components
// =================
import DarkModeBtn from "./DarkModeBtn";
import NewGame from "./NewGame";
import Palette from "./Palette";

const NewRoom = ({
  setSquares,
  setTheWinner,
  setStatus,
  squares,
  theWinner,
  socket,
  current,
  setCurrent,
  onlineUsers,
  setOnlineUsers,
  firstPlay,
  setFirstPlay,
}) => {
  const [roomId, setRoomId] = useState(0);

  const reset = () => {
    setStatus("");
    setSquares(new Array(9).fill(""));
    setTheWinner("");
    socket.emit("close_room");
    setOnlineUsers([]);
    setFirstPlay("");
  };

  const generateRoomCode = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    const generatedCode = generateRoomCode(10000, 99999);

    setRoomId(generatedCode);
    socket.emit("join_room", generatedCode);
  }, []);

  useEffect(() => {
    if (roomId) {
      socket.emit("join_room", roomId);
    }
  }, [onlineUsers]);

  return (
    <div className="new-room-game">
      <div className="text-slate-800 dark:text-slate-50 text-center mb-2 flex items-center justify-center font-poppins">
        <div
          className={`w-2 h-2 rounded-full ${
            onlineUsers.length > 1 ? "bg-green-500" : "bg-red-500"
          } mr-2`}
        />{" "}
        {onlineUsers.length > 1
          ? "Player Two is in the room"
          : "No one in the room"}
      </div>
      <div className="flex-1 p-3 text-center font-poppins text-slate-800 dark:text-slate-50 mb-5 border-2 border-slate-800 dark:border-slate-50 rounded-lg">
        <span className="font-bold">Room ID:</span> {roomId}
      </div>
      <button
        onClick={reset}
        className="mb-6 font-poppins text-slate-800 dark:text-slate-50"
      >
        &larr; Go Back
      </button>
      <div className="flex justify-between items-center md:flex-row lg:flex-row flex-col">
        <div className="flex">
          <NewGame
            setTheWinner={setTheWinner}
            setSquares={setSquares}
            socket={socket}
            roomId={roomId}
            setCurrent={setCurrent}
            setFirstPlay={setFirstPlay}
            online={true}
          />
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
        socket={socket}
        roomId={roomId}
        online={true}
        firstPlay={firstPlay}
        setFirstPlay={setFirstPlay}
      />
    </div>
  );
};

export default NewRoom;
