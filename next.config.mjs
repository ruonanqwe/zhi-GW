/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    unoptimized: true,
    domains: ['netlify.app']
  },
  distDir: '.next'
}

export default nextConfig
