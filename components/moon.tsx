import React, { useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';

function Sphere(props: any): React.ReactElement {
  const ref = useRef();

  const base = useLoader(THREE.TextureLoader, './2k_moon.jpeg');
  useFrame((_state, delta) => {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    (ref?.current as any).rotation.x += delta * 0.005;
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    (ref?.current as any).rotation.y += delta * 0.03;
  });

  return (
    <mesh
      {...props}
      ref={ref}>
      <sphereGeometry attach="geometry" args={[1.6, 32, 16]} />
      <meshBasicMaterial map={base} />
    </mesh>
  );
}

export const Moon: React.FunctionComponent = () => {
  return (
    <div className='moon'>
      <Canvas>
        <Sphere position={[0, 1.4, 0]} />
      </Canvas >
    </div>
  );
};
