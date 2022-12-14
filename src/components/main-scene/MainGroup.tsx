import { AccumulativeShadows, Cylinder, RandomizedLight, softShadows, useHelper } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useControls } from "leva";
import React, { useRef } from "react";
import { BoxGeometry, BoxHelper, BufferGeometry, Color, CylinderGeometry, DirectionalLightHelper, DoubleSide, Line3, LineBasicMaterial, LineDashedMaterial, PerspectiveCamera, PointLightHelper, TextureLoader } from "three";
import { mainMaterial } from "../../materials/main-materials";
import { Coin } from "./Coin";
import { CryptoLogos } from "./CryptoLogos";
import { gsap } from "gsap";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry";
import { CustomLine } from "../CustomLine";

export const FirstPlateLayer = () => {
  const [map] = useLoader(TextureLoader, ['matcaps/metall.png']);
  const cylRef1 = useRef<any>();
  // const mat = mainMaterial;

  useFrame((state, delta) => {
    const elTime = state.clock.getElapsedTime();

    // cylRef1.current.rotation.y = Math.PI * elTime * .082
  })

  return (
    <>
    {/* <axesHelper scale={10}/> */}
    <Cylinder 
      args={[18, 18, .3, 4, 4]}
      position={[0, -.7, 0]}
      ref={cylRef1}
      rotation={[0,0,0]}
      receiveShadow
    >
      <meshStandardMaterial
        color={'#ffffff'}
        // toneMapped={false}
        // transparent
        metalness={0}
        roughness={0}
        // opacity={.4}
      />
    </Cylinder>  
    </>

  )
}

export function MainGroup() {
  const mainGroupRef = useRef<any>();
  const pointRef = useRef<any>();
  const {position, plRot, plPos} = useControls({
    position: {
      value: {x: 0, y: 20, z: 10},
      min: -100, max: 100,
      step: .5
    },
    plRot: {
      value: {"x":0.25000000000000006,"y":-0.3,"z":0.12000000000000012},
      
      step: .01
    },
    plPos: {
      value: {"x":31,"y":3.5,"z":-36},
      step: .5
    }
  })
  // useHelper(pointRef, PointLightHelper);
  // useHelper(mainGroupRef, BoxHelper);

  useFrame(() => {
    // pointRef.current.shadow.radius = 3;
    // pointRef.current.shadow.mapSize.width = 512;
    // pointRef.current.shadow.mapSize.height = 512;
  })

          
  return(
    <>
      <pointLight ref={pointRef} castShadow
        color={'#fff'}
        intensity={.1}
        position={[plPos.x, plPos.y, plPos.z]}
        rotation={[plRot.x, plRot.y, plRot.z]}
      />

      <group ref={mainGroupRef} scale={1.5} position={[22, 2, -10]} rotation={[0, 0, 0]}>
        <CryptoLogos/>
        {/* <CustomLine/> */}
        <FirstPlateLayer />
        <Coin />
      </group>
    </>
  )
}