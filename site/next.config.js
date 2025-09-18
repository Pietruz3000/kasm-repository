/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Ahri Registry',
    description: 'Test custom kasm registry',
    icon: 'https://pietruz3000.github.io/kasm-repository/1.1/image.png',
    listUrl: 'https://pietruz3000.github.io/kasm-repository/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
