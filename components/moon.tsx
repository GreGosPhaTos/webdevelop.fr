import React, { useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import useWindowDimensions from '../hooks/useWindowsDimensions';

function Sphere(props: any): React.ReactElement {
  const ref = useRef();
  const base = useLoader(THREE.TextureLoader, './2k_moon.jpeg');
  useFrame((_state, delta) => {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    (ref?.current as any).rotation.x += delta * 0.01;
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    (ref?.current as any).rotation.y += delta * 0.1;
  });

  return (
    <mesh
      {...props}
      ref={ref}>
      <sphereGeometry attach="geometry" args={[1.4, 32, 16]} />
      <meshBasicMaterial map={base} />
    </mesh>
  );
}

export const Moon: React.FunctionComponent = () => {
  const windowDimensions = useWindowDimensions();
  const minimumWidth = 550;
  if (windowDimensions.width < minimumWidth) {
    return <></>;
  }

  return (
    <div style={{ position: 'absolute', zIndex: -1, width: '100%', height: '100%' }}>
      <Canvas>
        <Sphere position={[-1.5, 0, 0]} />
      </Canvas >
    </div>
  );
};
