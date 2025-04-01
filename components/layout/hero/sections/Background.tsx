import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Shape from "./shape";
import Image from "next/image";

const Background: React.FC = () => (
  <div className="absolute w-full h-full top-0 left-0 -z-10 xl:h-[60%] xl:top-auto xl:bottom-0 lg:h-[50%] md:h-[60%]">
    <Canvas>
      <Suspense fallback={<div>loading...</div>}>
        <Shape />
      </Suspense>
    </Canvas>
    <div className="absolute bottom-0 left-0 right-0 mx-auto h-[80%] w-max xl:h-full">
      <Image src="/hero.png" alt="Hero" width={500} height={800} priority className="w-full h-full object-cover" />
    </div>
  </div>
);

export default Background;
