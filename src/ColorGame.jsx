import { useState } from 'react';

// export function ColorGame() {
//   const [color, setColor] = useState(" ");
//   const styles = {
//     backgroundColor: color
//   };
//   return (
//     <div>
//       <input style={styles} onChange={(event) => setColor(event.target.value)} type="text" />
//       <h1>{color} </h1>
//     </div>
//   );
// }
 export function ColorGame() {
  const [color, setColor] = useState("pink");
  const styles = {
    background: color,
  };
  const [colors,setColors] = useState(["pink", "purple", "plum", "orange"]);
  return (
    <div>
      {/* Task 2.2 - Update the background the input */}

      <input
        value={color}
        style={styles}
        onChange={(event) => setColor(event.target.value)}
        type="text"
      />
      {/* Task 3.2 - Uses colors - Display Color Box */}
      <button onClick={()=>setColors([...colors,color])}>➕ Add</button>

      {/* Task 3.1 - Uses colors - Display Color Box */}
      {colors.map(color=>(
      <ColorBox boxColor={color}/>
      ))}
    </div>
  );
}

function ColorBox({boxColor}) {
  const boxStyles = {
    background: boxColor,
    height: "25px",
    width: "225px",
    marginTop: "8px",
  };

  return <div style={boxStyles}></div>;
}

