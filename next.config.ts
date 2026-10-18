import type { NextConfig } from 'next';

// Set NEXT_PUBLIC_BASE_PATH (e.g. "/portfolio") when deploying to a GitHub Pages project site.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
