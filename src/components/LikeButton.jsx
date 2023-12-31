import { useState } from 'react';

function LikeButton() {
  const [count, setCount] = useState(0);

  return (
    <button type="button" className="border px-4 py-2 rounded" onClick={() => setCount(count + 1)}>
      {`Like ${count}!`}
    </button>
  );
}

export default LikeButton;
