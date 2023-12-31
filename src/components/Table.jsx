/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
/* eslint-disable react-hooks/exhaustive-deps */

import {
  useGLTF,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
export function Table({ scrollPosition,setLoading }, props) {
  let headset = null
  headset = useGLTF("./models/headset.glb");
  const headsetRef = useRef();
  useEffect(() => {
    const rotationSpeed = 0.005; // Adjust the rotation speed as needed. Increase for faster rotation, decrease for slower rotation.
    const rotationValue = scrollPosition * rotationSpeed;
    headsetRef.current.rotation.x = rotationValue * 0.04;
    const zoomSpeed = 0.001; // Adjust the zoom speed as needed.
    const newZoomLevel = 1 + (scrollPosition / 2) * zoomSpeed;
    headsetRef.current.scale.set(
      newZoomLevel * 0.5,
      newZoomLevel * 0.5,
      newZoomLevel * 0.5
    );
     headsetRef.current.position.set(
        newZoomLevel * 1,
        newZoomLevel * -1.2,
        newZoomLevel
    );
    headsetRef.current.rotation.set(
      newZoomLevel + 2,
      newZoomLevel + 2,
      newZoomLevel + 2
    );
  }, [scrollPosition]);
  useEffect(()=>{
    if(headset){
      setLoading(false)
    }
  },[headset])
  useFrame(() => {
    headsetRef.current.rotation.y += 0.002;
  });
  // useFrame((state, delta) => (hammerRef.current.rotation.y += delta));

  return (
    <>
      <group {...props} dispose={null} ref={headsetRef} position={[0,0,0]}>
        <group rotation={[-Math.PI / 2, -0.23, 5]} scale={1}>
          <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group
              position={[154.991, 167.707, -125.521]}
              rotation={[-1.796, -0.161, 0.122]}
              scale={100.789}
            >
              <mesh
                geometry={headset.nodes.Mounting_Detail1_low_Color_0.geometry}
                material={headset.materials.Color}
              />
              <mesh
                geometry={headset.nodes.Auricle1_low_Color_0.geometry}
                material={headset.materials.Color}
                position={[0.053, -0.001, -0.452]}
              />
              <mesh
                geometry={headset.nodes.Shell_connection1_low_Color_0.geometry}
                material={headset.materials.Color}
                position={[0.138, 0, -0.452]}
              />
              <mesh
                geometry={headset.nodes.Dummy_amplifier12_low_Color_0.geometry}
                material={headset.materials.Color}
                position={[0.364, 0.005, -0.436]}
              />
              <mesh
                geometry={headset.nodes.Dummy_amplifier1_low_Color_0.geometry}
                material={headset.materials.Color}
                position={[0.281, -0.001, -0.451]}
              />
              <mesh
                geometry={headset.nodes.Dummy_amplifier11_low_Color_0.geometry}
                material={headset.materials.Color}
                position={[0.276, -0.004, -0.417]}
              />
              <mesh
                geometry={headset.nodes.Dummy_amplifier13_low_Color_0.geometry}
                material={headset.materials.Color}
                position={[0.426, 0.005, -0.436]}
              />
              <mesh
                geometry={headset.nodes.Speaker1_low_Color_0.geometry}
                material={headset.materials.Color}
                position={[-0.378, 0, -0.452]}
              />
              <mesh
                geometry={headset.nodes.Bracing1_low_Color_0.geometry}
                material={headset.materials.Color}
                position={[-0.154, 0, -0.453]}
              />
            </group>
            <group
              position={[175.725, 40.606, -93.962]}
              rotation={[-1.815, -0.23, 0.432]}
              scale={95.926}
            >
              <mesh
                geometry={headset.nodes.Plug1_low_Color_0.geometry}
                material={headset.materials.Color}
              />
              <mesh
                geometry={headset.nodes.Plug11_low_Color_0.geometry}
                material={headset.materials.Color}
                position={[0, 0, -0.151]}
              />
            </group>
            <group
              position={[79.266, 22.266, 16.418]}
              rotation={[-1.721, -1.182, -0.147]}
              scale={95.926}
            >
              <mesh
                geometry={headset.nodes.Plug2_low_Color_0.geometry}
                material={headset.materials.Color}
              />
              <mesh
                geometry={headset.nodes.Plug22_low_Color_0.geometry}
                material={headset.materials.Color}
                position={[0, 0, -0.151]}
              />
            </group>
            <group
              position={[-156.307, 170.893, -87.608]}
              rotation={[-1.833, 0.143, 0.121]}
              scale={100.789}
            >
              <mesh
                geometry={headset.nodes.Mounting_Detail2_low_Color_0.geometry}
                material={headset.materials.Color}
              />
              <mesh
                geometry={headset.nodes.Speaker2_low_Color_0.geometry}
                material={headset.materials.Color}
                position={[0.378, 0, -0.452]}
              />
              <mesh
                geometry={headset.nodes.Auricle2_low_Color_0.geometry}
                material={headset.materials.Color}
                position={[-0.053, -0.001, -0.452]}
              />
              <mesh
                geometry={headset.nodes.Shell_connection2_low_Color_0.geometry}
                material={headset.materials.Color}
                position={[-0.138, 0, -0.452]}
              />
              <mesh
                geometry={headset.nodes.Dummy_amplifier22_low_Color_0.geometry}
                material={headset.materials.Color}
                position={[-0.364, 0.005, -0.436]}
              />
              <mesh
                geometry={headset.nodes.Dummy_amplifier2_low_Color_0.geometry}
                material={headset.materials.Color}
                position={[-0.281, -0.001, -0.451]}
              />
              <mesh
                geometry={headset.nodes.Dummy_amplifier21_low_Color_0.geometry}
                material={headset.materials.Color}
                position={[-0.276, -0.004, -0.417]}
              />
              <mesh
                geometry={headset.nodes.Dummy_amplifier23_low_Color_0.geometry}
                material={headset.materials.Color}
                position={[-0.426, 0.005, -0.436]}
              />
              <mesh
                geometry={headset.nodes.Bracing2_low_Color_0.geometry}
                material={headset.materials.Color}
                position={[0.154, 0, -0.453]}
              />
            </group>
            <group
              position={[0, 12.156, 6.325]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            >
              <mesh
                geometry={headset.nodes.Biscuit1_low_Color_0.geometry}
                material={headset.materials.Color}
              />
              <mesh
                geometry={headset.nodes.Biscuit2_low_Color_0.geometry}
                material={headset.materials.Color}
                position={[0, -0.058, 0.873]}
              />
              <mesh
                geometry={headset.nodes.Cream2_low_Color_0.geometry}
                material={headset.materials.Color}
                position={[0, -0.054, 0.386]}
              />
              <mesh
                geometry={headset.nodes.Cream1_low_Color_0.geometry}
                material={headset.materials.Color}
                position={[0, -0.06, 1.051]}
                scale={1.135}
              />
            </group>
            <group
              position={[5.165, 206.826, -48.819]}
              rotation={[-1.494, -0.012, 0.688]}
              scale={76.897}
            >
              <mesh
                geometry={headset.nodes.Souffle_low_Color_0.geometry}
                material={headset.materials.Color}
              />
              <mesh
                geometry={headset.nodes.Chocolate2_low_Color_0.geometry}
                material={headset.materials.Color}
                position={[-1.08, -0.555, -0.447]}
                rotation={[0.101, -0.269, 0.227]}
                scale={1.114}
              />
              <mesh
                geometry={headset.nodes.Chocolate_low_Color_0.geometry}
                material={headset.materials.Color}
                position={[-0.336, -1.075, -0.494]}
                rotation={[0.187, 0.15, -0.455]}
                scale={0.973}
              />
              <mesh
                geometry={headset.nodes.Chocolate3_low_Color_0.geometry}
                material={headset.materials.Color}
                position={[-1.044, -1.14, -0.61]}
                rotation={[-2.96, -0.388, -1.306]}
                scale={0.947}
              />
              <mesh
                geometry={headset.nodes.Chocolate4_low_Color_0.geometry}
                material={headset.materials.Color}
                position={[0.639, 0.086, 0.115]}
                rotation={[-2.738, -0.513, 1.497]}
                scale={0.977}
              />
              <mesh
                geometry={headset.nodes.Chocolate5_low_Color_0.geometry}
                material={headset.materials.Color}
                position={[-0.149, 1.006, -0.484]}
                rotation={[0.052, 0.389, 0.873]}
                scale={1.207}
              />
              <mesh
                geometry={headset.nodes.Chocolate6_low_Color_0.geometry}
                material={headset.materials.Color}
                position={[-0.28, -0.451, 0.086]}
                rotation={[0.16, 0.331, 0.171]}
                scale={0.801}
              />
              <mesh
                geometry={headset.nodes.Chocolate7_low_Color_0.geometry}
                material={headset.materials.Color}
                position={[0.567, -0.707, -0.453]}
                rotation={[0.701, 0.848, 0.737]}
                scale={0.949}
              />
              <mesh
                geometry={headset.nodes.Chocolate8_low_Color_0.geometry}
                material={headset.materials.Color}
                position={[1.052, -0.005, -0.44]}
                rotation={[-0.152, 0.57, -2.754]}
                scale={0.883}
              />
              <mesh
                geometry={headset.nodes.Chocolate9_low_Color_0.geometry}
                material={headset.materials.Color}
                position={[-0.725, 0.654, -0.568]}
                rotation={[-2.187, 0.046, -2.103]}
                scale={0.801}
              />
              <mesh
                geometry={headset.nodes.Chocolate10_low_Color_0.geometry}
                material={headset.materials.Color}
                position={[1.02, -0.45, -0.591]}
                rotation={[2.897, -0.204, 1.721]}
                scale={0.801}
              />
              <mesh
                geometry={headset.nodes.Chocolate11_low_Color_0.geometry}
                material={headset.materials.Color}
                position={[-0.382, 0.646, -0.115]}
                rotation={[-0.359, -0.445, -1.548]}
                scale={0.61}
              />
              <mesh
                geometry={headset.nodes.Chocolate12_low_Color_0.geometry}
                material={headset.materials.Color}
                position={[-0.043, 0.483, 0.162]}
                rotation={[2.035, 0.228, 1.048]}
                scale={0.586}
              />
            </group>
            <mesh
              geometry={headset.nodes.Headboard_low_Color_0.geometry}
              material={headset.materials.Color}
              position={[1.653, 130.333, -97.122]}
              rotation={[-1.812, -0.03, 0.12]}
              scale={100.789}
            />
            <mesh
              geometry={headset.nodes.Pillow_Headboard_low_Color_0.geometry}
              material={headset.materials.Color}
              position={[1.653, 130.333, -97.122]}
              rotation={[-1.812, -0.03, 0.12]}
              scale={100.789}
            />
            <mesh
              geometry={headset.nodes.Wire_low_Color_0.geometry}
              material={headset.materials.Color}
              position={[148.854, -14.435, -70.805]}
              rotation={[-Math.PI / 2, -1.484, 0]}
              scale={100}
            />
          </group>
        </group>
      </group>
    </>
  );
}
