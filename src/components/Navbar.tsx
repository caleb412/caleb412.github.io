'use client';

import { asset } from '@/lib/asset';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { navLinks, profile } from '@/content';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  // Highlight the link of the section currently in view
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <nav className="fixed top-0 z-20 w-full bg-flash-white/97 px-6 py-2 sm:px-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#" className="flex items-center gap-3" onClick={() => setActive('')}>
          <Image src={asset('/logos/logo-black.png')} alt="" width={48} height={48} className="h-11 w-11 sm:h-12 sm:w-12" />
          {/* TODO: replace with your own mark/wordmark in /public/logos */}
          <span className="font-mova text-xl tracking-[3px] text-eerie-black uppercase">{profile.firstName}</span>
        </a>

        <ul className="mt-2 hidden list-none gap-10 lg:flex xl:gap-14">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id}
                className={`nav-link block font-mova text-[21px] font-medium tracking-[3px] uppercase transition-colors hover:text-dim ${
                  active === link.id ? 'text-dim' : 'text-eerie-black'
                }`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <button
          type="button"
          className="lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}>
          <Image src={asset(open ? '/icons/close.png' : '/icons/menu.png')} alt="" width={30} height={30} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 top-[60px] z-10 bg-flash-white p-6 lg:hidden">
          <ul className="mt-16 flex list-none flex-col">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="font-arenq text-[13vw] leading-tight font-bold tracking-[1px] text-eerie-black uppercase md:text-[80px]">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
