'use client';

import { Decal, Float, OrbitControls, Preload, useTexture, View } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useRef, useState } from 'react';

type Tech = { name: string; icon: string };

/**
 * A slowly floating, flat-shaded icosahedron with the logo as a decal.
 * Ported from the original template's Ball.jsx. Drag a ball to spin it.
 */
function Ball({ icon, still }: { icon: string; still: boolean }) {
  const [decal] = useTexture([icon]);

  return (
    <Float speed={still ? 0 : 2.5} rotationIntensity={still ? 0 : 1} floatIntensity={still ? 0 : 2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh scale={2.75}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial color="#3d3d3d" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={decal} />
      </mesh>
    </Float>
  );
}

function hasWebGL() {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    return false;
  }
}

/**
 * All balls share ONE WebGL canvas: each <View> is a DOM box, and drei draws that
 * view's scene into the matching rectangle of the canvas. One canvas per ball (as in
 * the original template) hits the browser's ~16 WebGL-context limit and is heavy on phones.
 */
export default function TechBalls({ technologies }: { technologies: Tech[] }) {
  const container = useRef<HTMLDivElement>(null);
  const [webgl, setWebgl] = useState<boolean | null>(null);
  const [inView, setInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  // Drag-to-spin only with a mouse: on touch screens OrbitControls would swallow
  // the swipe and stop the page from scrolling.
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    setWebgl(hasWebGL());
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    setFinePointer(window.matchMedia('(pointer: fine)').matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Only animate while the section is on screen
  useEffect(() => {
    const el = container.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { rootMargin: '100px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={container} className="relative">
      <ul className="flex flex-wrap justify-center gap-x-6 gap-y-8 sm:gap-x-10">
        {technologies.map((t) => (
          <li key={t.name} className="flex w-24 flex-col items-center gap-2 sm:w-28">
            {webgl ? (
              <View className={`h-24 w-24 sm:h-28 sm:w-28 ${finePointer ? 'cursor-grab active:cursor-grabbing' : ''}`}>
                <Suspense fallback={null}>
                  <Ball icon={t.icon} still={reducedMotion} />
                </Suspense>
                {finePointer && <OrbitControls enableZoom={false} enablePan={false} />}
              </View>
            ) : (
              // No WebGL: show the flat logo on a dark disc instead
              // eslint-disable-next-line @next/next/no-img-element
              <img src={t.icon} alt="" className="h-24 w-24 rounded-full bg-[#3d3d3d] p-6 sm:h-28 sm:w-28" />
            )}
            <span className="text-center text-xs font-semibold tracking-wider text-taupe uppercase">{t.name}</span>
          </li>
        ))}
      </ul>

      {webgl && (
        <Canvas
          eventSource={container as React.RefObject<HTMLElement>}
          frameloop={inView ? 'always' : 'never'}
          dpr={[1, 2]}
          className="pointer-events-none"
          style={{ position: 'fixed', inset: 0, zIndex: 10 }}>
          <View.Port />
          <Preload all />
        </Canvas>
      )}
    </div>
  );
}
