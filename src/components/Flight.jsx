import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Flight(props) {
  const { nodes, materials } = useGLTF("./models/Flight.gltf");

  return (
    <group {...props}>
      <group scale={[0.5, 0.5, 0.5]}>
        <mesh
          material={materials.White}
          geometry={nodes["buffer-0-mesh-0"].geometry}
        />
        <mesh
          material={materials.Red}
          geometry={nodes["buffer-0-mesh-0_1"].geometry}
        />
        <mesh
          material={materials.Gray}
          geometry={nodes["buffer-0-mesh-0_2"].geometry}
        />
        <mesh
          material={materials.Black}
          geometry={nodes["buffer-0-mesh-0_3"].geometry}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/Flight.gltf");
