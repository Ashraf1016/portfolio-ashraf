import vue from "../../components/images/vue.png";
import angular from "../../components/images/angular.jpg";
import react from "../../components/images/react.png";
import git from "../../components/images/git.png";
import tailwind from "../../components/images/tailwind.png";
import css from "../../components/images/css.png";
import html from "../../components/images/html.png";
import bootstrap from "../../components/images/bootstrap.png";
import ts from "../../components/images/TS.png";
import node from "../../components/images/node.png";
import js from "../../components/images/js.png";
import sass from "../../components/images/sass.png";
import jquery from "../../components/images/jquery.png";
import arrow from "../../components/images/arrow-path.svg"

export default function Overlay2() {
  return (
   <div>
    <img src={arrow} alt="arrow" />
    <h2 className="skills">Skills</h2>
     <div className="img-pros">
      <img
        className="avatar"
        style={{ top: "300px", left: "200px" }}
        src={react}
        alt="img"
      />
      <img
        className="avatar"
        style={{ top: "220px", left: "460px" }}
        src={vue}
        alt="img"
      />
      <img
        className="avatar"
        style={{ top: "80px", left: "300px" }}
        src={angular}
        alt="img"
      />
      <img
        className="avatar"
        style={{ top: "270px", left: "350px" }}
        src={html}
        alt="img"
      />
      <img
        className="avatar"
        style={{ top: "150px", left: "600px" }}
        src={git}
        alt="img"
      />
      <img
        className="avatar"
        style={{ top: "440px", left: "320px" }}
        src={css}
        alt="img"
      />
      <img
        className="avatar"
        style={{ top: "440px", left: "650px" }}
        src={tailwind}
        alt="img"
      />
      <img
        className="avatar"
        style={{ top: "80px", left: "450px" }}
        src={ts}
        alt="img"
      />
      <img
        className="avatar"
        style={{ top: "300px", left: "550px" }}
        src={js}
        alt="img"
      />
      <img
        className="avatar"
        style={{ top: "400px", left: "50px" }}
        src={bootstrap}
        alt="img"
      />
      <img
        className="avatar"
        style={{ top: "400px", left: "450px" }}
        src={node}
        alt="img"
      />
      <img
        className="avatar"
        style={{ top: "160px", left: "180px" }}
        src={sass}
        alt="img"
      />
      <img
        className="avatar"
        style={{ top: "220px", left: "50px" }}
        src={jquery}
        alt="img"
      />
    </div>
   </div>
  );
}
