import Image from 'next/image';
import { experiences, profile } from '@/content';
import Reveal from './Reveal';
import Section from './Section';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <Section
      id="experience"
      className="bg-flash-white bg-[linear-gradient(135deg,rgba(244,244,246,0.5)_60%,rgba(10,10,10,0.2)_100%),url('/backgrounds/white-abstract.png')] bg-cover">
      <SectionHeading eyebrow="What I have done so far" title="Experience." />

      <ol className="relative mt-14 ml-3 border-l-4 border-timeline-line sm:ml-6">
        {experiences.map((exp, i) => (
          <li key={exp.title} className="relative mb-12 pl-8 sm:pl-12">
            {/* timeline dot */}
            <span className="absolute top-6 -left-[14px] h-6 w-6 rounded-full border-4 border-flash-white bg-eerie-black shadow-[0_0_0_4px_#afafafd2]" />
            <Reveal delay={i * 120}>
              <article className="max-w-3xl rounded-panel bg-eerie-black p-6 shadow-card sm:p-8">
                <p className="text-sm font-semibold tracking-wider text-taupe uppercase">{exp.period}</p>
                <h3 className="mt-2 font-beckman text-2xl font-bold text-timber-wolf uppercase sm:text-[28px]">
                  {exp.title}
                </h3>
                <p className="mt-1 font-medium text-french">{exp.org}</p>
                <ul className="mt-5 list-disc space-y-2 pl-5 text-[15px] leading-6 tracking-wide text-silver marker:text-taupe">
                  {exp.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}

        {/* Final timeline stop: download CV (as in the original template) */}
        {profile.links.cv && profile.links.cv !== '#' && (
          <li className="relative pt-4 pl-8 sm:pl-12">
            <span className="absolute bottom-0 -left-[30px] flex h-14 w-14 items-center justify-center rounded-full border-4 border-flash-white bg-jet shadow-[0_0_0_4px_#afafafd2]">
              <Image src="/icons/resume.png" alt="" width={26} height={26} />
            </span>
            <Reveal delay={experiences.length * 120}>
              <a
                href={profile.links.cv}
                download={`${profile.name.replace(/\s+/g, '-')}-CV.pdf`}
                className="group mt-1 inline-flex h-[46px] items-center gap-3 rounded-button bg-jet-light px-4 font-beckman text-sm font-bold whitespace-nowrap text-timber-wolf transition duration-200 hover:bg-battle-gray hover:text-eerie-black focus-visible:ring-2 focus-visible:ring-dim focus-visible:outline-none sm:h-[58px] sm:px-5 sm:text-lg">
                MY RESUME
                <Image src="/icons/download.png" alt="" width={26} height={26} className="h-[23px] w-[23px] group-hover:hidden sm:h-[26px] sm:w-[26px]" />
                <Image
                  src="/icons/downloadHover.png"
                  alt=""
                  width={26}
                  height={26}
                  className="hidden h-[23px] w-[23px] group-hover:block sm:h-[26px] sm:w-[26px]"
                />
              </a>
            </Reveal>
          </li>
        )}
      </ol>
    </Section>
  );
}
