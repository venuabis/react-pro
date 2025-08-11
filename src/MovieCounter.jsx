import { useState } from "react";

export function MovieCounter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  <div>
    <button onClick={() => setLike(like + 1)}>👍 {like}</button>
    <button onClick={() => setDisLike(disLike + 1)}>👎 {disLike}</button>
  </div>;
}
