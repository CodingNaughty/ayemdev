/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
      },
      {
        protocol: 'https',
        hostname: 'maain.dev',
      }
    ],
  },
  // Disable chunk splitting entirely
  webpack: (config) => {
    config.optimization.splitChunks = false;
    config.optimization.runtimeChunk = false;

    return config;
  },
  // Ensure proper static file serving
  assetPrefix: '.',
  trailingSlash: true,
}

module.exports = nextConfig

