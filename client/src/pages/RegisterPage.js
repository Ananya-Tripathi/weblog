import { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setcnfPassword] = useState("");
  async function register(ev) {
    ev.preventDefault();
    if (password !== cnfPassword) {
      alert("Password Mismatch");
    } else {
      const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 200) {
        alert("Regitration successful");
        console.log("registration successful");
        
      } else {
        alert("Regitration successful");
        console.log("registration failed");
      }
    }
  }
  return (
    <form className="register" onSubmit={register}>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <input
        type="password"
        placeholder="confirm password"
        value={cnfPassword}
        onChange={(ev) => setcnfPassword(ev.target.value)}
      />
      <button>Register</button>
    </form>
  );
}
