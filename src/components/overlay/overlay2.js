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
  <img className="avatar react" src={react} alt="React" />
  <img className="avatar vue" src={vue} alt="Vue" />
  <img className="avatar angular" src={angular} alt="Angular" />
  <img className="avatar html" src={html} alt="HTML" />
  <img className="avatar git" src={git} alt="Git" />
  <img className="avatar css" src={css} alt="CSS" />
  <img className="avatar tailwind" src={tailwind} alt="Tailwind CSS" />
  <img className="avatar ts" src={ts} alt="TypeScript" />
  <img className="avatar js" src={js} alt="JavaScript" />
  <img className="avatar bootstrap" src={bootstrap} alt="Bootstrap" />
  <img className="avatar node" src={node} alt="Node.js" />
  <img className="avatar sass" src={sass} alt="Sass" />
  <img className="avatar jquery" src={jquery} alt="jQuery" />
</div>

   </div>
  );
}
