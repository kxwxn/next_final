"use client";
import styles from "./BodyThreeSpace.module.css";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { PositionalAudioHelper } from "three/addons/helpers/PositionalAudioHelper.js";

export default function BodyThreeSpace() {
  const spaceRef = useRef();
  const audioRef = useRef();
  useEffect(() => {
    // CAMERA
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100,
    );
    camera.position.z = 0;

    // SCENE
    const scene = new THREE.Scene();
    //     scene.background = new THREE.Color("beige");

    // RENDERER
    const renderer = new THREE.WebGL1Renderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    spaceRef.current && spaceRef.current.appendChild(renderer.domElement);
    renderer.render(scene, camera);

    // LIGHT
    const pointLight = new THREE.PointLight("white", 100);
    pointLight.position.set(5, 10, 5);
    scene.add(pointLight);
    const ambientLight = new THREE.AmbientLight("white", 1);
    scene.add(ambientLight);

    // GRID
    const grid = new THREE.GridHelper(400, 400, "black", "black");
    scene.add(grid);

    // AUDIO LISTNER
    const listener = new THREE.AudioListener();
    camera.add(listener);

    const audioElement = audioRef.current;
    audioElement.play();

    // creating the POSITIONAL AUDIO OBJECT (passing in the listner)
    const positionalAudio = new THREE.PositionalAudio(listener);
    positionalAudio.setMediaElementSource(audioElement);
    positionalAudio.setRefDistance(1);
    positionalAudio.setDirectionalCone(180, 230, 0.1);

    const helper = new PositionalAudioHelper(positionalAudio, 0.1);
    positionalAudio.add(helper);

    // loading a SOUND and set it as the POSITIONALAUDIO OBJECT's buffer
    const audioLoader = new THREE.AudioLoader();
    audioLoader.load("music/Anywhere.mp3", function (buffer) {
      positionalAudio.setBuffer(buffer);
      positionalAudio.autoplay;
      positionalAudio.setRefDistance(20);
      positionalAudio.play();
    });

    // // create an object for the sound to play from
    // const sphere = new THREE.SphereGeometry(0.2, 32, 16);
    // const material = new THREE.MeshPhongMaterial({ color: 0xff2200 });
    // const mesh = new THREE.Mesh(sphere, material);
    // scene.add(mesh);
    //
    // // finally add the sound to the mesh
    // mesh.add(sound);

    // GLB OBJECT LOAD (THE GEO)
    const loader = new GLTFLoader();
    loader.load("/models/room.glb", (glb) => {
      const room = glb.scene;
      scene.add(room);
      room.scale.set(10, 10, 10);
      room.position.y = 13;
    });
    loader.load("models/speaker.glb", (glb) => {
      const speaker = glb.scene;
      scene.add(speaker);
      speaker.position.set(1.1, 4, 1.1);
      speaker.scale.set(3, 3, 3);
      speaker.add(positionalAudio);
      scene.add(speaker);
      animate();
    });

    // ORBIT CONTROLS
    const controls = new OrbitControls(camera, renderer.domElement);

    //controls.update()는 카메라 변환설정을 수동으로 변경한 후에 호출해야 합니다.
    camera.position.set(0, 20, 10);
    controls.update();

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // RESPONSIVE
    const responsiveWindow = () => {
      camera.aspect = window.innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", responsiveWindow);

    // componentWillUnmount
    return () => {
      if (spaceRef.current) {
        spaceRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.title}>What can you find here?</div>
      <div ref={spaceRef} className={styles.content} />
      <audio
        ref={audioRef}
        loop
        id="music"
        preload="auto"
        style={{ display: "none" }}
      >
        <source src="music/anywhere.mp3" type="audio/mpeg" />
        <source src="music/DeepInADream.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}

// 오브젝트들의 위치이동 업데이트 필요.
