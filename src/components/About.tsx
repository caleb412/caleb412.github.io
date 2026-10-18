import { asset } from '@/lib/asset';
import Image from 'next/image';
import { about } from '@/content';
import Reveal from './Reveal';
import Section from './Section';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <Section id="about" className="bg-flash-white">
      <SectionHeading eyebrow="Introduction" title="Overview." />

      <Reveal delay={100}>
        <p className="mt-6 max-w-3xl text-[17px] leading-[30px] text-eerie-black">{about.intro}</p>
      </Reveal>

      <ul className="mt-16 grid grid-cols-1 gap-8 xs:grid-cols-2 lg:grid-cols-4">
        {about.services.map((s, i) => (
          <li key={s.title}>
            <Reveal delay={i * 120}>
              <div className="flex min-h-[260px] flex-col items-center justify-center gap-6 rounded-tile bg-eerie-black px-8 py-10 shadow-card-light transition-transform duration-300 hover:-translate-y-1">
                <Image src={asset(s.icon)} alt="" width={64} height={64} />
                <h3 className="text-center font-beckman text-xl font-bold tracking-wide text-timber-wolf uppercase">
                  {s.title}
                </h3>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
