import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Button } from 'ui-waves';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./overlay.css";
import { LinkedIn } from "@mui/icons-material";

export default function   Overlay1() {
  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  const handleNavigation = (url) => {
    window.location.href = url; // Navigate to the specified URL
  };
  return (

    <div className="container1 mb-5">
      <h1
        style={{
          fontSize: "8rem",
          margin: "auto 0",
          fontWeight: "normal",
        }}
        className="typewriter mt-5"
      >
        <div>I'm Ashraf, 
          </div>     
          <span>
          I'm a</span>    
        <span style={{ color: "red", fontWeight: "bold", marginLeft: "16px" }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["Developer", "Designer", "Traveler"]}
            cursor
            cursorStyle="_"
            loop={true}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
          />
        </span>
      </h1>
      <div className="d-flex" style={{padding:'0 50px'}}>
      <TwitterIcon style={{ margin: '0 8px' ,cursor: 'pointer'}} onClick={() => handleNavigation('https://twitter.com/your_twitter_handle')} />
      <LinkedIn style={{ margin: '0 8px',cursor: 'pointer' }} onClick={() => handleNavigation('https://in.linkedin.com/in/ashraf-p-2a5254172')} />
      <InstagramIcon style={{ margin: '0 8px',cursor: 'pointer' }} onClick={() => handleNavigation('https://www.instagram.com/as_hr_af_pk/')} />
      <WhatsAppIcon style={{ margin: '0 8px' ,cursor: 'pointer'}} onClick={() => handleNavigation('whatsapp://send?phone=+918086008433')} />

      </div>
	<div >
    <div>
   
   

    </div>
  <div className="field">
  <span className="scroll-span">Scroll Down</span>
		<div className="mouse"></div>
	</div>
  </div>
    </div>
  );
}
