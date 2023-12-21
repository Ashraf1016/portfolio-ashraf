import { useNavigate } from "react-router-dom";
import logo from "../components/images/alogo1.png";
import "./landingpage.css";
import { useEffect, useState } from "react";

export const LandingPageContent = ({ val, scale }) => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate()

  useEffect(() => {
    console.log("1111111111111", scale);
    setProgress(scale);
    if(scale === 50){
      
      setTimeout(() => {
        navigate('/home')
      }, 2000);
    }
  }, [scale]);

  return (
   <><div class="wrapper" style={{ background: val }}>
      <div class="top">HOLD MY HAND, I WILL TAKE U IN</div>
      <div class="bottom" aria-hidden="true">
        HOLD MY HAND, I WILL TAKE U IN
      </div>
    </div>
    <div className="progress">
    SYNCHRONISING {progress}
    </div>
    </> 
  );
};
