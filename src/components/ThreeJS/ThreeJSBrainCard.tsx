"use client";

import styles from "./ThreeJSBrainCard.module.css";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import Link from "next/link";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { gsap } from "gsap";

export default function ThreeJSBrainCard({ uri, title }) {
  const ref = useRef();
  useEffect(() => {
    // RENDERER
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.shadowMap.enabled = true;
    // renderer.setPixelRatio(window.devicePixelRatio);
    ref.current.appendChild(renderer.domElement);

    // SCENE
    const scene = new THREE.Scene();

    // CAMERA
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      10,
    );
    camera.position.z = 10;

    // LIGHT
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(-1, 2, 4);
    scene.add(light);

    // FONTLOADER OBJECT MESH ( Geometry & Material )
    const loader = new FontLoader();
    loader.load("/Jost_Regular.json", (font) => {
      // GEOMETRY
      const textGeo = new TextGeometry(title, {
        font: font,
        size: 3,
        height: 1,
      });

      // ALIGN GRAVITY CENTRE === textGeo.center()
      textGeo.computeBoundingBox();
      textGeo.center();

      // MATERIAL
      const material = new THREE.MeshStandardMaterial({
        color: "orange",
        metalness: 0.9,
        roughness: 0.2,
        wireframe: true,
      });

      // CUBE ( COMPLETE OBJECT made of MESH )
      const cube = new THREE.Mesh(textGeo, material);
      scene.add(cube);

      // RAYCASTER
      const raycaster = new THREE.Raycaster();
      const onMouseMove = (e) => {
        const coordinate = {
          x: (e.clientX / renderer.domElement.clientWidth) * 2 - 1,
          y: -(e.clientY / renderer.domElement.clientHeight) * 2 + 1,
        };

        raycaster.setFromCamera(coordinate, camera);
        const interseption = raycaster.intersectObjects(scene.children, true);

        if (interseption.length > 0) {
          console.log("in");
        } else {
          ("out");
        }
      };

      renderer.domElement.addEventListener("mousemove", onMouseMove);

      // ANIMATION
      const animate = () => {
        requestAnimationFrame(animate);
        cube.rotation.y += 0.001;
        renderer.render(scene, camera);
      };

      animate();
    });

    return () => {
      if (ref.current) {
        ref.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <Link ref={ref} className={styles.link} href={uri} />;
}
