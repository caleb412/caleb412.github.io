import { profile } from '@/content';

export default function Footer() {
  return (
    <footer className="bg-night px-6 py-10 sm:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-taupe sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <ul className="flex gap-6 font-mova tracking-[2px] uppercase">
          <li>
            <a className="hover:text-timber-wolf" href={profile.links.github}>GitHub</a>
          </li>
          <li>
            <a className="hover:text-timber-wolf" href={profile.links.linkedin}>LinkedIn</a>
          </li>
          <li>
            <a className="hover:text-timber-wolf" href={`mailto:${profile.email}`}>Email</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
