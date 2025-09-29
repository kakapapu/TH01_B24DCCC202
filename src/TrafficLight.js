import React, { useState, useEffect } from 'react';

function TrafficLight() {
  const [cur, setcur] = useState(0);

  function next() {
    setcur((cur + 1) % 3);
  }

  useEffect(() => {
    const timer = setInterval(next, 2000);
    return () => clearInterval(timer);
  }, [cur]);

  return (
    <div style={{ textAlign: 'center'}}>
      <div>
        <div
          style={{
            width: 50,
            height: 50,
            borderRadius: '50%',
            background: cur === 0 ? 'red' : 'gray',
            margin: '10px auto'
          }}
        />
        <div
          style={{
            width: 50,
            height: 50,
            borderRadius: '50%',
            background: cur === 1 ? 'yellow' : 'gray',
            margin: '10px auto'
          }}
        />
        <div
          style={{
            width: 50,
            height: 50,
            borderRadius: '50%',
            background: cur === 2 ? 'green' : 'gray',
            margin: '10px auto'
          }}
        />
      </div>
      <button onClick={next}>Chuyển đèn</button>
    </div>
  );
}

export default TrafficLight;