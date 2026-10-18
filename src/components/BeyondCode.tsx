import { beyondCode } from '@/content';
import Reveal from './Reveal';
import Section from './Section';
import SectionHeading from './SectionHeading';

/** A deliberately small dark band linking out to creative work, kept separate from the professional sections. */
export default function BeyondCode() {
  return (
    <Section id="beyond" className="bg-night">
      <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:gap-16">
        <div>
          <SectionHeading eyebrow={beyondCode.eyebrow} title={beyondCode.title} tone="dark" />
          <Reveal delay={100}>
            <p className="mt-6 max-w-2xl text-[17px] leading-[30px] text-silver">{beyondCode.text}</p>
            <a
              href={beyondCode.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass mt-8 inline-flex h-14 items-center gap-3 rounded-button px-7 font-beckman text-base font-bold tracking-[1px] text-timber-wolf uppercase transition duration-200 hover:bg-battle-gray hover:text-eerie-black focus-visible:ring-2 focus-visible:ring-french focus-visible:outline-none sm:h-16 sm:px-9 sm:text-lg">
              {beyondCode.cta}
              <span aria-hidden className="text-xl">↗</span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </Reveal>
        </div>

        {/* The project's motto, set big in Arenq (an outlined display face). Not Overcame: it is a demo font whose punctuation and digits render as watermark stamps. */}
        <Reveal delay={200}>
          <p
            aria-hidden
            className="font-arenq text-[56px] leading-[0.95] text-timber-wolf/80 uppercase select-none sm:text-[72px] lg:text-[96px]">
            {beyondCode.motto.map((word) => (
              <span key={word} className="block">
                {word}
              </span>
            ))}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
