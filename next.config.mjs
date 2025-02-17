/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true
  },
  experimental: {
    turbotrace: {
      memoryLimit: 4000
    }
  },
  images: {
    unoptimized: true,
    domains: ['netlify.app'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60
  },
  distDir: '.next'
}

export default nextConfig
