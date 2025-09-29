import React, { useState } from 'react';

function App() {
  const [congviec, setcongviec] = useState([]);
  const [text, settext] = useState('');

  function add() {
    if (text) setcongviec([...congviec, text]);
    settext('');
  }

  function remove(i) {
    setcongviec(congviec.filter((a, idx) => idx !== i));
  }

  return (
    <div>
      <input value={text} onChange={e => settext(e.target.value)} />
      <button onClick={add}>Thêm</button>
      <ul>
        {congviec.map((t, i) => (
          <li key={i}>
            {t} <button onClick={() => remove(i)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;