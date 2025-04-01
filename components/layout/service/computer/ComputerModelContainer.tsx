import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { ComputerModel } from "./ComputerModel";

const ComputerModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <ambientLight intensity={2.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <spotLight position={[-5, 5, 5]} intensity={1} />
        <ComputerModel scale={1.5} position={[0, -0.1, 0]} rotation={[0, Math.PI / 6, 0]} />
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={2}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
        />
        <PerspectiveCamera position={[-0.3, 0.3, 1.2]} zoom={1.5} makeDefault />
      </Suspense>
    </Canvas>
  );
};

export default ComputerModelContainer;
