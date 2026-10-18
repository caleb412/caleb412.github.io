'use client';

import { asset } from '@/lib/asset';
import dynamic from 'next/dynamic';
import { technologies } from '@/content';
import Section from './Section';
import SectionHeading from './SectionHeading';

// three.js needs the browser (WebGL), so this part is rendered on the client only
const TechBalls = dynamic(() => import('./canvas/TechBalls'), {
  ssr: false,
  loading: () => <div className="h-[280px]" />,
});

export default function Skills() {
  return (
    <Section
      id="skills"
      className="bg-night bg-cover bg-center"
      style={{ backgroundImage: `linear-gradient(165deg,rgba(20,20,20,0.85) 100%,rgba(109,109,116,0.8) 100%),url(${asset('/backgrounds/nairobi.jpg')})` }}>
      <SectionHeading eyebrow="My skills" title="Technologies." tone="dark" />

      {/* Not wrapped in <Reveal>: a CSS transform on an ancestor would break the fixed WebGL canvas */}
      <div className="mt-14">
        <TechBalls technologies={technologies} />
      </div>
    </Section>
  );
}
