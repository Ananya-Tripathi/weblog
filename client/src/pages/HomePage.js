import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import wallp from "./3726029.jpg";
const HomePage = () => {
  const { userInfo } = useContext(UserContext);
  const username = userInfo?.username;
  const homepageStyle = {
    fontSize: "10rem",
    textDecoration: "underline",
    fontWeight: "bold", // Add this line to make the font bold
    fontFamily: "Barriecito",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#9932cc",
  };
  const subHome = {
    fontSize: "1rem",
    fontWeight: "bolder", // Add this line to make the font bold
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "underline",
    color: "#4d5164",
  };
  const container = {
    padding: "60px 0px 0px 0px",
    background: `url("./chef.svg")`, // Set the background image
    backgroundSize: "cover", // Adjust as needed
    width: "84vw",
    height: "80vh",
  };
  return (
    <div style={container}>
      <div style={homepageStyle}>WE BLOG</div>
      <p style={subHome}>
        Login to get access to tons of Easy to cook recipies
      </p>
      <Link style={subHome} to={username ? "/posts" : "/login"}>
        ViewPost
      </Link>
    </div>
  );
};

export default HomePage;
