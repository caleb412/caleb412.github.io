/** Shared section shell: anchor id, padding and the 1280px content cap. */
export default function Section({
  id,
  className = '',
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`relative px-6 py-16 sm:px-16 sm:py-24 ${className}`}>
      <div className="relative mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}
