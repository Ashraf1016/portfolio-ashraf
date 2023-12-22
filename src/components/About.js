import { RGBELoader } from "three-stdlib";
import { Canvas,useLoader } from "@react-three/fiber";
import {
  Center,
  Text3D,
  Instances,
  Environment,
  Lightformer,
  OrbitControls,
  RandomizedLight,
  AccumulativeShadows,
  MeshTransmissionMaterial,
  Stage,
} from "@react-three/drei";
import { TextureLoader } from "three";
import { useEffect, useRef, useState } from "react";

import img from "../components/images/profile.jpeg";

export function About() {
  const reflinkedin = useRef();
  const refmail = useRef();
  const refInsta = useRef();

  const [insta, setInsta] = useState(null);
  const [linkedIn, setLinkedin] = useState(null);
  const [mail, setMail] = useState(null);
  const [profile, setProfile] = useState(null);

  const handleInsta = () => {
    refInsta.current.rotation.y = refInsta.current.rotation.y + 2;
    refInsta.current.rotation.x = refInsta.current.rotation.x + 2;
    refInsta.current.rotation.y = refInsta.current.rotation.y + 2;
    refInsta.current.rotation.x = refInsta.current.rotation.x + 2;
    setTimeout(() => {
      window.open("https://www.instagram.com/as_hr_af_pk/", "_blank");
    }, 2000);
  };
  const handleLinkedin = () => {
    reflinkedin.current.rotation.y = reflinkedin.current.rotation.y + 2;
    reflinkedin.current.rotation.x = reflinkedin.current.rotation.x + 2;
    reflinkedin.current.rotation.y = reflinkedin.current.rotation.y + 2;
    reflinkedin.current.rotation.x = reflinkedin.current.rotation.x + 2;
    setTimeout(() => {
      window.open(
        "  https://www.linkedin.com/in/ashraf-p-2a5254172/",
        "_blank"
      );
    }, 2000);
  };
  const handleMail = () => {
    refmail.current.rotation.y = refmail.current.rotation.y + 2;
    refmail.current.rotation.x = refmail.current.rotation.x + 2;
    refmail.current.rotation.y = refmail.current.rotation.y + 2;
    refmail.current.rotation.x = refmail.current.rotation.x + 2;
    setTimeout(() => {
      window.open("mailto:ashrafpeng@gmail.com", "_blank");
    }, 2000);
  };

  useEffect(() => {
    const loader = new TextureLoader();
    loader.load(
      "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
      setInsta
    );
    loader.load(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png",
      setLinkedin
    );
    loader.load(
      " https://lh3.googleusercontent.com/0rpHlrX8IG77awQMuUZpQ0zGWT7HRYtpncsuRnFo6V3c8Lh2hPjXnEuhDDd-OsLz1vua4ld2rlUYFAaBYk-rZCODmi2eJlwUEVsZgg",
      setMail
    );
    loader.load(img, setProfile);
  }, []);

  const config = {
    backside: true,
    samples: "16",
    resolution: "512",
    transmission: "0.6",
    clearcoat: "0",
    clearcoatRoughness: "0",
    thickness: "0.55",
    chromaticAberration: "5",
    anisotropy: "0.3",
    roughness: "0",
    distortion: "1",
    distortionScale: "1",
    temporalDistortion: "0.4",
    ior: "0.83",
    color: "#ba04a5",
    gColor: "#ff7eb3",
    shadow: "#750d57",
  };

  return (
    <Canvas
      shadows
      orthographic
      camera={{ position: [-10, 20, 20], zoom: 30 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* <Stage intensity={1.5} environment="city" shadows={{ type: 'accumulative', color:'#f2f2f5', colorBlend: 2, opacity: 2 }} adjustCamera={0.9}>
          <Model color={'#f2f2f5'} />
        </Stage> */}
      {/* <ImagePlane /> */}
      {/* <Model position={[0.025, -0.9, 1]} /> */}
      <color attach="background" args={["#f2f2f5"]} />
      {/* <Text
        config={config} 
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1, -10]}
      >
        Ashraf
      </Text> */}
      <Text
        config={config}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1, -3]}
      >
        let's connect
      </Text>

      <mesh position={[1, -1, -16]}>
        <planeBufferGeometry attach="geometry" />
        <meshBasicMaterial attach="material" map={profile} toneMapped={false} />
      </mesh>
      <pointLight position={[10, 10, 10]} />
      <mesh
        ref={refInsta}
        onClick={handleInsta}
        onPointerEnter={() =>
          (refInsta.current.rotation.y = refInsta.current.rotation.y + 2)
        }
        onPointerLeave={() =>
          (refInsta.current.rotation.y = refInsta.current.rotation.y - 2)
        }
        position={[0, 0, 4.25]}
        castShadow
      >
        <boxBufferGeometry args={[2, 2, 2]} />
        {insta && <meshStandardMaterial map={insta} />}
      </mesh>
      <mesh
        ref={reflinkedin}
        position={[8, 0, 4.25]}
        onClick={handleLinkedin}
        onPointerEnter={() =>
          (reflinkedin.current.rotation.y = reflinkedin.current.rotation.y + 2)
        }
        onPointerLeave={() =>
          (reflinkedin.current.rotation.y = reflinkedin.current.rotation.y - 2)
        }
        castShadow
      >
        <boxBufferGeometry args={[2, 2, 2]} />
        {linkedIn && <meshStandardMaterial map={linkedIn} />}
      </mesh>
      <mesh
        ref={refmail}
        position={[-8, 0, 4.25]}
        onClick={handleMail}
        onPointerEnter={() =>
          (refmail.current.rotation.y = refmail.current.rotation.y + 2)
        }
        onPointerLeave={() =>
          (refmail.current.rotation.y = refmail.current.rotation.y - 2)
        }
        castShadow
      >
        <boxBufferGeometry args={[2, 2, 2]} />
        {mail && <meshStandardMaterial map={mail} receiveShadow />}
      </mesh>

      {/** Controls */}
      <OrbitControls
        // autoRotate={autoRotate}
        autoRotateSpeed={-0.1}
        zoomSpeed={0.25}
        minZoom={40}
        maxZoom={140}
        enablePan={false}
        dampingFactor={0.05}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 3}
      />
      {/** The environment is just a bunch of shapes emitting light. This is needed for the clear-coat */}
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
      {/** Soft shadows */}
      <AccumulativeShadows
        frames={100}
        color="#750d57"
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
    </Canvas>
  );
}

const Grid = ({ number = 23, lineWidth = 0.026, height = 0.5 }) => (
  // Renders a grid and crosses as instances

  <Instances position={[0, -1.02, 0]}>
    <planeGeometry args={[lineWidth, height]} />
    <meshBasicMaterial color="#e00" />
    <gridHelper args={[100, 10000, "#000", "#000"]} position={[0, -0.01, 0]} />
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
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr"
  );
  return (
    <>
      <group>
        <Center scale={[0.8, 1, 1]} front top {...props}>
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
            <MeshTransmissionMaterial {...config} background={texture} />
          </Text3D>
        </Center>
        <Grid />
      </group>
    </>
  );
}
