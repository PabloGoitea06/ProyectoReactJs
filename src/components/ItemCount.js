import React, { useState } from 'react';


export default function App() {
  const [clickCount, setClickCount] = useState(0);

  const addClick = () => {

    setClickCount(clickCount + 1);
  };

  const restClick = () => {
 
    setClickCount(clickCount - 1)
  }

  console.log(clickCount);

  return (
    <div>
      <div className="ValorDeCantidadDeClicks">
        <h3>{clickCount}</h3>
      </div>

      <div className="BotonClickeable">
      <button onClick={restClick}>-</button>
        <button onClick={addClick}>+</button>
      </div>
    </div>
  );
}
