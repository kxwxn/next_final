"use client";

import styles from "./ThreeJSBrainCard.module.css";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import Link from "next/link";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { black } from "kleur/colors";

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
      const midX =
        (textGeo.boundingBox.max.x - textGeo.boundingBox.min.x) / 2.0;
      const midZ =
        (textGeo.boundingBox.max.z - textGeo.boundingBox.min.z) / 2.0;
      textGeo.translate(-midX, 0, -midZ);

      // MATERIAL
      const materialF = new THREE.MeshPhongMaterial({
        color: "black",
      });
      const materialB = new THREE.MeshPhongMaterial({
        color: "black",
      });

      // CUBE ( COMPLETE OBJECT made of MESH )
      const cube = new THREE.Mesh(textGeo, [materialF, materialB]);
      scene.add(cube);

      // CONTROLS
      // const controls = new OrbitControls(camera, renderer.domElement);

      // ANIMATION
      const animate = () => {
        requestAnimationFrame(animate);
        // cube.rotation.y += 0.001;
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
