import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [info, setInfo] = useState(null);

  function submit(e) {
    e.preventDefault();
    if (!name || !email || !pass) {
      setError('Không được để trống!');
      setInfo(null);
    } else {
      setInfo({ name, email, pass });
    }
  }

  return (
    <div>
      <h2>Form Đăng ký</h2>
      <form onSubmit={submit}>
        <input placeholder="Tên" value={name} onChange={e => setName(e.target.value)} /><br/>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br/>
        <input placeholder="Mật khẩu" type="password" value={pass} onChange={e => setPass(e.target.value)} /><br/>
        <button type="submit">Đăng ký</button>
      </form>
      {error && <div style={{color:'red'}}>{error}</div>}
      {info && (
      <div>
          <h3>Thông tin đã nhập:</h3>
          <div>Tên: {info.name}</div>
          <div>Email: {info.email}</div>
          <div>Mật khẩu: {info.pass}</div>
      </div>)}
    </div>
  );
}

export default App;
