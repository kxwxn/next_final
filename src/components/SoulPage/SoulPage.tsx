"use client";
import styles from "./SoulPage.module.css";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { white } from "kleur/colors";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function SoulPage() {
  const canvasRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // SCENE
    const scene = new THREE.Scene();

    // RENDERER
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      precision: "highp",
    });
    renderer.shadowMap.enabled = true;
    renderer.setPixelRatio(window.devicePixelRatio);
    canvasRef.current && canvasRef.current.appendChild(renderer.domElement);

    // CAMERA
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      1000,
    );
    camera.position.set(50, 50, 50);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    // LIGHT
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(20, 20, 20);
    scene.add(directionalLight);
    const dlHelper = new THREE.DirectionalLightHelper(
      directionalLight,
      5,
      "red",
    );
    scene.add(dlHelper);

    // OBJECT
    const geo = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    const material = new THREE.MeshStandardMaterial({ color: 0xffff00 });
    const boxGeo = new THREE.Mesh(geo, material);
    scene.add(boxGeo);

    // ORBIT CONTROLS
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.minDistance = 0.1;
    controls.maxDistance = 1000;
    controls.update();

    //RESPONSIVE WINDOW FUNCTION
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", onWindowResize);

    // ANIMATION FUNCTION
    const animate = () => {
      requestAnimationFrame(animate);
      boxGeo.rotation.y += 0.01;
      boxGeo.rotation.x += 0.01;
      renderer.render(scene, camera);
    };
    animate();
    // CLEAN UP FUNCTION
    return () => {
      if (canvasRef.current) {
        canvasRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);
  return (
    <div className={styles.container}>
      <div ref={canvasRef} className={styles.content} />
    </div>
  );
}
