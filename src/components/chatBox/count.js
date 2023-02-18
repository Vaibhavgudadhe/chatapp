import React, { useState } from 'react';

function Count() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      <button onClick={handleIncrement}>New message ({count})</button>
    </div>
  );
}
export default Count
