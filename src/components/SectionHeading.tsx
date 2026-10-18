import Reveal from './Reveal';

type Props = {
  eyebrow: string;
  title: string;
  /** "light" = on a light surface (eerie-black title), "dark" = on a dark surface */
  tone?: 'light' | 'dark';
};

/** Uppercase eyebrow + big title ending in a full stop, as in the design system. */
export default function SectionHeading({ eyebrow, title, tone = 'light' }: Props) {
  return (
    <Reveal>
      {/* taupe only passes contrast on dark grounds; dim is the light-ground equivalent */}
      <p
        className={`text-base font-semibold tracking-wider uppercase sm:text-lg ${
          tone === 'light' ? 'text-dim' : 'text-taupe'
        }`}>
        {eyebrow}
      </p>
      <h2
        className={`text-[30px] leading-tight font-black xs:text-[40px] sm:text-[48px] md:text-[60px] ${
          tone === 'light' ? 'text-eerie-black' : 'text-timber-wolf'
        }`}>
        {title}
      </h2>
    </Reveal>
  );
}
