/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  experimental: {
    // This ensures the dev server binds to 0.0.0.0
    serverComponentsExternalPackages: []
  }
};

module.exports = nextConfig;
