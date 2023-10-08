import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
const HomePage = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const username = userInfo?.username;
  const homepageStyle = {
    fontSize: "6rem",
    fontWeight: "bold", // Add this line to make the font bold
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const subHome = {
    fontSize: "1rem",
    fontWeight: "bolder", // Add this line to make the font bold
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#4d5164",
  };
  return (
    <>
      <div style={homepageStyle}>HomePage</div>
      <p style={subHome}>
        Login to get access to tons of Easy to cook recipies
      </p>
      <Link style={subHome} to={username ? "/posts" : "/login"}>
        ViewPost
      </Link>
    </>
  );
};

export default HomePage;
