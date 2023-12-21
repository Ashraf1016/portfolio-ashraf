import { RGBELoader } from "three-stdlib";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  Center,
  Text3D,
  Instance,
  Instances,
  Environment,
  Lightformer,
  OrbitControls,
  RandomizedLight,
  AccumulativeShadows,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import { MeshLambertMaterial } from "three";
import { DoubleSide } from "three";

export default function Home() {
  const autoRotate = false;
  const shadow = "#ff7eb3";

  return (
    <>
      <color attach="background" args={["#f2f2f5"]} />
      <Text
        text="AshrafP"
        backside="true"
        samples="16"
        resolution="512"
        transmission="0.6"
        clearcoat="0"
        clearcoatRoughness="0"
        thickness="0.55"
        chromaticAberration="5"
        anisotropy="0.3"
        roughness="0"
        distortion="1"
        distortionScale="1"
        temporalDistortion="0.4"
        ior="0.83"
        color="#ff9cf5"
        gColor="#ff7eb3"
        shadow="#750d57"
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1, -3]}
      >
        AshrafP
      </Text>

      <OrbitControls
        autoRotate={false}
        autoRotateSpeed={3}
        zoomSpeed={1}
        minZoom={40}
        maxZoom={500}
        enablePan={true}
        dampingFactor={0.05}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 3}
      />
      <Environment resolution={32}>
        <group rotation={[-Math.PI / 4, -0.3, 0]}>
          <Lightformer
            intensity={20}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={[10, 10, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={[10, 2, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={[10, 2, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={[20, 2, 1]}
          />
          <Lightformer
            type="ring"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-0.1, -1, -5]}
            scale={10}
          />
        </group>
      </Environment>
      <AccumulativeShadows
        temporal
        frames={100}
        color={shadow}
        colorBlend={5}
        toneMapped={true}
        alphaTest={0.9}
        opacity={1}
        scale={30}
        position={[0, -1.01, 0]}
      >
        <RandomizedLight
          amount={4}
          radius={10}
          ambient={0.5}
          intensity={1}
          position={[0, 10, -10]}
          size={15}
          mapSize={1024}
          bias={0.0001}
        />
      </AccumulativeShadows>
    </>
  );
}

const Grid = ({ number = 100, lineWidth = 500, height = 600 }) => (
  <Instances position={[0, -1.02, 0]}>
    <planeGeometry args={[lineWidth, height]} color="#000" />
    <meshBasicMaterial color="#000" />
    <gridHelper args={[900, 900, "#000", "#000"]} position={[0, -0.01, 0]} />
    {/* <planeBufferGeometry attach="geometry" args={[100,100]}/>
    <MeshLambertMaterial atta */}
  </Instances>
);

function Text({
  children,
  config,
  font = "/Inter_Medium_Regular.json",
  ...props
}) {
  const texture = useLoader(
    RGBELoader,
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/syferfontein_18d_clear_puresky_4k.hdr"
  );
  return (
    <>
      <group>
        <Center scale={[0.8, 1, 1]} {...props}>
          <Text3D
            castShadow
            bevelEnabled
            font={font}
            scale={5}
            letterSpacing={-0.03}
            height={0.25}
            bevelSize={0.01}
            bevelSegments={10}
            curveSegments={128}
            bevelThickness={0.01}
          >
            {children}
            <MeshTransmissionMaterial
              reflectivity={0.5}
              {...config}
              background={texture}
            />
          </Text3D>
        </Center>
        <mesh
          position={[0, -1.02, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1, 1, 1]}
        >
          <planeBufferGeometry args={[500, 600]} />
          <meshBasicMaterial color="#000" side={DoubleSide} />
        </mesh>
      </group>
    </>
  );
}
