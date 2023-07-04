import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { UserContext } from "./UserContext";
// import { Navigate } from "react-router-dom";
const Header = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);

  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);
  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    }).then(() => {
      navigate("/");
      alert("Logged out");
      setUserInfo(null);
    });
  }

  const username = userInfo?.username;
  return (
    <header>
      <Link to="/" className="logo">
        WeBlog
      </Link>
      <nav>
        {username && (
          <>
            <span>Hello {username}</span>
            <Link to="/createNewPost">Create new post</Link>
            <Link to="/posts">Posts</Link>
            <a onClick={logout}>Logout</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login / Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
