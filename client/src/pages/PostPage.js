import React, { useContext, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import { format } from "date-fns";
import { UserContext } from "../UserContext";
const PostPage = () => {
  const { id } = useParams();
  const [postInfo, setPostInfo] = useState(null);
  // const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();
  const { userInfo } = useContext(UserContext);
  async function handleDeletePost() {
    const response = await fetch(`http://localhost:4000/post/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    if (response.ok) {
      alert("Post deleted");
      setPostInfo(null);
      navigate("/posts");
    }
  }

  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);
  // if (redirect) {
  //   return <Navigate to={"/posts"} />;
  // }

  if (!postInfo) return "";
  return (
    <div className="post-page">
    
      <div className="heading">
        <h1>{postInfo.title}</h1>
      </div>
      <time>{format(new Date(postInfo.createdAt), "MMM d, yyyy HH:mm")}</time>
      <div className="author">-by {postInfo.author.username} </div>

      {userInfo.id === postInfo.author._id && (
        <div className="option">
          <div className="edit-row ">
            <button>
              <Link to={`/edit/${postInfo._id}`} className="edit-btn" href="">
                EDIT
              </Link>
            </button>

            <button className="edit-btn" onClick={handleDeletePost}>
              DELETE
            </button>
          </div>
        </div>
      )}
      <div className="image">
        <img src={`http://localhost:4000/${postInfo.cover}`} alt="" />
      </div>

      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: postInfo.content }}
      />
    </div>
  );
};

export default PostPage;
