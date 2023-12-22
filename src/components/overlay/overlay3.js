import { useEffect, useState } from "react";
import illu from "../images/illustrate1.png";

const Overlay3 = ({ scroll }) => {
  const [left, setLeft] = useState(-50);
  useEffect(() => {
    setLeft(scroll * 600);
  }, [scroll]);
  return (
    <div className="overlay3 ">
      <div className="text">
        <div className="wrapper">
          <div id="T" className="letter">
            T
          </div>
          <div className="shadow">T</div>
        </div>
        <div className="wrapper">
          <div id="I" className="letter">
            I
          </div>
          <div className="shadow">I</div>
        </div>
        <div className="wrapper">
          <div id="M" className="letter">
            M
          </div>
          <div className="shadow">M</div>
        </div>
        <div className="wrapper">
          <div id="E" className="letter">
            E
          </div>
          <div className="shadow">E</div>
        </div>
        <div className="wrapper">
          <div id="L" className="letter">
            L
          </div>
          <div className="shadow">L</div>
        </div>
        <div className="wrapper">
          <div id="I" className="letter">
            I
          </div>
          <div className="shadow">I</div>
        </div>
        <div className="wrapper">
          <div id="N" className="letter">
            N
          </div>
          <div className="shadow">N</div>
        </div>
        <div className="wrapper">
          <div id="E" className="letter">
            E
          </div>
          <div className="shadow">E</div>
        </div>
      </div>
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
    <div
        id="animationContainer"
        style={{ left: `${left}px`, top: `${left}px` }}
      >
        <img src={illu} alt="illu" />
      </div>
      <ul>
        <li style={{ "--accent-color": "#41516C" }}>
          <div className="date">1997</div>
          <div className="title">&#128118; Born on May 6</div>
        </li>
        <li style={{ "--accent-color": "#FBCA3E", color: "#000" }}>
          <div className="date">2019</div>
          <div className="title">
            &#127891; Graduated from Kerala Technological University
          </div>
        </li>
        <li style={{ "--accent-color": "#E24A68" }}>
          <div className="date">2019</div>
          <div className="title">Expertzlab</div>
          <div className="descr">4 month internship on Advanced JAVA</div>
        </li>
        <li style={{ "--accent-color": "#1B5F8C" }}>
          <div className="date">2020 - 2023</div>
          <div className="title">Software Engineer - Innovature labs</div>
          <div className="descr">
            Worked with Innovature in cochin over 3years as a software engineer
          </div>
        </li>
        <li style={{ "--accent-color": "#4CADAD" }}>
          <div className="date">2023 - Present</div>
          <div className="title">
            Senior Software Engineer - Cubet Technolabs
          </div>
          <div className="descr">
            Currently, working with Cubet in cochin as a senior software
            engineer
          </div>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Overlay3;
