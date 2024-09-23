import React, {Suspense} from 'react';
import {Html, OrbitControls, PerspectiveCamera, View} from "@react-three/drei";
import Lights from "./Lights.jsx";
import Bone from "./Bone.jsx";
import * as THREE from "three";

function ModelViewer({ controlRef, setRotationState }) {
    return (
        <View className="w-full h-full absolute">
            <ambientLight intensity={0.1} />
            <PerspectiveCamera makeDefault position={[0, 0, 4]} />
            <Lights />

            <OrbitControls
            makeDefault
            ref={controlRef}
            enableZoom={false}
            enablePan={false}
            rotate={0.4}
            target={new THREE.Vector3(0,0,0)}
            onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}/>

            <group>
                <Suspense fallback={
                    <Html>
                        <div className="flex items-center justify-center bg-black">
                            <p>Loading...</p>
                        </div>
                    </Html>}
                >
                    <Bone scale={[0.03, 0.03, 0.03]} />
                </Suspense>
            </group>

        </View>
    );
}

export default ModelViewer;