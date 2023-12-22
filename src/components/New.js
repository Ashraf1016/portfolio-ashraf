import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { OrbitControls } from "@react-three/drei";
import Overlay from "./overlaynew";
import { Table } from "./Table";
gsap.registerPlugin(ScrollTrigger);
export const New = () => {
  const scroll = useRef(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const caption = useRef();
  const boxRefs = useRef([]);
  const overlay = useRef();

  // Set up state for the hovered and active state

  useEffect(() => {
    // Define the animation for the camera angle update
    const updateCameraAngle = (index) => {
      gsap.to(boxRefs.current[index].rotation, {
        x: Math.PI * 0.5, // Set the desired rotation angle (90 degrees in this example)
        duration: 1, // Animation duration
        ease: "power2.out", // Animation ease
      });
    };

    // Setup the ScrollTrigger
    ScrollTrigger.batch(boxRefs.current, {
      onEnter: (batch) => {
        batch.forEach((element, index) => {
          updateCameraAngle(index); // Trigger the animation when the box enters the viewport
        });
      },
      onLeaveBack: (batch) => {
        batch.forEach((element, index) => {
          updateCameraAngle(index); // Trigger the animation when the box leaves the viewport
        });
      },
    });
  }, []);

  return (
    <>
      <div id="webgi-canvas-container">
        <Canvas id="webgi-canvas">
          <ambientLight />

          <pointLight position={[150, 0, 0]} />
          <Table
            scroll={scroll}
            caption={caption}
            scrollPosition={scrollPosition}
          />

          <OrbitControls />
        </Canvas>
      </div>

      <Overlay
        ref={overlay}
        caption={caption}
        scroll={scroll}
        setScrollPosition={setScrollPosition}
        currentScroll={scrollPosition}
      />
    </>
  );
};
