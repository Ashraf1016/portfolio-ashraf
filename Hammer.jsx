/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/models/hammer.glb 
Author: iszologyak (https://sketchfab.com/iszologyak)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/fire-hammer-concept-by-casandra-gustafson-e9f28eaeeb664180a0175c3db193b789
Title: Fire Hammer (Concept by Casandra Gustafson)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/hammer.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes.head_spike_L_lambert1_0.geometry} material={materials.lambert1} />
        <mesh geometry={nodes.head_L_lambert1_0.geometry} material={materials.lambert1} />
        <mesh geometry={nodes.head_wood_L_lambert1_0.geometry} material={materials.lambert1} />
        <mesh geometry={nodes.head_spikes_L_lambert1_0.geometry} material={materials.lambert1} />
        <mesh geometry={nodes.head_spikes_holder_L_lambert1_0.geometry} material={materials.lambert1} />
        <mesh geometry={nodes.shaft_to_head_L_lambert1_0.geometry} material={materials.lambert1} />
        <mesh geometry={nodes.shaft_wood_L_lambert1_0.geometry} material={materials.lambert1} />
        <mesh geometry={nodes.shaft_cloth_L_lambert1_0.geometry} material={materials.lambert1} position={[-0.138, 0.804, 0.347]} scale={1.024} />
        <mesh geometry={nodes.shaft_head_L_lambert1_0.geometry} material={materials.lambert1} />
        <mesh geometry={nodes.fur_top_L_lambert1_0.geometry} material={materials.lambert1} position={[5.469, -11.795, -14.788]} scale={[3.521, 2.778, 3.486]} />
        <mesh geometry={nodes.fur_mid_L_lambert1_0.geometry} material={materials.lambert1} position={[5.429, -25.203, -14.694]} scale={[3.546, 3.113, 3.546]} />
        <mesh geometry={nodes.shaft_belt_top_L_lambert1_0.geometry} material={materials.lambert1} position={[5.559, -28.55, -14.743]} rotation={[-Math.PI, 0.102, -Math.PI]} scale={[2.238, 2.022, 2.238]} />
        <mesh geometry={nodes.shaft_belt_bottom_L_lambert1_0.geometry} material={materials.lambert1} position={[5.516, -38.264, -14.667]} scale={[2.099, 1.996, 2.099]} />
        <mesh geometry={nodes.fur_bottom_L_lambert1_0.geometry} material={materials.lambert1} position={[5.309, -41.778, -14.615]} scale={[3.424, 2.587, 3.424]} />
      </group>
    </group>
  )
}

useGLTF.preload('/hammer.glb')