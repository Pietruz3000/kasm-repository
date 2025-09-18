/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Ahri Registry',
    description: 'Test custom kasm registry',
    icon: 'https://pietruz3000.github.io/kasm-repository/1.1/image.png',
    listUrl: 'https://pietruz3000.github.io/kasm-repository/',
    contactUrl: 'https://github.com/Pietruz3000/kasm-repository/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-repository/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
