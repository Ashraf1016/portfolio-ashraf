/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/models/anim.glb 
Author: Spinnee (https://sketchfab.com/Spinnee)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/miss-hertz-66413c35bbc2422bb6ce53c5c862b1c1
Title: Miss Hertz
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/anim.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <primitive object={nodes._rootJoint} />
        <skinnedMesh geometry={nodes.Object_6.geometry} material={materials.Model_Mat} skeleton={nodes.Object_6.skeleton} />
        <skinnedMesh geometry={nodes.Object_8.geometry} material={materials.Model_Mat} skeleton={nodes.Object_8.skeleton} />
        <skinnedMesh geometry={nodes.Object_10.geometry} material={materials.Model_Mat} skeleton={nodes.Object_10.skeleton} />
        <skinnedMesh geometry={nodes.Object_12.geometry} material={materials.Model_Mat} skeleton={nodes.Object_12.skeleton} />
        <skinnedMesh geometry={nodes.Object_14.geometry} material={materials.Model_Mat} skeleton={nodes.Object_14.skeleton} />
        <skinnedMesh geometry={nodes.Object_16.geometry} material={materials.Model_Mat} skeleton={nodes.Object_16.skeleton} />
        <skinnedMesh geometry={nodes.Object_18.geometry} material={materials.Model_Mat} skeleton={nodes.Object_18.skeleton} />
        <skinnedMesh geometry={nodes.Object_20.geometry} material={materials.Model_Mat} skeleton={nodes.Object_20.skeleton} />
        <skinnedMesh geometry={nodes.Object_22.geometry} material={materials.Model_Mat} skeleton={nodes.Object_22.skeleton} />
        <skinnedMesh geometry={nodes.Object_24.geometry} material={materials.Model_Mat} skeleton={nodes.Object_24.skeleton} />
        <skinnedMesh geometry={nodes.Object_26.geometry} material={materials.Model_Mat} skeleton={nodes.Object_26.skeleton} />
        <skinnedMesh geometry={nodes.Object_28.geometry} material={materials.Model_Mat} skeleton={nodes.Object_28.skeleton} />
        <skinnedMesh geometry={nodes.Object_30.geometry} material={materials.Model_Mat} skeleton={nodes.Object_30.skeleton} />
        <skinnedMesh geometry={nodes.Object_32.geometry} material={materials.Model_Mat} skeleton={nodes.Object_32.skeleton} />
        <skinnedMesh geometry={nodes.Object_34.geometry} material={materials.Model_Mat} skeleton={nodes.Object_34.skeleton} />
        <skinnedMesh geometry={nodes.Object_36.geometry} material={materials.Model_Mat} skeleton={nodes.Object_36.skeleton} />
        <skinnedMesh geometry={nodes.Object_38.geometry} material={materials.Model_Mat} skeleton={nodes.Object_38.skeleton} />
        <skinnedMesh geometry={nodes.Object_40.geometry} material={materials.Model_Mat} skeleton={nodes.Object_40.skeleton} />
        <skinnedMesh geometry={nodes.Object_42.geometry} material={materials.Model_Mat} skeleton={nodes.Object_42.skeleton} />
        <skinnedMesh geometry={nodes.Object_44.geometry} material={materials.Model_Mat} skeleton={nodes.Object_44.skeleton} />
        <skinnedMesh geometry={nodes.Object_46.geometry} material={materials.Model_Mat} skeleton={nodes.Object_46.skeleton} />
        <skinnedMesh geometry={nodes.Object_48.geometry} material={materials.Model_Mat} skeleton={nodes.Object_48.skeleton} />
        <skinnedMesh geometry={nodes.Object_50.geometry} material={materials.Model_Mat} skeleton={nodes.Object_50.skeleton} />
        <skinnedMesh geometry={nodes.Object_52.geometry} material={materials.Model_Mat} skeleton={nodes.Object_52.skeleton} />
        <mesh geometry={nodes.Booster1_Low_Model_Mat_0.geometry} material={materials.Model_Mat} position={[99.727, 93.036, -117.588]} rotation={[-0.478, 0.292, -0.641]} />
        <mesh geometry={nodes.CannonBooster2_Low_Model_Mat_0.geometry} material={materials.Model_Mat} position={[-70.031, 85.247, 80.707]} rotation={[0.565, 0.053, 0.471]} />
        <mesh geometry={nodes.Booster2_Low1_Model_Mat_0.geometry} material={materials.Model_Mat} position={[-13.161, 177.308, -32.429]} rotation={[-0.08, 0.668, 0.049]} />
        <mesh geometry={nodes.Booster2_Low2_Model_Mat_0.geometry} material={materials.Model_Mat} position={[183.036, -14.724, -92.749]} rotation={[-0.629, 0.307, -1.297]} />
        <mesh geometry={nodes.CannonBooster1_Low_Model_Mat_0.geometry} material={materials.Model_Mat} position={[126.394, 62.271, 53.217]} rotation={[0.565, 0.053, -1.044]} />
        <mesh geometry={nodes.CannonBooster1_Low1_Model_Mat_0.geometry} material={materials.Model_Mat} position={[-144.903, -87.236, -24.614]} rotation={[0.684, 0.132, 2.159]} />
        <mesh geometry={nodes.Cannon_Low_Model_Mat_0.geometry} material={materials.Model_Mat} position={[-71.836, 82.17, 87.075]} rotation={[0.579, 0.039, 0.481]} />
        <mesh geometry={nodes.pCylinder16_Effects_Mat_0.geometry} material={materials.Effects_Mat} position={[-2.084, -4.261, 18.11]} rotation={[-1.379, 0.307, 0.355]} />
        <mesh geometry={nodes.pCylinder15_Effects_Mat_0.geometry} material={materials.Effects_Mat} position={[-0.671, -1.907, 16.173]} rotation={[-1.379, 0.307, 0.355]} />
        <mesh geometry={nodes.pCylinder19_Effects_Mat_0.geometry} material={materials.Effects_Mat} position={[-22.317, -12.287, 14.383]} rotation={[2.568, -0.312, -2.991]} />
        <mesh geometry={nodes.pCylinder20_Effects_Mat_0.geometry} material={materials.Effects_Mat} position={[-24.179, -11.455, 11.713]} rotation={[2.568, -0.312, -2.991]} />
        <mesh geometry={nodes.pPlane3_Effects_Mat_0.geometry} material={materials.Effects_Mat} position={[-22.193, -16.617, 24.858]} rotation={[1.987, 0.072, 1.33]} scale={7.962} />
        <mesh geometry={nodes.pPlane2_Effects_Mat_0.geometry} material={materials.Effects_Mat} position={[-2.414, -19.336, 28.508]} rotation={[1.856, -0.177, -1.427]} scale={6.794} />
        <mesh geometry={nodes.pPlane1_Effects_Mat_0.geometry} material={materials.Effects_Mat} position={[-11.584, -4.533, 27.323]} rotation={[1.966, 1.533, -1.45]} scale={5.571} />
        <mesh geometry={nodes.pCylinder18_Effects_Mat_0.geometry} material={materials.Effects_Mat} position={[-17.677, -0.013, 21.766]} rotation={[-2.024, -1.097, -0.347]} scale={0.526} />
        <mesh geometry={nodes.pCylinder17_Effects_Mat_0.geometry} material={materials.Effects_Mat} position={[-18.484, 5.475, 15.777]} rotation={[-2.138, -0.979, -0.577]} scale={0.526} />
        <mesh geometry={nodes.pCylinder21_Effects_Mat_0.geometry} material={materials.Effects_Mat} position={[-11.22, -15.87, 25.937]} rotation={[2.125, 0.178, -0.061]} scale={9.431} />
        <mesh geometry={nodes.pPlane5_Effects_Mat_0.geometry} material={materials.Effects_Mat} position={[-0.595, -12.541, 22.66]} rotation={[-1.078, -0.38, -1.45]} scale={5.324} />
        <mesh geometry={nodes.pPlane6_Effects_Mat_0.geometry} material={materials.Effects_Mat} position={[-16.503, -8.493, 32.492]} rotation={[1.666, -0.946, 1.003]} scale={4.641} />
        <mesh geometry={nodes.pPlane8_Effects_Mat_0.geometry} material={materials.Effects_Mat} position={[-9.113, -57.01, 38.208]} rotation={[-0.041, -0.802, 0.218]} scale={0.467} />
        <mesh geometry={nodes.pPlane9_Effects_Mat_0.geometry} material={materials.Effects_Mat} position={[-38.54, -29.727, 28.606]} rotation={[-0.134, -0.526, -1.005]} scale={0.436} />
        <mesh geometry={nodes.pPlane10_Effects_Mat_0.geometry} material={materials.Effects_Mat} position={[-0.15, -31.946, 59.15]} rotation={[-0.575, -0.213, 0.454]} scale={0.593} />
        <mesh geometry={nodes.pPlane11_Effects_Mat_0.geometry} material={materials.Effects_Mat} position={[-3.713, -55.831, 36.487]} rotation={[0.043, -0.111, 0.266]} scale={0.734} />
        <mesh geometry={nodes.pPlane12_Effects_Mat_0.geometry} material={materials.Effects_Mat} position={[-9.745, -29.48, 17.262]} rotation={[0.537, -0.217, -0.199]} scale={0.42} />
        <mesh geometry={nodes.pPlane13_Effects_Mat_0.geometry} material={materials.Effects_Mat} position={[-24.956, -20.325, 13.174]} rotation={[0.708, -0.421, -0.712]} scale={0.467} />
        <mesh geometry={nodes.pPlane14_Effects_Mat_0.geometry} material={materials.Effects_Mat} position={[-26.289, -60.603, 2.88]} rotation={[0.822, 0.344, -0.498]} scale={0.75} />
        <mesh geometry={nodes.pPlane15_Effects_Mat_0.geometry} material={materials.Effects_Mat} position={[-8.196, -50.963, 11.766]} rotation={[0.487, -0.139, -0.225]} scale={0.499} />
        <mesh geometry={nodes.pPlane16_Effects_Mat_0.geometry} material={materials.Effects_Mat} position={[-14.882, -54.881, 32.523]} scale={0.467} />
        <mesh geometry={nodes.pPlane17_Effects_Mat_0.geometry} material={materials.Effects_Mat} position={[-3.865, -48.923, 31.661]} scale={0.593} />
        <mesh geometry={nodes.pPlane18_Effects_Mat_0.geometry} material={materials.Effects_Mat} position={[13.281, -17.617, 44.099]} rotation={[-0.661, -0.063, 0.872]} scale={0.389} />
      </group>
    </group>
  )
}

useGLTF.preload('/anim.glb')
