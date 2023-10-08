import { useContext, useState } from "react";
import React from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import RegisterPage from "./RegisterPage";
const LoginPage = () => {
  

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState("");
  const [loginn, setLoginn] = useState(true);
  const { setUserInfo } = useContext(UserContext);

  const enter = {
    fontSize: "1.2rem",
    fontWeight: "bolder", // Add this line to make the font bold
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
    marginBottom: "2rem",
  };

  async function login(ev) {
    ev.preventDefault();
    console.log(username, password);
    const respose = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (respose.ok) {
      respose.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      console.log("wrong credentials");
    }
  }
  function handleLogin(ev) {
    setLoginn(true);
  }
  function handleRegister(ev) {
    setLoginn(false);
  }
  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <div style={enter}>
        <p onClick={handleLogin}>Login</p>
        <p onClick={handleRegister}>Register</p>
      </div>
      {loginn ? (
        <form action="" className="login" onSubmit={login}>
          <input
            type="text"
            placeholder="username"
            onChange={(ev) => setUsername(ev.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button>Login</button>
        </form>
      ) : (
        <RegisterPage />
      )}
    </>
  );
};

export default LoginPage;
