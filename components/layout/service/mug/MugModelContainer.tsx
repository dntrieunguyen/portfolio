import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { MugModel } from "./MugModel";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

const MugModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <ambientLight intensity={2.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <spotLight position={[-5, 5, 5]} intensity={1.2} />
        <MugModel scale={1.2} position={[0, -0.1, 0]} rotation={[0, Math.PI / 5, 0]} />
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.7}
        />
        <PerspectiveCamera position={[0, 0.1, 1.8]} zoom={1.1} makeDefault />
      </Suspense>
    </Canvas>
  );
};

export default MugModelContainer;
