import { OrbitControls, Stage } from "@react-three/drei";
import Flight from "./Flight";
import { Hand } from "./Hand";
import Home from "./home";
import { Table } from "./Table";

export const HandsExperience = () => {
  return (
    <>
      <Stage
        intensity={1.5}
        environment="city"
        shadows={{
          type: "accumulative",
          color: "#11c",
          colorBlend: 5,
          opacity: 5,
        }}
        adjustCamera={2}
      >
        <Hand />
      </Stage>
      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
};