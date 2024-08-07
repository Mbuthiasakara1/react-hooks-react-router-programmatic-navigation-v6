import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsLoggedIn(false);
  };
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [isLoggedIn]);
  return (
    <div className="app">
      {isLoggedIn ? <NavBar logout={logout} /> : <Navigate to="/" />}
      <Outlet context={{ login }} />
    </div>
  );
}

export default App;
