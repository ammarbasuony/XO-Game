import { useState } from "react";

// =================
//  Components
// =================
import Square from "./Square";

const Palette = () => {
  const [squares, setSquares] = useState(new Array(9).fill(""));
  const [current, setCurrent] = useState("X");
  return (
    <div className="mt-5">
      <div className="flex gap-2 mb-4">
        <Square
          current={current}
          position={0}
          squares={squares}
          setCurrent={setCurrent}
          setInPosition={setSquares}
        />
        <Square
          current={current}
          position={1}
          squares={squares}
          setCurrent={setCurrent}
          setInPosition={setSquares}
        />
        <Square
          current={current}
          position={2}
          squares={squares}
          setCurrent={setCurrent}
          setInPosition={setSquares}
        />
      </div>
      <div className="flex gap-2 mb-4">
        <Square
          current={current}
          position={3}
          squares={squares}
          setCurrent={setCurrent}
          setInPosition={setSquares}
        />
        <Square
          current={current}
          position={4}
          squares={squares}
          setCurrent={setCurrent}
          setInPosition={setSquares}
        />
        <Square
          current={current}
          position={5}
          squares={squares}
          setCurrent={setCurrent}
          setInPosition={setSquares}
        />
      </div>
      <div className="flex gap-2">
        <Square
          current={current}
          position={6}
          squares={squares}
          setCurrent={setCurrent}
          setInPosition={setSquares}
        />
        <Square
          current={current}
          position={7}
          squares={squares}
          setCurrent={setCurrent}
          setInPosition={setSquares}
        />
        <Square
          current={current}
          position={8}
          squares={squares}
          setCurrent={setCurrent}
          setInPosition={setSquares}
        />
      </div>
    </div>
  );
};

export default Palette;
