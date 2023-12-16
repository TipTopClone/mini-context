import './App.css';
import UserContextProvider from './Context/UsercontextProvider';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <UserContextProvider>
      <h1>Sujan Mahat</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
