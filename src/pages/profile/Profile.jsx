import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"
import ehsan from "../../assets/ehsan.jpg"
import { useState } from "react";

const Profile = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="cover"
        />
        <img
          src={ehsan}
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="https://web.facebook.com/?_rdc=1&_rdr" target="_blank">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com" target="_blank">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="https://www.linkedin.com/in/ehsan-ahmed-rafique-b162b6243/" target="_blank">
              <LinkedInIcon fontSize="large"/>
            </a>
            <a href="https://github.com/malikEhsan09" target="_blank">
              <GitHubIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Ehsan Ahmed</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>PAK</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>ehsan.dev</span>
              </div>
            </div>
            <button
              style={{
                backgroundColor: isFollowing ? "grey" : "",
                color: isFollowing ? "white" : "",
                
              }}
              onClick={handleFollowClick}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
          </div>
          <div className="right">
            <a href="ehsanahmed122001@gmail.com">
            <EmailOutlinedIcon />
            </a>
            <MoreVertIcon />
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  );
};

export default Profile;
