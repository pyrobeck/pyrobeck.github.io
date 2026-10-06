import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { CameraControls, PerspectiveCamera, Environment } from "@react-three/drei";
import { WitchHouse } from "../components/WitchHouse2026.jsx";


function ThreeDWork() {
  return (
    <>
      <h1
          className="font-mono font-bold text-center leading-[0.9] mb-16
                     text-[4rem] sm:text-[6rem] md:text-[8rem]"
          style={{ fontFamily: '"Space Mono", monospace' }}
        >
          Witch House
        </h1>
      <main className="px-5">
        <div className="h-[600px] my-5">
          <Canvas>
            <PerspectiveCamera
              makeDefault
              fov={75}
              position={[10, 20, 0]}
              resolution={1024}
            />
            <CameraControls />
            <ambientLight intensity={0.5} />
            <Suspense>
              <WitchHouse></WitchHouse>
            </Suspense>
            <Environment background={false} preset={"apartment"} />
          </Canvas>
        </div>
      </main>
      <p className="text-base sm:text-sm text-purple-100">
            Made in Blender.  Materials and effects added in Unity.  
      </p>
      <br></br>
    </>
  );
}

export default ThreeDWork;