'use client';

import Image from 'next/image';
import { useState } from 'react';
import { projects } from '@/content';
import Reveal from './Reveal';
import Section from './Section';
import SectionHeading from './SectionHeading';

/**
 * Expanding project cards: one card is open at a time and takes most of the row;
 * the rest collapse to narrow strips with a rotated title (on large screens).
 */
export default function Projects() {
  const [active, setActive] = useState(projects[0]?.id);

  return (
    <Section id="projects" className="bg-flash-white">
      <SectionHeading eyebrow="Case studies" title="Projects." />
      <Reveal delay={100}>
        <p className="mt-4 max-w-3xl text-[17px] leading-[30px] text-eerie-black">
          A selection of things I have built. Click a card to open it.
        </p>
      </Reveal>

      <div className="mt-12 flex min-h-[70vh] flex-col gap-5 lg:flex-row">
        {projects.map((p) => {
          const isOpen = active === p.id;
          return (
            <div
              key={p.id}
              className={`relative overflow-hidden rounded-card shadow-project transition-[flex] duration-700 ease-out ${
                isOpen ? 'min-h-[440px] flex-[10] lg:flex-[3.5]' : 'min-h-[90px] flex-[2] lg:flex-[0.5]'
              } lg:min-w-[110px]`}>
              {/* Background: screenshot if provided, else a monochrome texture */}
              {p.image ? (
                <Image
                  src={p.image}
                  alt=""
                  fill
                  // Open card is ~900px wide on desktop (max-w-7xl row, flex 3.5), full width below lg
                  sizes="(min-width: 1025px) 900px, 100vw"
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-[linear-gradient(158deg,#333333_0%,#141414_100%)]" />
              )}
              <div className="absolute inset-0 bg-jet-light/50" />

              {isOpen ? (
                <div className="absolute inset-x-0 bottom-0 bg-card-caption p-6 backdrop-blur-sm sm:p-8">
                  <h3 className="font-beckman text-2xl font-bold text-timber-wolf uppercase sm:text-[32px]">{p.name}</h3>
                  <p className="mt-2 max-w-3xl text-xs leading-[18px] tracking-[1px] text-silver sm:text-sm sm:leading-6">
                    {p.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <li key={s} className="rounded-full bg-night/80 px-3 py-1 text-xs font-medium text-timber-wolf">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex gap-3">
                    {p.demo && <ProjectButton href={p.demo} label="Live Demo" icon="pineapple" />}
                    {p.repo && <ProjectButton href={p.repo} label="Source" icon="github" />}
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setActive(p.id)}
                  className="absolute inset-0 flex items-center justify-center text-left"
                  aria-label={`Open ${p.name}`}>
                  <span className="font-beckman text-lg leading-none font-extrabold tracking-[1px] whitespace-nowrap text-timber-wolf uppercase sm:text-[27px] lg:-rotate-90">
                    {p.name}
                  </span>
                </button>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function ProjectButton({ href, label, icon }: { href: string; label: string; icon: 'pineapple' | 'github' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group glass flex h-[50px] items-center gap-2 rounded-button pr-4 pl-3 font-beckman font-bold whitespace-nowrap text-timber-wolf transition duration-200 hover:bg-battle-gray hover:text-eerie-black">
      {icon === 'pineapple' ? (
        <>
          <Image src="/icons/pineapple.png" alt="" width={30} height={30} className="group-hover:hidden" />
          <Image src="/icons/pineappleHover.png" alt="" width={30} height={30} className="hidden group-hover:block" />
        </>
      ) : (
        <Image src="/icons/github.png" alt="" width={24} height={24} className="rounded-full bg-night p-0.5" />
      )}
      {label.toUpperCase()}
    </a>
  );
}
