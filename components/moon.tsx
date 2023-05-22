import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import anime from 'animejs';
import { useScroll } from '../hooks/useScroll';

function Sphere(props: any): React.ReactElement {
  const ref = useRef();
  const moonFadeInAnimationRef = useRef<anime.AnimeInstance | null>();
  // animation
  const translateY = 150;
  const translateX = 200;
  const duration = 6000;
  const base = useLoader(THREE.TextureLoader, './2k_moon.jpeg');

  useFrame((_state, delta) => {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    (ref?.current as any).rotation.x += delta * 0.005;
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    (ref?.current as any).rotation.y += delta * 0.03;
  });

  const handleScroll = (scrollPosition: number): void => {
    // Get the scroll height of the page
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    // 80% of the scrollHeight
    const start = scrollHeight * 0.8;

    if (moonFadeInAnimationRef.current != null) {
      if (scrollPosition >= start) {
        const scrollPercent = (scrollPosition - start) / (scrollHeight - start);
        moonFadeInAnimationRef.current.seek(moonFadeInAnimationRef.current.duration * scrollPercent);
      }
    };
  };

  useEffect(() => {
    const moonFadeInAnimation = anime({
      targets: '.moon',
      opacity: 1,
      translateX: -(translateX),
      translateY: -(translateY),
      easing: 'easeInOutQuad',
      duration,
      autoplay: false
    });

    moonFadeInAnimationRef.current = moonFadeInAnimation;
    handleScroll(window.scrollY);
  }, []);
  useScroll(handleScroll);

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
      <Canvas >
        <Sphere position={[-2.4, 0, 0]} />
      </Canvas >
    </div>
  );
};
