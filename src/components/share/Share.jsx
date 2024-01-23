// Share.jsx

import "./share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import ehsan from "../../assets/ehsan.jpg";
import { useState } from "react";
import SpeechRecognitionComponent from "../speechRecognitionComponent/SpeechRecognitionComponent";

const Share = () => {
  const { currentUser } = useContext(AuthContext);
  const [inputText, setInputText] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [showVoiceCommand, setShowVoiceCommand] = useState(false);

  const handleShare = () => {
    // Add logic for sharing the post
    // Assuming you want to display the entered text in the notification
    setShowNotification(true);
    setShowVoiceCommand(true);

    setTimeout(() => {
      setInputText("");
      setShowNotification(false);
      setShowVoiceCommand(false);
    }, 2000);
  };

  const handleSpeechResult = (text) => {
    setInputText(text);

    // Check for the voice command to share the post
    if (text.toLowerCase().includes('share post') || text.toLowerCase().includes('share it')) {
      handleShare();
    } else if (text.toLowerCase().includes('open microphone')) {
      // Trigger the speech recognition here if needed
      console.log('Microphone opened!');
    }
  };

  return (
    <div className="share">
      <SpeechRecognitionComponent onSpeechResult={handleSpeechResult} />
      <div className="container">
        <div className="top">
          <img src={ehsan} alt="" />
          <input
            type="text"
            placeholder={`What's on your mind ehsan ahmed?`}
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{ display: "none" }} />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button onClick={handleShare}>Share</button>
          </div>
          {showNotification && (
            <div className={`notification ${showVoiceCommand ? "voice-command fadeInUp" : ""}`}>
              <strong>Your post has been shared!</strong>
              {inputText && <p>{inputText}</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Share;
