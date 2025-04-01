import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ConsoleModel } from "./ConsoleModel";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

const ConsoleModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <ambientLight intensity={2.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <spotLight position={[-5, 5, 5]} intensity={1.2} />
        <ConsoleModel scale={1.0} position={[0, -0.05, 0]} rotation={[0, Math.PI / 4, 0]} />
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1.8}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.8}
        />
        <PerspectiveCamera position={[-0.4, 0.3, 1.8]} zoom={1.0} makeDefault />
      </Suspense>
    </Canvas>
  );
};

export default ConsoleModelContainer;
