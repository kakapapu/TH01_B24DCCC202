import React, { useState } from 'react';

function TextCounter() {
  const [text, setText] = useState('');

  return (
    <div>
      <h2>Bộ đếm kí tự</h2>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Nhập văn bản..."
      />
      <div>Số ký tự: {text.length}</div>
      {text.length > 100 && (
        <div style={{ color: 'red' }}>Bạn đã nhập quá 100 ký tự!</div>
      )}
    </div>
  );
}

export default TextCounter;