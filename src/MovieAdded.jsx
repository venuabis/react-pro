import { useState } from "react";

function MovieAdded() {
  const [name, setName] = useState();
  const [poster, setPoster] = useState();
  const [ratings, setRatings] = useState();
  const [summary, setSummary] = useState();

  const styles = {
    backgroundColor: "black"
  };


  // Dislike
  return (
    <div class="counts-container">
      <input
        value={name}
        style={styles}
        onChange={(event) => setName(event.target.value)}
        type="text" />
      <input
        value={poster}
        style={styles}
        onChange={(event) => setPoster(event.target.value)}
        type="text" />
      <input
        value={ratings}
        style={styles}
        onChange={(event) => setRatings(event.target.value)}
        type="text" />
      <input
        value={summary}
        style={styles}
        onChange={(event) => setSummary(event.target.value)}
        type="text" />
      <button onClick={() => setColors([...colors, color])}>➕ Add</button>
    </div>

    );
  }
