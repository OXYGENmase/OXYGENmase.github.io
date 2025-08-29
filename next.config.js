/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/OXYGENmase-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/OXYGENmase-portfolio/' : '',
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
