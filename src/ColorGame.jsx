import { useState } from "react";

const INITIAL_COLORS = ["pink", "purple", "plum", "orange"];
// Typing Event -> onKeyPress, onKeyUp, onInput, onChange
// event.target -> origin of event
function ColorGame() {
  const [color, setColor] = useState("pink");
  const styles = {
    background: color,
  };

  const [colors, setColors] = useState(INITIAL_COLORS);

  const addColor = (event) => {
    event.preventDefault(); // no refresh
    setColors([...colors, color]);
  };

  return (
    <div>
      {/* Task 2.2 - Update the background the input */}
      <form onSubmit={addColor}>
        <input
          value={color}
          style={styles}
          onChange={(event) => setColor(event.target.value)}
          type="text"
        />
        {/* Task 3.2 - Add the color to the list */}
        {/* Existing Colors + New Color */}

        {/* submit -> onSubmit event triggered */}
        <button type="submit">➕ Add</button>
      </form>

      {/* Task 3.1 - Uses colors - Display Color Box */}
      {colors.map((clr) => (
        <ColorBox clr={clr} />
      ))}
    </div>
  );
}

function ColorBox({ clr }) {
  const boxStyles = {
    background: clr,
    height: "25px",
    width: "225px",
    marginTop: "8px",
  };

  return <div style={boxStyles}></div>;
}

// Good Practice
export { ColorGame };
