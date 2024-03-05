import React, { useState } from 'react';
import '../Styles/LoginPage.css'

interface LoginPageProps {
  onLogin: () => void | undefined;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      setError('Username and password cannot be empty');
    } else {
      onLogin();
    }
  };

  return (
    <div className='Login'>
      <h1>Blogger's Den</h1>
      {error && <p style={{ color: 'red', background: "white" }}>{error}</p>}
      <div>
        <input 
          type="text" 
          placeholder='Username'
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
      </div>
      <div>
        <input 
          type="password" 
          placeholder="Password"
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
