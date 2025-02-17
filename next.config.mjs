/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['netlify.app']
  },
  distDir: '.next'
}

export default nextConfig
