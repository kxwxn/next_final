"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { FontLoader } from "three/addons/loaders/FontLoader.js";

export default function BodyThreeSpace() {
  const ref = useRef();
  useEffect(() => {
    // RENDERER
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    ref.current.appendChild(renderer.domElement);

    // SCENE
    const scene = new THREE.Scene();

    // CAMERA
    const camera = new THREE.PerspectiveCamera(
      74,
      window.innerWidth / window.innerHeight,
      0.1,
      100,
    );
    camera.position.z = 2;

    // LIGHT
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(-1, 2, 4);
    scene.add(light);

    // FONTLOADER OBJECT MESH ( Geometry & Material )
    const loader = new FontLoader();
    loader.load("/Jost_Regular.json", (font) => {
      // GEOMETRY
      const textGeo = new TextGeometry("SAMPLE", {
        font: font,
        size: 0.3,
        height: 0.2,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.03,
        bevelOffset: 0.005,
        bevelSegments: 24,
      });

      // ALIGN GRAVITY CENTRE === textGeo.center()
      textGeo.computeBoundingBox();
      const midX =
        (textGeo.boundingBox.max.x - textGeo.boundingBox.min.x) / 2.0;
      const midZ =
        (textGeo.boundingBox.max.z - textGeo.boundingBox.min.z) / 2.0;
      textGeo.translate(-midX, 0, -midZ);

      // MATERIAL
      const material = new THREE.MeshStandardMaterial({
        color: "#689F38",
        roughness: 0.3,
        metalness: 0.7,
      });

      // CUBE ( COMPLETE OBJECT made of MESH )
      const cube = new THREE.Mesh(textGeo, material);
      scene.add(cube);

      // ANIMATION
      const animate = () => {
        requestAnimationFrame(animate);
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
      };

      animate();
    });

    // const geo = new THREE.BoxGeometry(1, 1, 1);
    // const material = new THREE.MeshPhongMaterial({ color: 0x44a88 });

    // const cube = new THREE.Mesh(geo, material);
    // scene.add(cube);

    return () => {
      if (ref.current) {
        ref.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div>
      <div ref={ref}></div>
    </div>
  );
}
