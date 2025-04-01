"use client";

import { ComputerGLTF } from "@/types/layout/service";
import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

export function ComputerModel(props: GroupProps) {
  const { nodes, materials } = useGLTF("/computerModel.glb") as unknown as ComputerGLTF;

  return (
    <group {...props} dispose={null}>
      <group position={[0.121, 0.007, 0]}>
        <mesh geometry={nodes.Object_6?.geometry} material={materials.MacBookPro} />
        <mesh geometry={nodes.Object_8?.geometry} material={materials.MacBookPro} />
      </group>
      <mesh geometry={nodes.Object_4?.geometry} material={materials.MacBookPro} />
    </group>
  );
}

useGLTF.preload("/computerModel.glb");
