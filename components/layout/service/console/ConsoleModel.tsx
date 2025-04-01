"use client";
import { ConsoleGLTF } from "@/types/layout/service";
import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

export function ConsoleModel(props: GroupProps) {
  const { nodes, materials } = useGLTF("/consoleModel.glb") as unknown as ConsoleGLTF;

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.112}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            geometry={nodes.Cube_Material_0?.geometry}
            material={materials.Material}
            position={[0, 21.93, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/consoleModel.glb");
