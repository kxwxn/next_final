"use client";
import styles from "./BodyThreeSpace.module.css";
import { MutableRefObject, useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { PositionalAudioHelper } from "three/examples/jsm/helpers/PositionalAudioHelper";

export default function BodyThreeSpace() {
  const spaceRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null!);
  useEffect(() => {
    // CAMERA
    const camera = new THREE.PerspectiveCamera(
      100,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.set(10, 10, 10);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

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
    const ambientLight = new THREE.AmbientLight("white", 1.1);
    scene.add(ambientLight);

    // SPACE
    const spaceMaps = [];
    const textureFt = new THREE.TextureLoader().load(
      "texture/space21/meadow_ft.jpg",
    );
    const textureBk = new THREE.TextureLoader().load(
      "texture/space21/meadow_bk.jpg",
    );
    const textureUp = new THREE.TextureLoader().load(
      "texture/space21/meadow_up.jpg",
    );
    const textureDn = new THREE.TextureLoader().load(
      "texture/space21/meadow_dn.jpg",
    );
    const textureRt = new THREE.TextureLoader().load(
      "texture/space21/meadow_rt.jpg",
    );
    const textureLf = new THREE.TextureLoader().load(
      "texture/space21/meadow_lf.jpg",
    );

    spaceMaps.push(
      new THREE.MeshStandardMaterial({
        map: textureFt,
      }),
    );
    spaceMaps.push(
      new THREE.MeshStandardMaterial({
        map: textureBk,
      }),
    );
    spaceMaps.push(
      new THREE.MeshStandardMaterial({
        map: textureUp,
      }),
    );
    spaceMaps.push(
      new THREE.MeshStandardMaterial({
        map: textureDn,
      }),
    );
    spaceMaps.push(
      new THREE.MeshStandardMaterial({
        map: textureRt,
      }),
    );
    spaceMaps.push(
      new THREE.MeshStandardMaterial({
        map: textureLf,
      }),
    );

    for (let i = 0; i < 6; i++) {
      spaceMaps[i].side = THREE.BackSide;
    }
    const spaceGeo = new THREE.BoxGeometry(1000, 1000, 1000);

    const space = new THREE.Mesh(spaceGeo, spaceMaps);
    scene.add(space);

    // GRID
    // const grid = new THREE.GridHelper(400, 400, "black", "black");
    // scene.add(grid);

    // AXES
    const axesHelper = new THREE.AxesHelper(100);
    scene.add(axesHelper);

    // AUDIO LISTNER
    const listener = new THREE.AudioListener();
    camera.add(listener);

    // creating the POSITIONAL AUDIO OBJECT (passing in the listner)
    const positionalAudio = new THREE.PositionalAudio(listener);

    const helper = new PositionalAudioHelper(positionalAudio, 0.1);
    positionalAudio.add(helper);

    // loading a SOUND and set it as the POSITIONAL AUDIO OBJECT's buffer
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
      room.scale.set(3, 3, 3);
      room.position.y = 3.5;
    });
    loader.load("models/speaker.glb", (glb) => {
      const speaker = glb.scene;
      scene.add(speaker);
      speaker.position.set(1, 1, 1);
      speaker.scale.set(1, 1, 1);
      speaker.add(positionalAudio);
      scene.add(speaker);
      animate();
    });

    // ORBIT CONTROLS
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.minDistance = 0.1;
    controls.maxDistance = 38;
    controls.update();

    //controls.update()는 카메라 변환설정을 수동으로 변경한 후에 호출해야 합니다.
    // camera.position.set(0, 20, 10); 여기서 카메라 위치 세팅은 위의 CAMERA에서 완료.
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
