import React, { useEffect, useState, useContext } from "react";
import Post from "../Post";
import LoginPage from "./LoginPage";
import { UserContext } from "../UserContext";

const IndexPage = () => {
  const [posts, setPosts] = useState([]);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const username = userInfo?.username;
  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);

  return (
    <>
      {username ? (
        <>{posts.length > 0 && posts.map((post) => <Post {...post} />)}</>
      ) : (
        <LoginPage />
      )}
    </>
  );
};

export default IndexPage;
