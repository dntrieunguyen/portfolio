import * as THREE from "three";
import { GLTF } from "three-stdlib";

export interface ComputerGLTF extends GLTF {
  nodes: {
    [key: string]: THREE.Mesh;
  } & {
    Object_4?: THREE.Mesh;
    Object_6?: THREE.Mesh;
    Object_8?: THREE.Mesh;
  };
  materials: {
    MacBookPro?: THREE.Material;
  };
}

export interface ConsoleGLTF extends GLTF {
  nodes: {
    Cube_Material_0?: THREE.Mesh;
  };
  materials: {
    Material?: THREE.Material;
  };
}

export interface MugGLTF extends GLTF {
  nodes: {
    Coffee_Coup_0?: THREE.Mesh;
    Lid_0?: THREE.Mesh;
  };
  materials: {
    Texture?: THREE.Material;
    material?: THREE.Material;
  };
}

export interface CounterProps {
  from: number;
  to: number;
  text: string;
}

export interface ServiceItem {
  id: number;
  img: string;
  title: string;
  counter: number;
}
