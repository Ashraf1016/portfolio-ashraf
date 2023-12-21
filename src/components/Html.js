import React from "react";
import $ from "jquery";
import Typewriter from "typewriter-effect";
import pro from "../components/images/pro.png";
import vue from "../components/images/vue.png";
import angular from "../components/images/angular.jpg";
import react from "../components/images/react.png";
import git from "../components/images/git.png";
import tailwind from "../components/images/tailwind.png";
import css from "../components/images/css.png";
import html from "../components/images/html.png";
import bootstrap from "../components/images/bootstrap.png";
import ts from "../components/images/TS.png";
import node from "../components/images/node.png";
import js from "../components/images/js.png";
import sass from "../components/images/sass.png";
import jquery from "../components/images/jquery.png";

function Html() {
  return (
    <>
      <div className="page1">
        <div className="type-writer">
          <Typewriter
            options={{
              strings: [
                "I'm Ashraf...",
                "I'm a Developer...",
                "I'm a Traveler...",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="img-pro">
          <img src={pro} alt="img" />
        </div>
      </div>
      <div className="sign">
        <span className="fast-flicker">S</span>KI<span className="flicker">LL</span>S
      </div>

      <div
        style={{
          position: "absolute",
          top: "140vh",
          left: "50vw",
          transform: "translateX(-65%)",
          color: "#f4b677",
        }}
      >
        <div className="img-pros">
          <img
            className="avatar"
            style={{ top: "-300px", left: "-200px" }}
            src={react}
            alt="img"
          />
          <img
            className="avatar"
            style={{ top: "-220px", left: "450px" }}
            src={vue}
            alt="img"
          />
          <img
            className="avatar"
            style={{ top: "10px", left: "-300px" }}
            src={angular}
            alt="img"
          />
          <img
            className="avatar"
            style={{ top: "-270px", left: "-850px" }}
            src={html}
            alt="img"
          />
          <img
            className="avatar"
            style={{ top: "200px", left: "-600px" }}
            src={git}
            alt="img"
          />
          <img
            className="avatar"
            style={{ top: "140px", left: "-900px" }}
            src={css}
            alt="img"
          />
          <img
            className="avatar"
            style={{ top: "-100px", left: "-750px" }}
            src={tailwind}
            alt="img"
          />
          <img
            className="avatar"
            style={{ top: "100px", left: "450px" }}
            src={ts}
            alt="img"
          />
          <img
            className="avatar"
            style={{ top: "-300px", left: "-550px" }}
            src={js}
            alt="img"
          />
          <img
            className="avatar"
            style={{ top: "-400px", left: "50px" }}
            src={bootstrap}
            alt="img"
          />
          <img
            className="avatar"
            style={{ top: "-400px", left: "450px" }}
            src={node}
            alt="img"
          />
          <img
            className="avatar"
            style={{ top: "160px", left: "150px" }}
            src={sass}
            alt="img"
          />
          <img
            className="avatar"
            style={{ top: "220px", left: "-50px" }}
            src={jquery}
            alt="img"
          />
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "140vh",
          left: "50vw",
          transform: "translateX(-50%)",
          color: "#673ab7",
        }}
      >
        <h1>Skills</h1>
      </div>
    </>
  );
}

export { Html };
