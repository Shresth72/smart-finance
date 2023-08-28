"use client";

import * as THREE from "three";
import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Physics,
  usePlane,
  useConvexPolyhedron,
  ConvexPolyhedronArgs,
} from "@react-three/cannon";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Geometry } from "three-stdlib";
import { Mesh } from "three";

function toConvexProps(bufferGeometry: any) {
  const geo = new Geometry().fromBufferGeometry(bufferGeometry);

  geo.mergeVertices();
  return [
    geo.vertices.map((v) => [v.x, v.y, v.z]),
    geo.faces.map((f) => [f.a, f.b, f.c]),
    [],
  ];
}

type ShapeProps = {
  sides?: number;
  size?: number;
};

function Cone({ sides, ...props }: any): JSX.Element {
  const geo = useMemo(() => {
    return new THREE.ConeGeometry(0.7, 0.7, sides, 1);
  }, [sides]);

  const [ref]: any = useConvexPolyhedron(() => ({
    mass: 100,
    ...props,
    args: geo as any,
  }));

  return (
    <mesh castShadow ref={ref} {...props}>
      <coneGeometry args={[0.7, 0.7, sides, 1]} />
      <meshNormalMaterial />
    </mesh>
  );
}

function Cube({ size, ...props }: ShapeProps) {
  // note, this is wildly inefficient vs useBox
  const geo: any = useMemo(
    () => toConvexProps(new THREE.BoxGeometry(size, size, size)),
    [size]
  );
  const [ref]: any = useConvexPolyhedron(() => ({
    mass: 100,
    ...props,
    args: geo,
  }));
  return (
    <mesh castShadow receiveShadow ref={ref} {...props} geometry={geo}>
      <boxGeometry args={[size, size, size]} />
      <meshPhysicalMaterial color="rebeccapurple" />
    </mesh>
  );
}

function Plane(props: any) {
  const [ref]: any = usePlane(() => ({ type: "Static", ...props }));
  return (
    <mesh receiveShadow ref={ref}>
      <planeGeometry args={[8, 8]} />
      <meshStandardMaterial color="#ffb385" />
    </mesh>
  );
}

export const Scene = () => {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0,0,0], fov: 50 }}>
      <color attach="background" args={["lightpink"]} />
      <spotLight
        position={[15, 15, 15]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <Suspense fallback={null}>
        <Physics>
          <Plane position={[0,0,0]} rotation={[0,0,0]} />
          <OrbitControls enableZoom={false}   />
        </Physics>
      </Suspense>
    </Canvas>
  );
};
