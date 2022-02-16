import "./App.css";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <h1>Auth Practice Project</h1>
      <Login />
      <Logout />
      <Profile />
    </div>
  );
}

export default App;
