import localFont from 'next/font/local';

// Body and headline face. Poppins (SIL Open Font License) is bundled in the repo,
// so builds don't depend on reaching Google Fonts.
export const poppins = localFont({
  // next/font needs literal values here (no .map), it reads them at build time
  src: [
    { path: './fonts/poppins/poppins-400.woff2', weight: '400', style: 'normal' },
    { path: './fonts/poppins/poppins-500.woff2', weight: '500', style: 'normal' },
    { path: './fonts/poppins/poppins-600.woff2', weight: '600', style: 'normal' },
    { path: './fonts/poppins/poppins-700.woff2', weight: '700', style: 'normal' },
    { path: './fonts/poppins/poppins-800.woff2', weight: '800', style: 'normal' },
    { path: './fonts/poppins/poppins-900.woff2', weight: '900', style: 'normal' },
  ],
  variable: '--font-poppins-face',
  display: 'swap',
});

// Display faces from the design system (src/app/fonts/)
export const mova = localFont({ src: './fonts/mova.otf', variable: '--font-mova-face', display: 'swap' });
export const beckman = localFont({ src: './fonts/beckman.otf', variable: '--font-beckman-face', display: 'swap' });
export const arenq = localFont({ src: './fonts/arenq.otf', variable: '--font-arenq-face', display: 'swap' });
export const overcameBold = localFont({
  src: './fonts/overcame-bold.woff',
  variable: '--font-overcame-bold-face',
  display: 'swap',
});
export const overcameOutline = localFont({
  src: './fonts/overcame-outline.woff',
  variable: '--font-overcame-outline-face',
  display: 'swap',
});

export const fontVariables = [poppins, mova, beckman, arenq, overcameBold, overcameOutline]
  .map((f) => f.variable)
  .join(' ');
