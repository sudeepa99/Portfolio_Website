"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";

type ModelProps = {
  modelPath: string;
};

function Model({ modelPath }: ModelProps) {
  const { scene } = useGLTF(modelPath);
  const ref = useRef<THREE.Group>(null);

  // Auto rotate
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002;
    }
  });

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    if (!box.isEmpty()) {
      const size = new THREE.Vector3();
      box.getSize(size);
      const maxDim = Math.max(size.x, size.y, size.z);
      const target = 2.6;
      const scale = maxDim > 0 ? target / maxDim : 1;
      if (ref.current) {
        ref.current.scale.setScalar(scale);
      }
      const center = new THREE.Vector3();
      box.getCenter(center);
      if (ref.current) {
        ref.current.position.set(
          -center.x * scale,
          -center.y * scale - 0.2,
          -center.z * scale
        );
      }
    }

    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const mat = mesh.material;
        if (Array.isArray(mat)) {
          mat.forEach((m) => {
            if (
              m instanceof THREE.MeshStandardMaterial ||
              m instanceof THREE.MeshPhysicalMaterial
            ) {
              m.color = new THREE.Color("#2b2b2b");
              m.roughness = 0.65;
              m.metalness = 0.05;
            }
          });
        } else if (
          mat instanceof THREE.MeshStandardMaterial ||
          mat instanceof THREE.MeshPhysicalMaterial
        ) {
          mat.color = new THREE.Color("#2b2b2b");
          mat.roughness = 0.65;
          mat.metalness = 0.05;
        } else {
          mesh.material = new THREE.MeshStandardMaterial({
            color: "#2b2b2b",
            roughness: 0.65,
            metalness: 0.05,
          });
        }
      }
    });
  }, [scene]);

  return (
    <primitive ref={ref} object={scene} scale={1.2} position={[0, -1.5, 0]} />
  );
}

export default function ThreeDModel({ modelPath }: ModelProps) {
  return (
    <Canvas
      gl={{ antialias: true, alpha: true }}
      onCreated={({ gl, scene }) => {
        gl.setClearColor(0x000000, 0);
        scene.background = null;
      }}
      camera={{
        position: [0, 0.7, 6.5],
        fov: 55,
        near: 0.1,
        far: 1000,
      }}
      style={{ width: "100%", height: "100%", background: "transparent" }}
    >
      <ambientLight intensity={0.45} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <directionalLight position={[-5, 3, -5]} intensity={0.8} />
      <pointLight position={[0, 5, 0]} intensity={0.5} />

      <Model modelPath={modelPath} />

      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
    </Canvas>
  );
}
