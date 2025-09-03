import { useState } from "react";

// onclick (HTML) -> onClick (React)
// hook - useState - all are function - 'use'
// state - App State - Current value
// Component = F(S)
export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0); // convention

  // Dislike
  return (
    <div>
      <div className="counter-btn-container">
        <button onClick={() => setLike(like + 1)}>👍 {like}</button>
        <button onClick={() => setDisLike(disLike + 1)}>👎 {disLike}</button>
      </div>
      <progress value={like} max={like + disLike}></progress>
      {/* Conditional Rendering */}

      {like - disLike >= 10 && <h3>You are Awesome 🎊</h3>}

      {/* Task: if Like is 10 more than disLike "You are Awesome 🎊" */}
    </div>
  );
}
