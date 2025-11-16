import React from 'react';
import ProfilePage from './components/ProfilePage';
import UserContext from './components/UserContext';

function App() {
  const [userData, setUserData] = React.useState({ name: "Jane Doe", email: "jane.doe@example.com" });

  return(
    <UserContext.Provider value={{ userData, setUserData }}>
      <ProfilePage userData={userData} />
    </UserContext.Provider>
  )
}

export default App;