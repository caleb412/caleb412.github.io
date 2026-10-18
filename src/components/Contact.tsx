'use client';

import Image from 'next/image';
import { useState } from 'react';
import { profile } from '@/content';
import Reveal from './Reveal';
import Section from './Section';
import SectionHeading from './SectionHeading';

/**
 * Contact form. There is no backend yet: on submit it opens the visitor's
 * email app with the message filled in (mailto:). See README → "Wiring the contact form".
 */
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const field =
    'rounded-input bg-eerie-black px-6 py-4 font-medium text-timber-wolf outline-none placeholder:text-taupe focus-visible:ring-2 focus-visible:ring-french';

  return (
    <Section id="contact" className="bg-flash-white">
      <Reveal>
        <div className="max-w-2xl rounded-panel bg-jet p-8 shadow-card">
          <SectionHeading eyebrow="Get in touch" title="Contact." tone="dark" />

          <form onSubmit={submit} className="mt-10 flex flex-col gap-6">
            <label className="flex flex-col">
              <span className="mb-4 font-medium text-timber-wolf">Your Name</span>
              <input name="name" required value={form.name} onChange={update} placeholder="What's your name?" className={field} />
            </label>
            <label className="flex flex-col">
              <span className="mb-4 font-medium text-timber-wolf">Your Email</span>
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={update}
                placeholder="What's your email?"
                className={field}
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-4 font-medium text-timber-wolf">Your Message</span>
              <textarea
                name="message"
                required
                rows={7}
                value={form.message}
                onChange={update}
                placeholder="What would you like to say?"
                className={`${field} resize-none`}
              />
            </label>

            <button
              type="submit"
              className="group glass flex h-[50px] w-[130px] items-center justify-center gap-3 rounded-button font-beckman text-lg font-bold text-timber-wolf transition duration-200 hover:bg-battle-gray hover:text-eerie-black sm:text-xl">
              SEND
              <Image src="/icons/send.png" alt="" width={24} height={24} className="group-hover:hidden" />
              <Image src="/icons/sendHover.png" alt="" width={24} height={24} className="hidden group-hover:block" />
            </button>
          </form>
        </div>
      </Reveal>
    </Section>
  );
}
