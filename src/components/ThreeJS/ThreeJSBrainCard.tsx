"use client";

import styles from "./ThreeJSBrainCard.module.css";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import Link from "next/link";

export default function ThreeJSBrainCard({ item, uri, title }) {
  const ref = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    const pointLight = new THREE.PointLight("white", 100);
    pointLight.position.set(5, 0, 5);
    scene.add(pointLight);

    ref.current.appendChild(renderer.domElement);

    const textureLoader = new THREE.TextureLoader();
    const textTexture = textureLoader.load(`data:image/svg+xml,
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
      <text x="10" y="40" font-family="Arial" font-size="20" fill="white">${item.title}</text>
    </svg>`);

    const geometry = new THREE.BoxGeometry(15, 21, 2);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      map: textTexture,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 20;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (ref.current) {
        ref.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <Link ref={ref} className={styles.link} href={uri} />;
}

// 부모 컴포넌트인 ThreeDCardForm 에서 props로 데이터를 넘겨 받는다.
// 받은 데이터를 Three.js 를 사용해 컴포넌트를 생성한다.
