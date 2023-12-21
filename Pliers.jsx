/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/models/pliers.glb 
Author: Matthias Schmitz (https://sketchfab.com/Ripred)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/pliers-6ac0575a12d7494793fad7ae8ae8f6fe
Title: Pliers
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/pliers.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.clawL_lowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 76.168, -0.722]} rotation={[0, 0, 0.175]} />
      <mesh geometry={nodes.handle_lowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 76.168, -0.722]} rotation={[0, 0, 0.175]} />
      <mesh geometry={nodes.clawR_lowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 76.168, -0.722]} rotation={[0, 0, 0.175]} />
    </group>
  )
}

useGLTF.preload('/pliers.glb')
