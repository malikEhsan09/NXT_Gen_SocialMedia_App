import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [likedPost, setLikedPost] = useState(false);
  const [likesCount, setLikesCount] = useState(12);
  const [optionsOpen, setOptionsOpen] = useState(false);


  const handleLikeClick = () => {
    if (!likedPost) {
      setLikedPost(true);
      setLikesCount(likesCount + 1);
    } else {
      setLikedPost(false);
      setLikesCount(likesCount - 1);
    }
  };

  const handleCommentClick = () => {
    setCommentOpen(!commentOpen);
  };


  const handleShareClick = () => {
    alert("Your post has been Shared...");
  };

  const handleOptionsClick = () => {
    setOptionsOpen(!optionsOpen);
  };

  const handleSavePost = () => {
    alert("Your post has been Saved!!");
  };


  const handleDeletePost = () => {
    alert("Your post has been Deleted!!");
  };

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon className="threeDotsIcon" onClick={handleOptionsClick} />
          {optionsOpen && (
            <div className="options-panel">
              <div className="savePost" onClick={handleSavePost} >Save Post</div>
              <div className="deletePost" onClick={handleDeletePost}>Delete Post</div>
            </div>
          )}
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item" onClick={handleLikeClick}>
            {likedPost? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            {likesCount} Likes
          </div>
          <div className="item" onClick={handleCommentClick}>
            <TextsmsOutlinedIcon />
            {commentOpen ? "Hide" : "Show"} Comments
          </div>
          <div className="item" onClick={handleShareClick}>
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;



