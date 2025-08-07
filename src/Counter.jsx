import { useState } from 'react';

export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0); // convention


  // Dislike
  return (
    <div>
      <button onClick={() => setLike(like + 1)}>👍 {like}</button>
      <button onClick={() => setDisLike(disLike + 1)}>👎 {disLike}</button>
      <progress max={like + disLike} value={like}>

      </progress>
      {like >= disLike + 10 ? <h3>Your are Awesome🎊 </h3> : ""}
      {like - disLike >= 10 && <h3>Your are Awesome🎊 </h3>}
    </div>
  );
}
