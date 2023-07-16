import { useState } from 'react';
import LikeButton from './components/LikeButton';

function App() {
  const [message, setMessage] = useState('My 1st Github Action');

  return (
    <div className="py-12 flex justify-center items-center gap-4">
      <p className="text-3xl">{message}</p>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <LikeButton />
    </div>
  );
}

export default App;
