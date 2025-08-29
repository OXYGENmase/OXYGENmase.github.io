/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
