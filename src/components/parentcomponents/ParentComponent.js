import React, { useState } from 'react';
import LoginButton from './loginButton';
import LogoutButton from './logoutButton';

const ParentComponent = () => {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
  };

  return (
    <div>
      {isLogged ? (
        <LogoutButton onClick={handleLogout} />
      ) : (
        <LoginButton onClick={handleLogin} />
      )}
    </div>
  );
  
};
export default ParentComponent;