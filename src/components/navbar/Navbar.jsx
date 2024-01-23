import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import ehsan from "../../assets/ehsan.jpg"

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, message: "You have a new follower", read: false },
    { id: 2, message: "Your post was liked", read: true },
    {id :3, message :"Miro satrangi liked your post", read : true},
    // Add more notification 
  ]);


  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
 
    // Mark notifications as read when the notification panel is opened
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  };


  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Next Gen Social</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon  sx={{ fontSize: 28 }}/>
        <a href="abdulmoiz89355@gmail.com">
          <EmailOutlinedIcon sx={{ fontSize: 28 }} />
        </a>

       
        <div className="notification-container" onClick={handleNotificationClick}>
          <NotificationsOutlinedIcon sx={{ fontSize: 28 }} />
          <span className="notification-count">2</span>
        </div>
        
        <div className="user">
          <img
            // src={currentUser.profilePic}
            src={ehsan}
            alt=""
          />
          <span>
            {/* {currentUser.name} */}
            Ehsan Ahmed
            </span>
        </div>
        {showNotifications && (
          <div className="notification-panel">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={notification.read ? "read" : "unread"}
              >
                {notification.message}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
