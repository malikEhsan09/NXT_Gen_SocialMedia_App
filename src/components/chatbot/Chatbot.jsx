// import React, { useState } from 'react';
// import IconButton from '@mui/material/IconButton';
// import SmartToyIcon from '@mui/icons-material/SmartToy';
// import "./chatbot.scss"
import Footer from '../footer/Footer';


// const Chatbot = () => {
//   const [isChatOpen, setIsChatOpen] = useState(false);

//   const toggleChat = () => {
//     setIsChatOpen(!isChatOpen);
//   };


//   return (
//     <>
//     <div className='chatbody'>
//       <IconButton onClick={toggleChat}>
//         <SmartToyIcon className='chaticon' sx={{ fontSize: 35 }} />
//          <pre className='desc'> Social Chatbot</pre>
//       </IconButton>

//       {isChatOpen && (
//         <iframe
//           allow="microphone;"
//           width="350"
//           height="430"
//           src="https://console.dialogflow.com/api-client/demo/embedded/cedde24d-1fa0-4ffd-b406-ff3045a056b3"
//         />
//       )}
//       {/* <iframe	style="width: 400px; height: 600px;" src="https://app.fastbots.ai/embed/clq3aljxy00rxpyb225giii3u"></iframe> */}

//   <div>
//     <Footer/>
//   </div>
//     </div>
    
//     </>
//   // <>
//   //      <script defer src="https://app.fastbots.ai/embed.js" data-bot-id="clq3aljxy00rxpyb225giii3u"></script>  
//   // </>
//   );
// };

// export default Chatbot;



// FastBot chatBot
import React, { useState } from 'react';
import chatIcon from "../../assets/SM.png"

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const iframeStyle = {
    width: '400px',
    height: '600px',
    display: isChatOpen ? 'block' : 'none',
  };

  return (
    <>
    <div style={{backgroundColor:"#333"}}>
      <img
        src={chatIcon}
        alt="Chatbot Icon"
        onClick={toggleChat}
        style={{ cursor: 'pointer' , height:"40px", width:"40px",marginTop:"5px"}}
      />

      {/* Chatbot iframe */}
      <iframe style={iframeStyle} src="https://app.fastbots.ai/embed/clq3aljxy00rxpyb225giii3u"></iframe>
    </div>
    </>
  );
}

export default Chatbot;


