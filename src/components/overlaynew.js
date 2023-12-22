import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { forwardRef } from "react";
import Overlay1 from "./overlay/overlay1";
import Overlay2 from "./overlay/overlay2";
import Overlay3 from "./overlay/overlay3";
import Overlay4 from "./overlay/overlay4";
import Overlay5 from "./overlay/overlay5";
import profile from '../components/images/pro.png'


const Overlay = forwardRef(({ setScrollPosition, caption, scroll }, ref) => {
  // Function to update the scroll position
  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollTop);
  };
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause",
    scroller: ".container",
  });

  return (
    <div
      className="container  "
      ref={ref}
      onScroll={(e) => {
        handleScroll(e);
        scroll.current =
          e.target.scrollTop / (e.target.scrollHeight - window.innerHeight);
      }}
    >
      <section className="panel first">
      <img src={profile} alt='pro' className="proImg"/>
        <Overlay1 />
      </section>

      <section className="panel second">
      <Overlay3 scroll={scroll.current} />

      </section>

      <section className="panel third">
        <Overlay2 />

      </section>

      <section className="panel fourth"  > 
        <Overlay4 />
      </section>
      <section className="panel fifth"  > 
        <Overlay5 />
      </section>
    </div>
  );
});

export default Overlay;
