import React, { useState } from 'react';
import Routing from './Helpers/Routing';
import LoginPage from './Pages/LoginPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <Routing />
      )}
    </div>
  );
}

export default App;


// IDEAS
// PROFILE PAGE
// Pin/feature blogs on profile
// side nav bar
// upload an image for profile pic
// Instead of displaying all blogs in each list, have a SEE MORE feature, which once clicked, 
// ...leads to specific page e.g Your Blogs, recommended blogs etc.
// ... only show first 6 in each list so [0] - [6] then a SEE MORE button

// IMPORTS/INSTALLS  
// REACT-ROUTER-DOM - npm install react-router-dom
// REACT-ICONS - npm install react-icons     

//on click for items, add to saved list