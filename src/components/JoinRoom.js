import { useEffect, useState } from "react";

// =================
//  Components
// =================
import DarkModeBtn from "./DarkModeBtn";
import NewGame from "./NewGame";
import Palette from "./Palette";

const JoinRoom = ({
  setSquares,
  setTheWinner,
  setStatus,
  squares,
  theWinner,
  socket,
  current,
  setCurrent,
  onlineUsers,
  setOnlineUsers
}) => {
  const [roomId, setRoomId] = useState(0);
  const [enteredRoomId, setEnteredRoomId] = useState(0);

  const reset = () => {
    setStatus("");
    setSquares(new Array(9).fill(""));
    setTheWinner("");
    socket.emit("close_room");
    setOnlineUsers([]);
  };

  const enterRoomId = (e) => {
    e.preventDefault();

    if (enteredRoomId) {
      setRoomId(enteredRoomId);
      socket.emit("join_room", enteredRoomId);
    }
  };

  return (
    <div>
      {roomId ? (
        <div className="join-room-game">
          <div className="text-slate-50 text-center mb-2 flex items-center justify-center font-poppins">
            <div
              className={`w-2 h-2 rounded-full ${
                onlineUsers.length > 1 ? "bg-green-500" : "bg-red-500"
              } mr-2`}
            />{" "}
            {onlineUsers.length > 1
              ? "Player Two is in the room"
              : "No one in the room"}
          </div>
          <div className="flex-1 p-3 text-center font-poppins text-slate-50 mb-5 border-2  border-slate-50 rounded-lg">
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
          />
        </div>
      ) : (
        <div>
          <button
            onClick={reset}
            className="mb-3 font-poppins text-slate-800 dark:text-slate-50"
          >
            &larr; Go Back
          </button>
          <form onSubmit={(e) => enterRoomId(e)}>
            <h1 className="text-slate-50 font-poppins text-center mb-5 text-3xl font">
              Enter Room ID
            </h1>
            <input
              type="text"
              name="room-id"
              className="w-full p-2 rounded-lg text-slate-700 text-center font-poppins"
              onChange={(e) => setEnteredRoomId(e.target.value)}
            />
            <button className="w-full mt-3 bg-cyan-700 text-slate-50 font-poppins p-2 rounded-lg">
              Join
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default JoinRoom;
