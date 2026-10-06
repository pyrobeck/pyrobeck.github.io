import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { CameraControls, PerspectiveCamera, Environment } from "@react-three/drei";
import { WitchHouse } from "../components/WitchHouse2026.jsx";


function ThreeDWork() {
  return (
    <>
      <main className="px-5">
        <div className="border-2 h-[700px] my-5 rounded-lg">
          <Canvas>
            <PerspectiveCamera
              makeDefault
              fov={75}
              position={[0, 0, 2]}
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
    </>
  );
}

export default ThreeDWork;