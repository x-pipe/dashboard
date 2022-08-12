import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import styles from "./main-scene.module.scss";
import { Leva, useControls } from "leva";
import { ParticlesBG } from "./ParticlesBG";
import { MainGroup } from "./MainGroup";
import { MainButton } from "../MainButton/MainButton";

type MainSceneProps = {
};

export const MainScene = ({}: MainSceneProps) => {
  const [isAuth, setIsAuth] = useState(false);
  const pointRef = useRef();

  const { position, color } = useControls({
    position: {
      value: { x: 0, y: 20, z: 0 },
      min: -100,
      max: 100,
      step: 0.5,
    },
    color: {
      value: "#1f1f1f",
    },
  });

  return (
    <>
      <Leva collapsed hidden/>
      <div className={styles.canvasHolder}>

        <div className={styles.uiHolder}>
          <div className={styles.textSection}>
            <h1 className={'animate__animated animate__fadeInDown'}>
              Easy fiat payments,<br/>
              for cryptoholders<br/>and DAO's
            </h1>
            <p className={'animate__animated animate__fadeInUp'}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </p>
            <MainButton title={'Start now'} onClick={() => null} className={'animate__animated animate__fadeInUp'}/>
          </div>
        </div>

        <Canvas
          dpr={window.devicePixelRatio}
          // camera={{ position: [-12, 28, 62], fov: 45}}
          camera={{ position: [8, 52, 70], fov: 65 }}
          shadows={{
            enabled: true,
            needsUpdate: true,
          }}
        >
          {/* <axesHelper scale={12} /> */}
          <color attach="background" args={["#1e1e1e"]} />
          {/* <ambientLight intensity={.2}/> */}
          {/* <spotLight position={[10, 20, 10]} angle={0.25} penumbra={1.2} /> */}

          <MainGroup />

          <ParticlesBG />
        </Canvas>
      </div>
    </>
  );
};
