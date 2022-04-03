// =================
//  Components
// =================
import Square from "./Square";

const Palette = () => {
  return (
    <div className="mt-5">
      <div className="flex gap-2 mb-4">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="flex gap-2 mb-4">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="flex gap-2">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
};

export default Palette;
