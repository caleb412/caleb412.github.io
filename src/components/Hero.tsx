import Image from 'next/image';
import { profile } from '@/content';

export default function Hero() {
  return (
    <section className="relative h-svh min-h-[560px] w-full overflow-hidden">
      {/* World map under the diagonal split */}
      <picture>
        <source media="(min-width: 640px)" srcSet="/backgrounds/bw-map.jpeg" />
        <img src="/backgrounds/world-map.png" alt="" className="absolute inset-0 h-full w-full object-cover" />
      </picture>
      <div className="bg-hero-split absolute inset-0" />

      {/* Framed portrait, kept entirely inside the dark triangle.
          The split is a 135deg gradient stopped at 60%, so the diagonal is the line x + y = 0.6 × (width + height).
          A card at right r, bottom b, width w (height 1.18w) stays below it when 2.18w ≤ 0.4 × (width + height) − r − b.
          With r = 64px, b = 96px and ~60px breathing room that gives the lg width formula below. */}
      <div className="absolute right-6 bottom-28 aspect-[1186/1400] w-36 overflow-hidden rounded-card border border-white/15 shadow-card xs:w-44 sm:right-16 sm:w-56 lg:bottom-24 lg:w-[clamp(200px,calc((40vw_+_40svh_-_220px)/2.18),440px)]">
        <Image
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          fill
          priority
          sizes="(min-width: 1025px) 440px, 224px"
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto flex h-full max-w-7xl items-start px-6 pt-[22vh] sm:px-16">
        <div className="flex gap-5">
          {/* dot + fading rule */}
          <div className="mt-5 flex flex-col items-center">
            <div className="h-5 w-5 rounded-full bg-[#0a0a0a]" />
            <div className="h-40 w-1 bg-linear-to-b from-[rgba(10,10,10,0.8)] from-40% to-transparent to-70% sm:h-80" />
          </div>

          <div>
            <h1 className="mt-2 text-[40px] leading-tight font-black text-eerie-black uppercase xs:text-[50px] sm:text-[60px] lg:text-[80px] lg:leading-[90px]">
              Hi, I&apos;m{' '}
              <span className="font-mova text-[50px] font-extrabold text-eerie-black sm:text-[90px] sm:text-battle-gray">
                {profile.firstName}
              </span>
            </h1>
            <p className="mt-2 max-w-xl text-base font-medium text-eerie-black xs:text-xl sm:text-[26px] lg:text-[30px] lg:leading-10">
              {profile.role}.
            </p>
            <p className="mt-4 max-w-lg text-[15px] leading-7 text-dim sm:text-lg">{profile.tagline}</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-10 left-1/2 flex h-16 w-[35px] -translate-x-1/2 justify-center rounded-3xl border-4 border-dim p-2">
        <span className="h-3 w-3 animate-bounce rounded-full bg-taupe motion-reduce:animate-none" />
      </a>
    </section>
  );
}
