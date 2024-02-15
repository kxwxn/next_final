"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import Link from "next/link";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { gsap } from "gsap";

export default function SoulPage() {
  const canvasRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    // RENDERER
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.shadowMap.enabled = true;
    // renderer.setPixelRatio(window.devicePixelRatio);
    canvasRef.current && canvasRef.current.appendChild(renderer.domElement);

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
    const ambientLight = new THREE.AmbientLight("white", 1);
    scene.add(ambientLight);

    // FONTLOADER OBJECT MESH ( Geometry & Material )
    const loader = new FontLoader();
    loader.load("/fonts/Jost_Regular.typeface.json", (font) => {
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
      const material = new THREE.MeshPhongMaterial({ color: "14946e" });

      // CUBE ( COMPLETE OBJECT made of MESH )
      const text = new THREE.Mesh(textGeo, material);
      scene.add(text);

      // RAYCASTER
      const raycaster = new THREE.Raycaster();
      const onMouseMove = (e: { clientX: number; clientY: number }) => {
        const coordinate: { x: number; y: number } = {
          x: (e.clientX / renderer.domElement.clientWidth) * 2 - 1,
          y: -(e.clientY / renderer.domElement.clientHeight) * 2 + 1,
        };

        // raycaster.setFromCamera(coordinate, camera);
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
        text.rotation.y += 0.001;
        renderer.render(scene, camera);
      };
      animate();
    });

    return () => {
      if (canvasRef.current) {
        canvasRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <Link ref={canvasRef} />;
}
