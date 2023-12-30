import React, { useCallback, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, MeshProps, useFrame, useLoader } from '@react-three/fiber';
import anime from 'animejs';
import { useScroll } from '../hooks/useScroll';

type Rotation = { rotation: { x: number; y: number } };

function Sphere(props: MeshProps): React.ReactElement {
  const ref = useRef();
  const moonFadeInAnimationRef = useRef<anime.AnimeInstance | null>();
  // animation
  const translateY = 3;
  const translateX = -9;
  const duration = 6000;
  const base = useLoader(THREE.TextureLoader, './2k_moon.jpeg');

  useFrame((_state, delta) => {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    (ref?.current as unknown as Rotation).rotation.x += delta * 0.005;
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    (ref?.current as unknown as Rotation).rotation.y += delta * 0.03;
  });

  const handleScroll = useCallback((scrollPosition: number): void => {
    // Get the scroll height of the page
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    // 80% of the scrollHeight
    const start = scrollHeight * 0.8;

    if (moonFadeInAnimationRef.current != null) {
      if (scrollPosition >= start) {
        const scrollPercent = (scrollPosition - start) / (scrollHeight - start);
        moonFadeInAnimationRef.current.seek(
          moonFadeInAnimationRef.current.duration * scrollPercent
        );
      }
    }
  }, []);

  useEffect(() => {
    const moonFadeInAnimation = anime({
      targets: '.moon',
      opacity: 1,
      translateX: `${translateX}vw`,
      translateY: `${translateY}vh`,
      easing: 'easeInOutQuad',
      duration,
      autoplay: false
    });

    moonFadeInAnimationRef.current = moonFadeInAnimation;
    handleScroll(window.scrollY);
  }, []);
  useScroll(handleScroll);

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <mesh {...props} ref={ref as any}>
      <sphereGeometry attach="geometry" args={[1.6, 32, 16]} />
      <meshBasicMaterial map={base} />
    </mesh>
  );
}

export const Moon: React.FunctionComponent = () => {
  return (
    <div className="moon">
      <Canvas>
        <Sphere position={[-2.4, 0, 0]} />
      </Canvas>
    </div>
  );
};
