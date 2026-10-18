// Prefixes paths in /public with the site's basePath (needed on GitHub Pages project sites).
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const asset = (path: string) => (path.startsWith('/') ? `${basePath}${path}` : path);
